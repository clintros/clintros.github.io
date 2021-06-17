import React, { Component } from 'react';
import '../App.sass';
import '../index.css';

class Results extends Component {
  
render() {

    let content;

    if (this.props.loading) {
        content = <div className="results-container"><div className="results"><img src={require('../images/ajax-loader.gif')} /></div></div>
    } else {
        content =
        <div>
            <ul>
                {this.props.mData.map((matches, index) => {
                return <div className="results-container"><div className="results" key={index}>
                    {JSON.stringify(matches.attributes.stats)}
            
              </div></div>
        })}
            </ul>
        </div>
    }


    return (
        <>
        {content}
        </>

)


    }
}

export default Results;