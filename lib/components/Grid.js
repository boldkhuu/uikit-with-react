import React, { PropTypes } from 'react';
import { classNames } from '../utils';


const GUTTERS = ['medium', 'small', 'collapse'];

const propTypes = {
  className: PropTypes.string,
  gutter: PropTypes.oneOf(GUTTERS),
  divider: PropTypes.bool,
  children: PropTypes.node,
};

function Grid(props) {
  const { className, divider, gutter, children } = props;

  // initial classes
  const classes = [className, 'uk-grid'];

  // gutter
  if (GUTTERS.indexOf(gutter) > -1) {
    classes.push(`uk-grid-${gutter}`);
  }

  // divider
  if (divider) {
    classes.push('uk-grid-divider');
  }

  return (
    <div {...props} className={classNames(...classes)}>
      {children}
    </div>
  );
}

Grid.propTypes = propTypes;

export default Grid;
