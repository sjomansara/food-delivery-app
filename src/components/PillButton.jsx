import { Button, Form } from "react-bootstrap";
import React from "react";

const PillButton = (props) => {
    return (
        <Form className="d-flex">
            <Button className="pillButton rounded-pill px-4 py-2">{props.text}</Button>
        </Form>
    );
  }
  
  export default PillButton;
  