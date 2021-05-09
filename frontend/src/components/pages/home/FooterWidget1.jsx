import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FooterWidget1 extends Component {
    render() {
        return (
            <div className="footer_widget">
                <h3 className="widget_title">{this.props.title}</h3>
                <ul>
                    <li><Link to={this.props.link1}>{this.props.name1}</Link></li>
                    <li><Link to={this.props.link2}>{this.props.name2}</Link></li>
                    <li><Link to={this.props.link3}>{this.props.name3}</Link></li>
                    <li><Link to={this.props.link4}>{this.props.name4}</Link></li>
                    <li><Link to={this.props.link5}>{this.props.name5}</Link></li>
                    <li><Link to={this.props.link6}>{this.props.name6}</Link></li>
                    
                </ul>
            </div>
        )
    }
}

export default FooterWidget1
