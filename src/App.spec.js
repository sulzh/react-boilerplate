import React from 'react';
// import { render } from 'react-testing-library';
import { render, cleanup } from '@testing-library/react';
// import { } from '@testing-library/jest-dom';
// import 'jest-dom/extend-expect';
// import 'react-testing-library/cleanup-after-each';
import App from './App';

describe('App', () => {
  it('Render without errors', () => {
    render(<App/>);
    cleanup();
  })
})