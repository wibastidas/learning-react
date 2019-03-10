import React, { Component } from 'react';
//import logo from './assets/img/logo.svg';
import './styles/App.css';
import Header from './components/header';
import Dish from './components/dish';
import NewDish  from './components/newDish';
import Button from '@material-ui/core/Button';

class App extends Component {
  dish = "Tacos"; 
  dishes = ["Tacos", "Ceviches", " Paella"]

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NewDish />
        {/* <Dish name={this.dish}  /> */}
        {/* Yo como { this.dish }
        <ul>
          {
            this.dishes.map(dish => <li>{dish}</li>)
          }
        </ul> */}
        <Button variant="contained" color="secondary" onClick={this.showDishes}>
            Elegir
        </Button>
      </div>
    );
  }
}

export default App;
