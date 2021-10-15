import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
} from "reactstrap";

class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const dishSelected = this.props.dish;

    let options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    if (dishSelected != null) {
      const comments = dishSelected.comments.map((comment) => {
        let date = new Date(comment.date);
        return (
          <div>
            <ListGroupItem>
              -- {comment.author}, {date.toLocaleDateString("en-US", options)}
              <ListGroupItemText className="p-2">{comment.comment}</ListGroupItemText>
            </ListGroupItem>
          </div>
        );
      });
      return (
        <div className="row">
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
          <div className="col-12 col-md-5 m-2">
              <h3>Comments</h3>
              <p>Imagine all the eatables, living in ConFusion!</p>
            <ListGroup flush>{comments}</ListGroup>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishdetailComponent;
