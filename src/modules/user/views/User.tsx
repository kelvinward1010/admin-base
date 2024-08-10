import { Typography } from "antd";
import styles from "./User.module.scss";

const { Title } = Typography;

export function User() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is User</Title>
        </div>
    );
}
