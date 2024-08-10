import { Typography } from "antd";
import styles from "./EditUser.module.scss";

const { Title } = Typography;

export function AddEditProduct() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is AddEditProduct</Title>
        </div>
    );
}
