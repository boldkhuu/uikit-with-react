import { classNames } from '../utils';
import React from 'react';


const Height = React.createClass({
  propTypes: {
    children: React.PropTypes.object,
  },

  render() {
    const props = this.props;
    const className = classNames(props.className, 'uk-height-1-1');

    return (
      <div {...props} className={className}>
        {this.props.children}
      </div>
    );
  },
});

export default Height;
