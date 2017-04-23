import React from 'react';
import Layout from './layout.js';
import Header from "./header";
import Footer from "./footer";

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Layout />
                <Footer />
            </div>
        );
    }

}