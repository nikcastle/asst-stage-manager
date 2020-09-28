import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Label, Input, FormText, Row } from "reactstrap"
import Navbar from "./navbar";
import AddProduction from "../components/addProduction";
import API from "../utils/API";
import NoteCard from "../components/NoteCard";


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
    button {
        margin-bottom: 20px;
    }
    .upload {
        align-items: center;
        display: inline-flex;
        justify-content: space-between;
        margin: 0 auto;
        margin-bottom: 100px;
        text-align: center;
        width: 500px;
    }
    .noteList  {
        margin-top: 30px;
        text-align: center;
    }
`


const Notes = () => {
    
    const { isAuthenticated } = useAuth0;
    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const toggle = () => setDropdownOpen(prevState => !prevState)
    
    const [note, setNote] = useState({});
    const [notes, setNotes] = useState([]);
    const [date, setDate] = useState("");

    const { title, text, production } = note

    const handleSetDate = () => {
        setDate({})
    }

    const createNote = () => {
        API.addNote()
    }

    const indexedNote = (record) => {
        const request = window.indexedDB.open("noteList", 1);

      request.onupgradeneeded = ({ target }) => {
        const db = target.result;

        const objectStore = db.createObjectStore("noteList", { autoIncrement: true });
        
        objectStore.createIndex("timestamp", "timestamp");
        objectStore.createIndex("category", "category"); 

      };

      request.onsuccess = event => {
        console.log(request.result);
        const db = request.result;
        const transaction = db.transaction(["noteList"], "readwrite"); 
        const noteListStore = transaction.objectStore("noteList"); 
        // const statusIndex = noteListStore.index("statusIndex"); 
        noteListStore.add(record)
      };

    }
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setNote({...note, [name]: value });
      }

    const handleFormSubmit = (event, data) => {
        event.preventDefault();
        console.log("clicked")
        if(isAuthenticated) {
            createNote(data);
        } else {
            indexedNote(data);
        }
    }


   return (
       <StyleWrapper>
           <Navbar/>
           <header className="App-header">
              
              <h1 className="header">
              Rehearsal Notes
              </h1>
          </header>
          <div>
              <p>Select your rehearsal date</p>
              <Calendar 
              className="calendar"
              onClick={handleSetDate}
              />
              <Form>
                  {isAuthenticated ? (
                      
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
                  ) : <div></div>}
              {/* <h2>Enter your rehearsal notes here</h2> */}
                  <FormGroup>
                      <Input type="text" 
                      name="title"
                      placeholder="Note Title" 
                      onChange={handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                      <Input type="text" 
                      name="production"
                      placeholder="Production Name" 
                      onChange={handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                      <Input type="textarea" 
                      name="text"
                      id="exampleText" 
                      placeholder="Note Text" 
                      onChange={handleInputChange}/>
                  </FormGroup>
                      <Button
                      onClick={handleFormSubmit}
                      >Submit
                      </Button>
                <Row>
                  <FormGroup className="upload">
                      {/* <Label for="exampleFile">File</Label> */}
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="muted">
                      Upload your script copy to save an electronic version
                      </FormText>
                  </FormGroup>
                </Row>
              </Form>
          </div>
          <div>
              <h2 className="noteList">Saved Notes</h2>
              {notes ? (notes.map(note => (
                  <Col md={3} key={note._id}>
                    <NoteCard
                    id={note._id}
                    title={note.title}
                    text={note.text}
                    production={note.production}
                    />
                  </Col>
              ))): <h3>Add a note to see it here</h3>}
          </div>
       </StyleWrapper>
   )
    
}

export default Notes;