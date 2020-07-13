import uniq from 'lodash/uniq';
import memoize from 'lodash/memoize';

const parseCompetitions = memoize((items: { competition: string }[]) =>
  uniq(items.map((item) => item.competition)).sort()
);

export default parseCompetitions;
