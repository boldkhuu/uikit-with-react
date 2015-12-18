import { classNames } from '../utils';
import React from 'react';


const STYLES = ['primary', 'success', 'danger', 'link'];
const SIZES = ['mini', 'small', 'large'];

const Button = React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    colorStyle: React.PropTypes.oneOf(STYLES),
    size: React.PropTypes.oneOf(SIZES),
    href: React.PropTypes.string,
    onClick: React.PropTypes.func,
  },

  render() {
    const props = this.props;
    const { className, colorStyle, size, children } = props;

    // initial classes
    let classes = className ? [className] : [];
    classes.push('uk-button');

    // colorStyle
    if (colorStyle) {
      classes.push(`uk-button-${colorStyle}`);
    }

    // size
    if (size) {
      classes.push(`uk-button-${size}`);
    }

    const attr = {
      ...props,
      className: classNames(...classes),
    };

    // a
    if (attr.href) {
      delete attr.type;
      return <a {...attr}>{children}</a>;
    }

    // button
    delete attr.href;
    return <button {...attr}>{children}</button>;
  },
});

export default Button;
