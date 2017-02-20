import React from 'react';
import { render } from 'react-dom';
import {
  mountVersion3,
} from './AppV3';
import {
  mountVersion4,
} from './AppV4';

// Mount specific version to test.
render(
  <div>
    {mountVersion3()}
  </div>,
  document.getElementById('root')
);
