import { classNames } from '../utils';
import React from 'react';


const GUTTERS = ['medium', 'small', 'collapse'];

const Grid = React.createClass({
  displayName: 'UK Grid',
  propTypes: {
    gutter: React.PropTypes.oneOf(GUTTERS),
    divider: React.PropTypes.bool,
  },

  render() {
    const props = this.props;

    // initial classes
    const classes = [props.className, 'uk-grid'];

    // gutter
    if (GUTTERS.indexOf(props.gutter) > -1) {
      classes.push(`uk-grid-${props.gutter}`);
    }

    // divider
    if (props.divider) {
      classes.push('uk-grid-divider');
    }

    const className = classNames(...classes);

    return (
      <div {...props} className={className}>
        {this.props.children}
      </div>
    );
  },
});

export default Grid;
