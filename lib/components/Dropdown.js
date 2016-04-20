import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';


const propTypes = {
  mode: PropTypes.string,
  toggler: PropTypes.element.isRequired,
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
    const { className, mode, toggler, small, children } = this.props;

    const outerAttr = {
      className: classNames('uk-button-dropdown', className),
      'data-uk-dropdown': mode ? '{mode:\'click\'}' : '',
    };

    const innerAttr = {
      className: classNames('uk-dropdown', {
        'uk-dropdown-small': !!small,
      }),
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
