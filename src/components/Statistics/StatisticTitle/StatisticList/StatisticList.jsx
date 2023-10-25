import PropTypes from 'prop-types';

import { StatisticItem } from './StatisticItem/StatisticItem';
import { List } from './StatisticList.styled';
export const StatisticList = ({ data }) => {
  return (
    <List>
      {data.map(el => (
        <StatisticItem
          key={el.id}
          label={el.label}
          percentage={el.percentage}
        />
      ))}
    </List>
  );
};

StatisticList.protoType = PropTypes.arrayOf(
  PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  })
);
