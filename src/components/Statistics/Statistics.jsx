import PropTypes from 'prop-types';
import { StatisticList } from './StatisticTitle/StatisticList/StatisticList';
import { StatisticTitle } from './StatisticTitle/StatisticTitle';

export const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <StatisticTitle text={title} />}
      <StatisticList data={stats} />
    </div>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.object,
};
