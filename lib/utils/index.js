/**
 * Concatnate given classes with whitespace
 * @param  {...String} classes one or more classes
 * @return {String} whitespace separated classes string
 */
function classNames(...classes) {
  // remove empty elements ('', null, undefined)
  const filtered = classes.filter(n => n);

  return filtered.join(' ');
}

export { classNames };
