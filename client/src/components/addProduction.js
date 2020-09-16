import React, { useState } from "react";
import { Button, Col, Form, FormGroup, FormText, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
import styled from "styled-components";

//Styling
const StyleModal = styled(Modal)`
    border: 5px solid #bf5a41;
    border-radius: 10px;
    width: 100vw;

    .modal-header {
        font-family: "Raleway"
    }
    .disclaimer {
        font-size: 15px;
    }
`

const AddProduction = () => {
   
    const handleFormSubmit = () => {

    }
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return(
   
        <StyleModal isOpen={modal} toggle={toggle}>
            <Button color="danger" onClick={toggle}>Add a Production</Button>
            <ModalHeader toggle={toggle} className="modal-header">New Production</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="title" sm={2}>Show Title</Label>
                        <Col sm={10}>
                        <Input type="text" name="title" id="title" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="playwright" sm={2}>Playwright</Label>
                        <Col sm={10}>
                        <Input type="text" name="playwright" id="playwright" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="director" sm={2}>Director</Label>
                        <Col sm={10}>
                        <Input type="text" name="director" id="director" />
                        </Col>
                    </FormGroup>
                    <FormGroup className="upload">
                    <Label for="File">File</Label>
                    <Input type="file" name="file" id="File" />
                    <FormText color="muted">
                    Upload a copy of your script*
                    </FormText>
                    <Button
                    onClick={handleFormSubmit}
                    >Submit
                    </Button>
                </FormGroup>
                </Form>   
            </ModalBody>
            <ModalFooter>
            <p className="disclaimer">*Please note your scripts copyright laws and do not share the text with any unauthorized parties.</p>
            </ModalFooter>
        </StyleModal>
    

    )
};

export default AddProduction;