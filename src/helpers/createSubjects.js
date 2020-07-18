import times from 'ramda/src/times';
import flatten from 'ramda/src/flatten';

const [ rows, cols ] = [ 20, 20 ];

const createSubjects = ({ xBuckets, yBuckets, dataTemplate }) => {
  const createColumn = (xBucket, row) =>
    times((col) => {
      const xCat = xBucket;
      const yCat = yBuckets[col % yBuckets.length];
      return ({
        id: `${row}-${col}`,
        xCat,
        yCat,
        ...dataTemplate(xCat, yCat)
      })
    }, cols);
  return flatten(times(row => createColumn(xBuckets[row % xBuckets.length], row), rows));
};

export default createSubjects;