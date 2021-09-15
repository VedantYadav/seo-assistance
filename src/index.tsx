import React from 'react';

import { css, Global } from '@emotion/react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { App } from './App';
import { Interlink } from './component/Interlink';
import { Tags } from './component/Tags';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global styles={GlobalStyles} />
      <Switch>
        <Route path="/tags" component={Tags} />
        <Route path="/interlink" component={Interlink} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
