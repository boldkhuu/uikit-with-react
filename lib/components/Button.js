import React, { PropTypes } from 'react';
import classNames from 'classnames';


const STYLES = ['primary', 'success', 'danger', 'link'];
const SIZES = ['mini', 'small', 'large'];

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  colorStyle: PropTypes.oneOf(STYLES),
  size: PropTypes.oneOf(SIZES),
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

function Button(props) {
  const { className, colorStyle, size, children } = props;

  const attr = Object.assign({}, props, {
    className: classNames('uk-button', className, {
      [`uk-button-${colorStyle}`]: !!colorStyle,
      [`uk-button-${size}`]: !!size,
    }),
  });

  // a
  if (attr.href) {
    delete attr.type;
    return <a {...attr}>{children}</a>;
  }

  // button
  delete attr.href;
  return <button {...attr}>{children}</button>;
}

Button.propTypes = propTypes;

export default Button;
