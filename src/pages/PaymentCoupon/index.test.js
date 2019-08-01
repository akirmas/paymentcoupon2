import React from 'react';
import ReactDOM from 'react-dom';
import Page from './index';
const data = require('../../../public/index.json')

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page {...{data}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});