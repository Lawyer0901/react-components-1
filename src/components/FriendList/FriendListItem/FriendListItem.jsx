import { Status } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li class="item">
        <Status isOnline={isOnline} class="status"></Status>
  <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{ name}</p>
</li>
}