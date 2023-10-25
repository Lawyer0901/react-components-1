import { StatisticList } from "./StatisticTitle/StatisticList/StatisticList"
import { StatisticTitle } from "./StatisticTitle/StatisticTitle"



export const Statistics = ({ title, stats}) => {
    return (<div>{title && <StatisticTitle text={title} />}
        <StatisticList data={stats} />
    </div>)
}