import { Typography } from "antd";
import styles from "./EditUser.module.scss";

const { Title } = Typography;

export function AddEditUser() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is AddEditUser</Title>
        </div>
    );
}
