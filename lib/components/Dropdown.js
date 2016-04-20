import React, { PropTypes, Component } from 'react';
import { classNames } from '../utils';


const propTypes = {
  mode: PropTypes.string,
  toggler: PropTypes.any.isRequired,
  children: PropTypes.node,
  small: PropTypes.bool,
  className: PropTypes.string,
};

class Dropdown extends Component {
  _renderChildren(children) {
    let items = children;

    if (!Array.isArray(items)) {
      items = [items];
    }

    return items.map((child, index) =>
      <li key={index}>{child}</li>
    );
  }

  render() {
    const props = this.props;
    const { className, mode, toggler, small, children } = props;

    const classes = ['uk-dropdown'];
    if (small) {
      classes.push('uk-dropdown-small');
    }

    const outerAttr = {
      className: `${className} uk-button-dropdown`,
      'data-uk-dropdown': mode ? '{mode:\'click\'}' : '',
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
  }
}

Dropdown.propTypes = propTypes;

export default Dropdown;
