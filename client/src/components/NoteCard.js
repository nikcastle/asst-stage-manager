import React from "react";
import { Card, CardTitle, CardFooter, CardBody, Col } from "reactstrap";
import styled from "styled-components";

//Styling
const StyleWrapper = styled.article `
    .card {
        border: 1px solid #bf5a41;
    }
    .card:hover {
        border: 4px solid #11343e;
        box-shadow: 0px 0px 10px #11343e;
    }
    .card-title {
     cursor: pointer;
     font-family: "Roboto";
     font-size: 20px;
     font-weight: bold
 }
`

const NoteCard = ({title, text, production, noteDate, _id }) => {
    return(
        <StyleWrapper>
            <Col key={_id}>
            <Card>
                <CardTitle>{title}</CardTitle>
                <CardBody>{text}</CardBody>
                <CardFooter>{production}</CardFooter>
            </Card>
            </Col>
        </StyleWrapper>
    )
};

export default NoteCard;