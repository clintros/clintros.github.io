import React, { Component } from 'react';
import Results from './Results';
import '../App.sass';
import '../index.css';
import { auth } from './Api.js';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            player: [],
            match: [],
            input: '',
            fetchPlayerComplete: false,
            fetchComplete: 'false',
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // fetchData method - get player data from PUBG API, including list of all matches in last 14 days.
    fetchData() {

        if (!this.state.input) { return; } 
        
       
            let playerUrl = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${this.state.input}`;
            fetch(playerUrl, auth)
                .then(response => response.json())
                .then(result => {this.setState({player: result.data, fetchPlayerComplete: 'true', fetchComplete: 'loading'})}) 
                .then(() => {
        
            this.setState({match: []}); // Reset state so that it doesn't just keep incrementing counts if you search for the same names again.

            let matchArray = [];
            
            if (this.state.fetchPlayerComplete) { // Make sure we've got the player data from the API before continuing.
                this.state.player.map(player => { // Iterate through the player data and push the individual match IDs to matchArray
                    return player.relationships.matches.data.map(match => {
                        return matchArray.push(match.id);
                    });
                })
   
        
                matchArray.forEach(el => { // Iterate through all the matches in matchArray and fetch match data for each match from PUBG API.
                let matchUrl = `https://api.pubg.com/shards/steam/matches/${el}`;
       
                fetch(matchUrl, auth)
                .then(matchResponse => matchResponse.json())
                .then(matchResult => { 
                    let newState = this.state.match.slice();
                    newState.push(matchResult.included);
                    this.setState({match: newState})}) 
                .then(x => {
                    setTimeout(() => {this.setState({fetchComplete: 'true'});}, 2000); // Workaround to give the loading animation some delay before displaying results, otherwise user will see count numbers incrementing. Needs a proper solution.
                    })
                })
            }})
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.fetchData();
        this.setState({search: this.state.input})
    }

    render() {
        
        // Setup a list of example usernames to display in input box, and an number generator to randomly cycle through them.
        const exampleArray = ["chX-iw", "shroud", "DrDisRespect", "BreaK", "chocoTaco"]
        const rng = Math.floor(Math.random() * (exampleArray.length));
      
        return (
        <>
        <div className="search-container">
            <div className="columns">
                <div className="column is-full">
                <form onSubmit={this.handleSubmit}>
                    <div className="field is-expanded has-addons">
                        <p className="control is-fullwidth">
                            <input className='input is-expanded is-info animated fadeInUp delay-3' type='text' value={this.state.input} onChange={this.handleChange} placeholder={"Example: " + exampleArray[rng]}></input>
                        </p>
                        <p className="control">
                            <button className="button is-info animated fadeInUp delay-3" type='submit'>Search</button>
                        </p>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <Results playerData={this.state.player} matchData={this.state.match} fetchPlayerComplete={this.state.fetchPlayerComplete} fetchComplete={this.state.fetchComplete} input={this.state.search}/>
        </>
        )
    }
}

export default Search;


