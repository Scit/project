import React from 'react';
import './style.css';

export default class Foo extends React.Component {
    render() {
        return (
            <div className="foo">
                <i className="fa fa-check" />
                <span className="foo__bar">Foo component</span>
            </div>
        );
    }
}