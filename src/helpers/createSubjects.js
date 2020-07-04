import times from 'ramda/src/times';
import flatten from 'ramda/src/flatten';

const [ rows, cols ] = [ 20, 20 ];

const createSubjects = ({ xBuckets, yBuckets, dataTemplate }) => {
  const createColumn = (xBucket) =>
    times((i) => {
      const xCat = xBucket;
      const yCat = yBuckets[i % yBuckets.length];
      return ({
        xCat,
        yCat,
        ...dataTemplate(xCat, yCat)
      })
    }, cols)
  return flatten(times(i => createColumn(xBuckets[i % xBuckets.length]), rows));
};

export default createSubjects;