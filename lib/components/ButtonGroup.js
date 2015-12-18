import { classNames } from '../utils';
import React from 'react';


const ButtonGroup = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
  },

  render() {
    const props = this.props;
    const { className, children } = this.props;

    const attr = {
      ...props,
      className: classNames('uk-button-group', className),
    };

    return <div {...attr}>{children}</div>;
  },
});

export default ButtonGroup;
