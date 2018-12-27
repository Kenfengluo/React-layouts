import React, { Component } from 'react';

const Hero = (props) => {
    return (
        <div className="row">
            <h1>Author Quiz</h1>
            <p> Select the book written by the author shown</p>
        </div>
    );
}

const Turn = (props) => {
    return (
        <div className="row" style={{backgroundColor: "white"}}>
            <div className="col-4 offset-1">
                <img src={props.author.imageUrl} className="authorimage" alt="Author"/>
            </div>
            <div className="col-6">
                {props.books.map((title) => <Book title={title} key={title}></Book>)}
            </div>
        </div>
    );
}

const Book = (props) => {
    return (
        <div className="row">
        <h4>{props.title}</h4>
        </div>
    );
}

const Continue = (props) => {
    return (
        <div className="row">
        </div>
    );
}

const Footer = (props) => {
    return (
        <div className="row">
        </div>
    );
}
const AuthorQuiz = (props) => {
    return (
        <div className="">
            <Hero/>
            <Turn {...props.turnData}/>
            <Continue/>
            <Footer/>
        </div>
    )
}
export default AuthorQuiz;