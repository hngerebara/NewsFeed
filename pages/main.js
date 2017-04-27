import React from 'react';
import Layout from '../app/components/layout';
import Header from "../app/components/header";
import Footer from "../app/components/footer";

export default class Main extends React.Component {

    render() {
        console.log(this.props.user)
        return (
            <div>
                <Header />
                <Layout />
                <Footer />
            </div>
        );
    }

}