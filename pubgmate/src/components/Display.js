import React, { useState } from 'react';
import '../App.sass';
import '../index.css';

export default function Display(props) {

    const [input, setInput] = useState('');
    const nameData = props.data;
    
    const handleChange = (e) => {
        setInput(e.target.value);
    }

    let content;

    
    // Display some initial content if a search hasn't been initiated.
    if (!props.fetchPlayerComplete) {
        content = 
        <div className="results-container"><div className="columns"><div className="column is-full animated fadeIn delay-6">
            <article className="message has-margin-40">
                <div className="message-header text">
                    <p>How to use PUBG Mate</p>
                </div>

                <div className="message-body text">
                    <p><b>Enter a PUBG player name above (case sensitive) to retrieve a list of the players that have been in your matches and some stats.</b></p>
                    <p>• You can click on a player name to go to their pubg.op.gg profile. </p>
                    <p>• You can use the filter box to filter the list in real-time.</p>
                    <p>• Currently only Steam users are able to use PUBG Mate, and we can only retrieve 14 days worth of stats from PUBG.</p>        
                </div>
            </article>
    
            <article className="message has-margin-40">
                <div className="message-header text">
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="message-body text">
                    <p><b>Why does the name I searched for appear at the top of the list with a blue highlight?</b></p>
                    <p>This is so that you can easily compare the stats of the player you searched for against the rest of the players in the list.</p>
                    <br/>
                    <p><b>Why can you only get the last 14 days worth of data?</b></p>
                    <p>The PUBG API only provides the last 14 days worth of data. This is a decision made by the API developers.</p><br/>
                    <p><b>Who are you and what are you doing with my stats?</b></p>
                    <p>My name is chX and I'm a web developer from Australia. I'm also an avid PUBG player and started playing it on the first day of early-access.</p>
                    <p>I often found myself using PUBG stat sites and decided to create my own to push myself as a developer.</p>
                </div>
            </article>
        </div></div></div>
    }
    
    // Display a loading animation when a search has been initiated.
    else if (props.fetchComplete === 'loading') {
        content = <div className="results-container"><div className="results"><img src={require('../images/infinity.svg')} alt="Loading"/></div></div>
    }

    // Display our formatted API data once API calls and data processing has completed.
    else if (props.fetchPlayerComplete === 'true' && props.fetchComplete === 'true') {
    
        // This allows our live filter to work.
        let filteredNames = nameData.filter((name) => {
        return name.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
        })
        

        content = 
        
        <div className="results-container">
            <div className="columns">
                <div className="column is-full">
                    <input className='input is-small is-info has-margin-bottom-10 animated fadeIn delay-1' type='text' placeholder="Type a name to filter" 
                    value={input} onChange={handleChange}></input>
                        <div className="columns">
                            <div className="column is-full">
                                <table className="table is-narrow is-completely-borderless">
                                    <thead>
                                    <tr>
                                    <th><b>Player Name</b></th>
                                    <th><b>Times in same match</b></th>
                                    </tr>
                                    </thead>
                                <tbody>

                                {filteredNames.map((match) => {
                                if (match.name === props.input) {
                                return <tr className="is-selected is-borderless" key={match.name}><td key={match.name}><a href={"https://pubg.op.gg/user/" + match.name} target="_blank" rel="noopener noreferrer">{match.name}</a></td><td></td></tr> 
                                } else {
                                return <tr className="is-borderless" key={match.name}><td key={match.name}><a href={"https://pubg.op.gg/user/" + match.name} target="_blank" rel="noopener noreferrer">{match.name}</a></td><td key={match.count}>{match.count}</td></tr> 
                                    }
                                })}
                              
                                </tbody>
                                </table>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        
    } 

    return(<>{content}</>)    
         
}

    
