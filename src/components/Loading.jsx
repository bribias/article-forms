import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div style={{
                'width': '80vw',
                'height': '80vh',
                'display': 'flex',
                'justifyContent': 'center',
                'alignItems': 'center'
            }}>
                <h1>Loading</h1>
                <img src="https://orig00.deviantart.net/c924/f/2013/003/6/9/partart_loading_boredoom_6_by_g2k2007-d5q8zyt.gif"
                    alt="loading spinner" style={{ height: '150px', width: '100px' }}
                />
            </div>
        );
    }
}