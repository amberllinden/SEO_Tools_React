import React from 'react';
import Main from '../pages/main';
import ArraysComparison from '../pages/arraysComparison';
import WordProcessor from '../pages/wordProcessor';
import CountingCharacters from '../pages/countingCharacters';

const Routes = {
  '/': () => <Main />,
  '/arrays_comparison': () => <ArraysComparison />,
  '/word_processor': () => <WordProcessor />,
  '/counting_characters': () => <CountingCharacters />,
};
export default Routes;
