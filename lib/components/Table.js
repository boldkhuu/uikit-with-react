import React, { PropTypes } from 'react';
import { classNames } from '../utils';


const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function Table(props) {
  const { className, children } = props;

  const attr = Object.assign({}, props, {
    className: classNames('uk-table', className),
  });

  return <table {...attr}>{children}</table>;
}

Table.propTypes = propTypes;

export default Table;
