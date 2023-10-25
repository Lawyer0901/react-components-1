import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import data from '../data/statistic.json'
import friends from '../data/friends.json'
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={data} title='Upload stats' />
      
      <FriendList friends={ friends} />
    </div>
  );
};
