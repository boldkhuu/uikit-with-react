import React, { PropTypes } from 'react';
import classNames from 'classnames';


const GUTTERS = ['medium', 'small', 'collapse'];

const propTypes = {
  className: PropTypes.string,
  gutter: PropTypes.oneOf(GUTTERS),
  divider: PropTypes.bool,
  children: PropTypes.node,
};

function Grid(props) {
  const { className, divider, gutter, children } = props;

  const attr = Object.assign({}, props, {
    className: classNames('uk-grid', className, {
      [`uk-grid-${gutter}`]: GUTTERS.indexOf(gutter) > -1,
      'uk-grid-divider': !!divider,
    }),
  });

  return (
    <div {...attr}>{children}</div>
  );
}

Grid.propTypes = propTypes;

export default Grid;
