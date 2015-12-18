import { classNames } from '../utils';
import React from 'react';


const WIDTHS = ['small', 'medium', 'large'];

const Width = React.createClass({
  displayName: 'UK Width',
  propTypes: {
    all: React.PropTypes.string,
    small: React.PropTypes.string,
    medium: React.PropTypes.string,
    large: React.PropTypes.string,
  },

  render() {
    const props = this.props;
    const { className, all } = props;

    // initial classes
    let classes = className ? [className] : [];

    // default widths
    if (all) {
      classes.push(`uk-width-${all}`);
    }

    // responsive widths
    WIDTHS.map(width => {
      if (props[width]) {
        classes.push(`uk-width-${width}-${props[width]}`);
      }
    });

    classes = classNames(...classes);

    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    );
  },
});

export default Width;
