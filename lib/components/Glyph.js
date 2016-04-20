import React, { PropTypes } from 'react';
import { classNames } from '../utils';


const propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

function Glyph({ className, icon }) {
  const attr = {
    className: classNames(`uk-icon-${icon}`, className),
  };

  return <i {...attr}></i>;
}

Glyph.propTypes = propTypes;

export default Glyph;
