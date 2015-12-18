import { classNames } from '../utils';
import React from 'react';


const Glyph = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
  },

  render() {
    const props = this.props;
    const { className } = props;

    const attr = {
      className: classNames(`uk-icon-${props.icon}`, className),
    };

    return <i {...attr}></i>;
  },
});

export default Glyph;
