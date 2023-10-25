import { Item } from "./StatisticItem.styled"

export const StatisticItem = ({ label, percentage }) => {
    return (<Item><span >{ label}</span>
      <span >{percentage}</span></Item>)
}