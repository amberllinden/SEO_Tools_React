import React from 'react';
import Main from '../pages/main';
import ArraysComparison from '../pages/arraysComparison';
import WordProcessor from '../pages/wordProcessor';
import CountingCharacters from '../pages/countingCharacters';
import UrlCounter from '../pages/urlCounter';
import QueryProcessing from '../pages/queryProcessing';


const Routes = {
  '/': () => <Main />,
  '/arrays_comparison': () => <ArraysComparison />,
  '/word_processor': () => <WordProcessor />,
  '/counting_characters': () => <CountingCharacters />,
  '/query_processing': () => <QueryProcessing/>,
  '/url_counter': () => <UrlCounter/>,
};
export default Routes;
