import React, { PropTypes } from 'react';
import { classNames } from '../utils';


const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

function Height(props) {
  const { className, children } = props;

  return (
    <div {...props} className={classNames(className, 'uk-height-1-1')}>
      {children}
    </div>
  );
}

Height.propTypes = propTypes;

export default Height;
