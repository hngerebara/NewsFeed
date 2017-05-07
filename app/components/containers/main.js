import React from 'react';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sources from '../../components/Sources';

/**
 * Container of the news page.
 * @extends React.Component
 */
export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Header logout={this.props.logout}/>
                <Sources />
                <Footer />
            </div>
        );
    }

}