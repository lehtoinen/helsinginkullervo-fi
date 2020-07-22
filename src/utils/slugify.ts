import memoize from 'lodash/memoize';

const slugify = memoize((str: string) =>
  str.replace(/\W+/g, '-').toLowerCase()
);

export default slugify;
