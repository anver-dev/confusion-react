import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";



  function RenderDish({dishSelected}) {
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

  function RenderComments({comments}) {
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

  const DishDetail = (props) => {
    let dishSelected = props.dish;
    if (dishSelected != null) {
      return (
        <div className="container">
          <div className="row">
            <RenderDish dishSelected={dishSelected}></RenderDish>
            <RenderComments comments={dishSelected.comments}></RenderComments>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

export default DishDetail;
