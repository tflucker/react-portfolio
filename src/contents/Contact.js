import React, {Component} from 'react';
import {FaGithub, FaLinkedin, FaWordpress} from 'react-icons/fa';

class Contact extends Component{
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me</h1>
                <h3><FaWordpress /> Personal Wordpress: <a href="tflucker.wordpress.com" target="_blank">tflucker.wordpress.com</a></h3>
                <h3><FaGithub /> Github: <a href="https://github.com/tflucker" target="_blank">https://github.com/tflucker</a></h3>
                <h3><FaLinkedin /> Linked In: <a href="https://www.linkedin.com/in/timothy-flucker/" target="_blank">https://www.linkedin.com/in/timothy-flucker/</a></h3>
            </div>
        )
    }
}

export default Contact;