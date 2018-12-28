import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes';
import {Router, browserHistory} from 'react-router';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthorQuiz from './authorQuiz/AuthorQuiz';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn']
    }
]

const state = {
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
}
ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
