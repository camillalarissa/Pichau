import React from 'react';
import ReactDOM from 'react-dom';
import GlobalCss from './styles/globalCss';
import Routes from './routes'


ReactDOM.render(
    <>
        <Routes />
        <GlobalCss />
    </>,
    document.getElementById('root'));

