import { Typography } from "antd";
import styles from "./Product.module.scss";

const { Title } = Typography;

export function Product() {
    return (
        <div className={styles.container}>
            <Title level={3}>This is Product</Title>
        </div>
    );
}
