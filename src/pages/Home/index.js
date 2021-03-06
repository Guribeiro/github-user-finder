import React, { Component } from 'react';

import Header from '../../components/Header';
//import Footer from '../../components/Footer';

import octocat from '../../assets/Octocat.png';
import './styles.scss';

class Home extends Component {
    /*
    constructor(props){
        super(props)
        this.state = {
            redirectToReferrer: this.props.redirectToReferrer
        }
    }

    componentDidMount(){
        console.log(this.state.redirectToReferrer)
    }
    */
    render() {
        return (
            <div className='Home'>
                <Header redirectToReferrer={this.props.redirectToReferrer} />
                <div className="container">
                    <figure>
                        <img src={octocat} alt="" />
                    </figure>
                    <h3>Welcome to the <span>guf</span></h3>
                    <p>Here you can search for any github profile you want. Check some of its informations and enjoy it.</p>
                </div>
                {/*}<Footer/>{*/}
            </div>
        );
    }
}

export default Home;