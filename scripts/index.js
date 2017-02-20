import React from 'react';
import { render } from 'react-dom';
import {
  makeV3Route,
} from './AppV3';

render(
  <div>
    {makeV3Route()}
  </div>,
  document.getElementById('root')
);
