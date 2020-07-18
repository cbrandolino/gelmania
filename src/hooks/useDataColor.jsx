import colorInterpolate from 'color-interpolate';

import { useStudyContext } from '../contexts/StudyContext';
import { normalize } from '../helpers/math';

const vizColors = {
  low: '#005e60',
  neutral: '#f4fae1',
  high: '#93003a',
}

const colorMap = colorInterpolate(Object.values(vizColors));

const useDataColor = ({ key, condition }) => {
  const { getCondition, currentKey } = useStudyContext();
  const dataKey = key || currentKey;
  const { stats } = getCondition(condition);
  return {
    getSubjectColor: (item) => {
      const { min, max } = stats[dataKey];
      const normalizedValue = normalize(item[dataKey], min, max);
      return colorMap(normalizedValue);
    }
  }
}

export default useDataColor;