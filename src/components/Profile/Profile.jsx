import PropTypes from 'prop-types';
import { Container, Name, Tag, Location } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div className="description">
        <img src={avatar} alt={username} className="avatar" />
        <Name>{username}</Name>
        <Tag className="tag">{tag}</Tag>
        <Location className="location">{location}</Location>
      </div>

      <ul className="stats">
        <li>
          <span className="label">followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </Container>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
