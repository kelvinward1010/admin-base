import { Col, Flex, Form, Input, Row, Typography } from "antd";
import styles from "./User.module.scss";
import { useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";
import { ButtonConfig } from "@/components/buttonconfig";
import { IUserTable } from "../types";
import TableUser from "../components/TableUser";

const { Text } = Typography;

export function User() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [usersSelected, setUsersSelected] = useState<IUserTable[]>([]);
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleChangeSearch = (value: string) => {
        if (timeRef.current) {
            clearTimeout(timeRef.current);
        }

        timeRef.current = setTimeout(() => {
            searchParams.set("searchContent", value.trim());
            searchParams.delete("pageIndex");
            searchParams.delete("pageSize");
            setSearchParams(searchParams);
        }, 1200);
    };

    return (
        <div className={styles.container}>
            <Row justify={"space-between"} align={"middle"}>
                <Col span={10}>
                    <Text className={styles.label_main}>User</Text>
                </Col>
                <Col span={4}>
                    <Form>
                        <Input.Search
                            onChange={(e) => handleChangeSearch(e.target.value)}
                            placeholder="Search"
                        />
                    </Form>
                </Col>
            </Row>
            <div className={styles.table_wrapper}>
                <Flex gap={10} justify={"end"} align={"middle"}>
                    <ButtonConfig lable={"Add"} />
                    <ButtonConfig
                        lable={"Delete"}
                        className={`${usersSelected ? styles.deleted : styles.notdelected}`}
                    />
                </Flex>
                <TableUser setUsersSelected={setUsersSelected} />
            </div>
        </div>
    );
}
