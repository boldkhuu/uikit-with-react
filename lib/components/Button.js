import React, { PropTypes } from 'react';
import { classNames } from '../utils';


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

  // initial classes
  const classes = className ? [className] : [];
  classes.push('uk-button');

  // colorStyle
  if (colorStyle) {
    classes.push(`uk-button-${colorStyle}`);
  }

  // size
  if (size) {
    classes.push(`uk-button-${size}`);
  }

  const attr = Object.assign({}, props, { className: classNames(...classes) });

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
