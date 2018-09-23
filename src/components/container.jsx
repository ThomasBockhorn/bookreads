import React, { Component } from 'react';
import Readsdisplay from './readsdisplay';
import Navbar from './navbar';
import Wanttoread from './wanttoread';
import Currentlyreading from './currentlyreading';
import Footer from './footer';
import Book from './book';

//This container class will hold the three shelves
class container extends Component {
    constructor(props) {
        super(props);

        //The book object array
        this.state = {
            book: [
                {
                    author: "Thomas Bockhorn",
                    title: "Test Object",
                    location: "toread",
                    img: "https://unsplash.com/photos/Nw2lB5puyiw",
                    selected: true
                }
            ]
        };
    }

    //This will find the location
    location = (e) => {
        console.log(e.target.id);
        this.setState({
            location: e.target.id
        });
    }


    render() {
        return (
            <div id="containerinfo">
                <Navbar />
                <Readsdisplay  {...this.state} location={this.location} />
                <Wanttoread  {...this.state} location={this.location} />
                <Currentlyreading  {...this.state} location={this.location} />
                <Footer />
            </div>
        );
    }
}

export default container;