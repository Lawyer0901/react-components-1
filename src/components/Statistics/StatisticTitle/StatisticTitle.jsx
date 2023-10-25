import PropTypes from 'prop-types';

import { Title } from './StatisticTitle.styled';
export const StatisticTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

Title.propTypes = {
  text: PropTypes.string,
};
