import React from 'react';
import Main from '../pages/main';
import ArraysComparison from '../pages/arraysComparison';

const Routes = {
  '/': () => <Main />,
  '/arrays_comparison': () => <ArraysComparison />,
};
export default Routes;
