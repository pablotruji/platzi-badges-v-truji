import React from 'react';

import "./styles/Badge.css";
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {

    render(){      
    //const firstName = "Jaime";
    //const lastName = "Ramos";
        return (
            <div className="Badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia"/>
                </div> 
                
                <div className="badge_section-name">
                    <Gravatar className="badge_avatar" email={this.props.email} alt="Avatar"/>
                    <h1>
                        {this.props.firstName} <br/> 
                        {this.props.lastName}
                    </h1>
                </div>
                <div className="badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <h3>@{this.props.twitter}</h3>
                </div>
                <div className="badge_footer">
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;