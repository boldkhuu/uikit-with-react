import React, { PropTypes } from 'react';
import classNames from 'classnames';


const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function ButtonGroup(props) {
  const { className, children } = props;

  const attr = Object.assign({}, props, {
    className: classNames('uk-button-group', className),
  });

  return <div {...attr}>{children}</div>;
}

ButtonGroup.propTypes = propTypes;

export default ButtonGroup;
