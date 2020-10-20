import React, {Component} from 'react';
import Social from '../components/Social';

class Contact extends Component{
    render() {
        return (
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Personal Wordpress: <a href="tflucker.wordpress.com" target="_blank">tflucker.wordpress.com</a></h3>
                <h3>Linked In: <a href="https://www.linkedin.com/in/timothy-flucker/" target="_blank">https://www.linkedin.com/in/timothy-flucker/</a></h3>

                <Social />
            </div>
        )
    }
}

export default Contact;