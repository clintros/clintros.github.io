import React, { Component } from 'react';
import Display from './Display';
import '../App.sass';
import '../index.css';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matches: [],
            input: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({input: event.target.value});
    }


    render() {
    
        let nameArray = [];

        // matchData presents us with objects inside of arrays which represent a match, inside of a main array. This flattens it to objects in one array.
        [].concat.apply([], this.props.matchData)
        .filter(el => el.attributes.stats && el.attributes.stats.name)
        .map(x => {  // Push only the stats we care about (name) to a new array so we can count and sort it.
            nameArray.push(x.attributes.stats.name); 
            return nameArray;
        })

        // Iterate through all of the names in filteredArray, listing each name once and a count of how many times it appeared. Outputs to an object.
        const nameCount = nameArray.reduce((obj, curr) => {
            obj[curr] = (obj[curr] || 0) + 1;
            return obj;
        }, {})

        // Iterate through name/count object and create new object with name: value, count: value structure, then sort them numerically by count.
        const nameTo = Object.keys(nameCount)
            .map(key => ({name: key, count: nameCount[key]}))
            .sort((a, b) => {
            return b.count - a.count;
        });
        
        // Limit how many results we display.
        if (nameTo.length > 5000) {
            nameTo.length = 2000;
        }

        return (
                <Display data={nameTo} fetchPlayerComplete={this.props.fetchPlayerComplete} fetchComplete={this.props.fetchComplete} input={this.props.input}/>
            )
        }
    }

export default Results;