import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";

// Container Component: responsible for the status of the application
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishdetailComponent
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}
        ></DishdetailComponent>
      </div>
    );
  }
}

export default Main;
