import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/layout.js';
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import './stylesheets/style.css'

ReactDOM.render(
    <Header headers="Latest News"/>,
    document.getElementById('news-header')
);

ReactDOM.render(
    <Layout />
    , document.getElementById('app')
);

ReactDOM.render(
    <Footer/>,
    document.getElementById('news-footer')
);
