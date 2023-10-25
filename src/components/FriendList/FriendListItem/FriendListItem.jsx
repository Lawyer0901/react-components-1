import { Status } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li >
        <Status isOnline={isOnline} ></Status>
  <img  src={avatar} alt={name} width="48" />
        <p >{ name}</p>
</li>
}