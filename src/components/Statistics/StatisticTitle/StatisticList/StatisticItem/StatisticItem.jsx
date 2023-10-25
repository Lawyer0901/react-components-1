import PropTypes from 'prop-types';

import { Item, Persentage } from './StatisticItem.styled';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li>
      <Item>{label}</Item>
      <Persentage>{percentage}</Persentage>
    </li>
  );
};

StatisticItem.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
