import React, { Component } from 'react';
import WideCard from '../components/WideCard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <WideCard title="Biomedical Engineering" where="The George Washington Univeristy" from="August 2010" to="May 2014" />
                <br /><br />
                <h1 className="subtopic">My Certifications</h1>
                <WideCard title="AWS Cloud Practicioner" where="Online" from="September 2019" to="September 2022" />
            </div>
        )
    }
}

export default Education;