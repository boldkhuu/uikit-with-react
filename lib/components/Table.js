import { classNames } from '../utils';
import React from 'react';


const Table = React.createClass({
  propTypes: {
    children: React.PropTypes.any,
    className: React.PropTypes.string,
  },

  render() {
    const props = this.props;
    const { className, children } = this.props;

    const attr = {
      ...props,
      className: classNames('uk-table', className),
    };

    return <table {...attr}>{children}</table>;
  },
});

export default Table;
