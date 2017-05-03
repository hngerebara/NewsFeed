import React from 'react';
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import Sources from '../app/components/sources';

export default class Main extends React.Component {

    render() {
        console.log('props from login page', this.props.logout)
        return (
            <div>
                <Header logout1={this.props.logout}/>
                <Sources />
                <Footer />
            </div>
        );
    }

}