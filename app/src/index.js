import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RoutedApp from 'containers/RoutedApp';
import 'font-awesome/css/font-awesome.css';
import 'babel-polyfill';
import './index.css';

const AppWithRoute = RoutedApp(App);

ReactDOM.render(<AppWithRoute />, document.getElementById('root'));
