import { classNames } from '../utils';
import React from 'react';


const Dropdown = React.createClass({
  propTypes: {
    mode: React.PropTypes.string,
    toggler: React.PropTypes.any.isRequired,
    children: React.PropTypes.any,
    small: React.PropTypes.bool,
    className: React.PropTypes.string,
  },

  _renderChildren(children) {
    let items = children;

    if (!Array.isArray(items)) {
      items = [items];
    }

    return items.map((child, index) => {
      return <li key={index}>{child}</li>;
    });
  },

  render() {
    const props = this.props;
    const { className, mode, toggler, small, children } = props;

    let classes = ['uk-dropdown'];
    if (small) {
      classes.push('uk-dropdown-small');
    }

    const outerAttr = {
      className,
      'data-uk-dropdown': mode ? `{mode:'click'}` : '',
    };

    const innerAttr = {
      className: classNames(...classes),
    };

    return (
      <div {...outerAttr}>
        {toggler}

        <div {...innerAttr}>
          <ul className="uk-nav uk-nav-dropdown">
            {this._renderChildren(children)}
          </ul>
        </div>
      </div>
    );
  },
});

export default Dropdown;
