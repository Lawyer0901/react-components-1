import { FriendListItem } from "./FriendListItem/FriendListItem"



export const FriendList = ({ friends }) => {
    return <ul>
        {friends.map(el => <FriendListItem key={ el.id} avatar={ el.avatar} name={el.name} isOnline={el.isOnline} />)}
</ul>
}