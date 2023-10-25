import { StatisticItem } from "./StatisticItem/StatisticItem"

export const StatisticList = ({data}) => {
    return (<ul>{data.map(el => <StatisticItem key={el.id} label={el.label} percentage={el.percentage} />)}</ul>)
}