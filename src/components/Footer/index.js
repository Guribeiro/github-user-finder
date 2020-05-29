import React, { Component } from 'react';
import './style.scss';

import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaWhatsapp
} from 'react-icons/fa'

class Footer extends Component {


    render() {
        return (
            <div className='Footer'>
                <div className="container">
                    <div className="infos">
                        <h3>Essa aplicação foi criada por: Gustavo Henrique Ribeiro Dias</h3>
                        <div className="infos-techs">
                            <span>* Tecnologias utilizadas</span>
                            <ul>
                                <li>
                                    <a href="/">React Js</a>
                                </li>
                                <li>
                                    <a href="/">
                                        react-icons
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        react-router-dom
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        sass
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social">
                        <a href="/">
                            <FaTwitter size='24' color='white' />
                        </a>
                        <a href="/">
                            <FaFacebook size='24' color='white' />
                        </a>
                        <a href="/">
                            <FaGithub size='24' color='white' />
                        </a>
                        <a href="/">
                            <FaLinkedin size='24' color='white' />
                        </a>
                        <a href="/">
                            <FaWhatsapp size='24' color='white' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;