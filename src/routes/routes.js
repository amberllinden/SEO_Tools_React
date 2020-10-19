import React from 'react';
import Main from '../pages/main';
import ArraysComparison from '../pages/arraysComparison';
import WordProcessor from '../pages/wordProcessor';

const Routes = {
  '/': () => <Main />,
  '/arrays_comparison': () => <ArraysComparison />,
  '/word_processor': () => <WordProcessor />,
};
export default Routes;
