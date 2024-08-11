import { Bar } from "@ant-design/plots";
import styles from "./BarChart.module.scss";

interface ColumnChartProps {
    data: any;
}

function BarChart({ data }: ColumnChartProps) {
    const config = {
        data: data ?? [],
        xField: "month",
        yField: "value",
        label: {
            textBaseline: "bottom",
        },
        style: {
            radiusTopLeft: 10,
            radiusTopRight: 10,
        },
    };
    return (
        <div className={styles.container}>
            <Bar {...config} />
        </div>
    );
}

export default BarChart;
