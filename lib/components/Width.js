import React, { PropTypes } from 'react';
import classNames from 'classnames';


const propTypes = {
  all: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

function Width(props) {
  const { className, all, small, medium, large, children } = props;

  const attr = Object.assign({}, props, {
    className: classNames(className, {
      [`uk-width-${all}`]: !!all,
      [`uk-width-small-${small}`]: !!small,
      [`uk-width-medium-${medium}`]: !!medium,
      [`uk-width-large-${large}`]: !!large,
    }),
  });

  return (
    <div {...attr}>{children}</div>
  );
}

Width.propTypes = propTypes;

export default Width;
