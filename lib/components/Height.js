import React, { PropTypes } from 'react';
import classNames from 'classnames';


const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function Height(props) {
  const { className, children } = props;

  const attr = Object.assign({}, props, {
    className: classNames('uk-height-1-1', className),
  });

  return (
    <div {...attr}>{children}</div>
  );
}

Height.propTypes = propTypes;

export default Height;
