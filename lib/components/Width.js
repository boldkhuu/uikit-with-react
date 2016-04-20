import React, { PropTypes } from 'react';
import { classNames } from '../utils';


const WIDTHS = ['small', 'medium', 'large'];

const propTypes = {
  all: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

function Width(props) {
  const { className, all, children } = props;

  // initial classes
  let classes = className ? [className] : [];

  // default widths
  if (all) {
    classes.push(`uk-width-${all}`);
  }

  // responsive widths
  WIDTHS.forEach(width => {
    if (props[width]) {
      classes.push(`uk-width-${width}-${props[width]}`);
    }
  });

  classes = classNames(...classes);

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  );
}

Width.propTypes = propTypes;

export default Width;
