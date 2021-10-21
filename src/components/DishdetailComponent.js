import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dishSelected) {
    return (
      <div className="col-12 col-md-5 m-2">
        <Card>
          <CardImg
            width="100%"
            src={dishSelected.image}
            alt={dishSelected.name}
          />
          <CardBody>
            <CardTitle>{dishSelected.name}</CardTitle>
            <CardText>{dishSelected.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };

    console.log({ comments });
    const listComments = comments.map((comment) => {
      let date = new Date(comment.date);
      return (
        <ul className="list-unstyled">
          <li>
            <p>
              -- {comment.author}, {date.toLocaleDateString("en-US", options)}
            </p>
            <p>{comment.comment}</p>
          </li>
        </ul>
      );
    });

    return (
      <div className="col-12 col-md-5 m-2">
        <h3>Comments</h3>
        <p>Imagine all the eatables, living in ConFusion!</p>
        {listComments}
      </div>
    );
  }

  render() {
    let dishSelected = this.props.dish;
    if (dishSelected != null) {
      return (
        <div className="container">
          <div className="row">
            {this.renderDish(dishSelected)}
            {this.renderComments(dishSelected.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishdetailComponent;
