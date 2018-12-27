import React from 'react';
import 'typeface-roboto';
import SignIn from './signIn/signIn';
import Dashboard from './dashboard/Dashboard';
import Checkout from './checkOut/Checkout';
import AuthorQuiz from './authorQuiz/AuthorQuiz';

const App = (props) => (
  <AuthorQuiz  turnData = {props.turnData}/>
);

export default App;
