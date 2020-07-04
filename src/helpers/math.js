import gaussian from 'gaussian';

const random = (min, max) =>
  Math.random() * (max - min) + min;

const gaussianSample = (mean, variance) =>
  gaussian(mean, variance).ppf(Math.random());

export { random, gaussianSample };