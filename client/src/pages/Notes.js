import React, { useState } from "react";
import NavBar from "../components/navbar";
import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Label, Input, FormText } from "reactstrap"
import AddProduction from "../components/addProduction";


const StyleWrapper = styled.div`
    margin: 0 50px;
    h1 {
        color:  #451814;
        justify-content: center;
        margin-top: 150px;
        text-align: center;
    }
    body {
        justify-content: center;
        text-align: center;
    }
    .calendar {
        border: 10px solid #dfc140;
        border-radius: 10px;
        margin: auto;
        margin-bottom: 50px;
    }
    h2 {
        color: #a95534
        margin-top: 30px;
    }
    .dropdown {
        margin: 20px;
    }
    .upload {
        align-items: center;
        justify-content: center;
        margin: auto;
        text-align: center;
    }
`

const handleFormSubmit = () => {

}

const Notes = () => {

const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState)

    return (
        <StyleWrapper>
            <NavBar/>
         <header className="App-header">
            
            <h1 className="header">
            Rehearsal Notes
            </h1>
        </header>
        <body>
            <p>Select your rehearsal date</p>
            <Calendar className="calendar"/>
            <Form>
            {/* <h2>Enter your rehearsal notes here</h2> */}
                <Dropdown 
                group isOpen={dropdownOpen} 
                size="md" 
                toggle={toggle}
                className="dropdown"
                >
                    <DropdownToggle caret>
                        Select a production from your list
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <AddProduction/>
                <FormGroup>
                    <Input type="text" placeholder="Note Title"/>
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Note Text"/>
                </FormGroup>
                    <Button
                    onClick={handleFormSubmit}
                    >Submit
                    </Button>
                <FormGroup className="upload">
                    {/* <Label for="exampleFile">File</Label> */}
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    Upload your script copy to save an electronic version
                    </FormText>
                </FormGroup>
            </Form>
        </body>
        </StyleWrapper>
    )
}

export default Notes;