import times from 'ramda/src/times';
import flatten from 'ramda/src/flatten';

const [ rows, cols ] = [ 20, 20 ];

const initializeStat = (value) => ({
  max: value,
  min: value,
  sum: value,
  count: 1,
});

const addDatapointToStat = (newValue, { max, min, sum, count }) => ({
  max: Math.max(max, newValue),
  min: Math.min(min, newValue),
  sum: newValue + sum,
  count: count + 1,
});

const addStatsForSubject = (subject, stats, statsFor) =>
  statsFor.reduce((acc, key) => {
    const newValue = subject[key];
    const previousStat = acc[key];
    return {
      ...previousStat,
      [key]: previousStat ?
        addDatapointToStat(newValue, previousStat):
        initializeStat(newValue),
    };
  }, stats);

const collectStats = (stats) => {
  return {};
};

const initSubjects = ({ xBuckets, yBuckets, dataTemplate, statsFor=[] }) => {
  let runningStats = {};
  const createColumn = (xBucket, row) =>
    times((col) => {
      const xCat = xBucket;
      const yCat = yBuckets[col % yBuckets.length];
      const subjectData = {
        id: `${row}-${col}`,
        xCat,
        yCat,
        ...dataTemplate(xCat, yCat)
      };
      runningStats = addStatsForSubject(subjectData, runningStats, statsFor);
      return subjectData;
    }, cols);
  const subjects = flatten(times(row => 
    createColumn(xBuckets[row % xBuckets.length], row), rows));
  return {
    subjects,
    stats: collectStats(runningStats, statsFor),
  };
};

export default initSubjects;