import React, { useState, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Button, Card, Container, Col, Row, } from "reactstrap"
import NavBar from "../components/navbar";
import AddProduction from "../components/addProduction";
// import Footer from "../components/Footer";
// import SearchBar from "../components/SearchBar";
import styled from "styled-components";
// import API from "../utils/API";
// import Grocerylist from "../components/GroceryList";
// import Converter from "../utils/Conversion";
// import CarIcon from "../components/CarIcon";

//Styling
const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;
    margin: 0 auto;
  }
  p {
    width: 60%;
    margin: 15px auto;
    font-size: 20px;
    font-family: "Roboto";
  }
  h2 {
   margin: 10px auto;
   font-family: "Raleway";
   font-size: 52px;
  }
  .button {
    background-color: #cb5744;
    border: none;
  
  }
  .button:hover {
  background-color: #ec9a59;
  }
  .rounded-circle {
    max-width: 200px;
  }
  h4{
    color: rgb(18, 61, 61);
  }
  #equivalency{
    color: rgb(18, 61, 61);
  }
  h5{
    justify-content: center;
  }
  }
`

const User = () => {
  
  //Variables and States
  const { user, isAuthenticated } = useAuth0();
//   const [searchResults, setSearchResults] = useState([])
//   const [searchTerm, setSearchTerm] = useState("");
//   const [groceryList, setGroceryList] = useState([]);
//   const [totalGHG, setTotalGHG] = useState(0)
  const currentUser = user.sub;

  let productions;

  // => if user then populate else => create user
//   useEffect(() => {

//     API.getUser(currentUser)
//       .then(dbUser => {
//         if (!dbUser.data) {
//           console.log("user not found")
//           API.createUser({
//             username: user.email,
//             id: user.sub,
//             groceries: []
//           })
//         } else {
//           console.log("yay user found", dbUser)
//           API.populateList(dbUser.data.id)
//             .then(res => {
//               console.log(res)
//               setGroceryList(res.data.groceryList);
//               if (res.data.groceryList.length) {
//                 calculateGHG(res.data.groceryList);
//               }
//             })
//         }
//       })
//       .catch(err => console.log(err));
//   }, [])

//   const handleInputChange = event => {
//     setSearchTerm(event.target.value);
//   }

//   const handleFormSubmit = event => {
//     event.preventDefault();
//     // take input search term and set it to correct format to search, first letter uppercase and rest lowercase
//     let word = searchTerm;
//     word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     API.getFood(word)
//       .then((data) => setSearchResults(data.data))
//       .catch(err => console.log(err))

//     setSearchTerm("");
//   }

//   const addToGroceryList = (event, id) => {
//     event.preventDefault();
//     // API call to Foods collection to grab food for User to add to list in User collection
//     API.addItem(id, currentUser)
//       .then(res => {
//         API.populateList(currentUser)
//           .then(res => {
//             console.log(res)
//             setGroceryList(res.data.groceryList);
//             calculateGHG(res.data.groceryList);
//           })
//       })
//       .catch(err => console.log(err))
//   }

//   const calculateGHG = (list) => {
//     let totalG = list.reduce((a, b) => {
//       return { ghgEmission: a.ghgEmission + b.ghgEmission }
//     })
//     setTotalGHG(totalG.ghgEmission);
//   }

//   const removeFromGroceryList = (event, id) => {
//     event.preventDefault();
//     // API call to Foods collection to find item by ID and remove from User's collection
//     API.removeItem(id, currentUser)
//       .then(res => {
//         API.populateList(currentUser)
//           .then(res => {
//             setGroceryList(res.data.groceryList)
//             calculateGHG(res.data.groceryList);
//           })
//           .catch(err => console.log(err))
//       })
//   }

  return (
    isAuthenticated && (
      <>
        <NavBar />
        <Container fluid={true} >
          <Div color="grey">
            <div>
              <img
                src={user.picture}
                alt={user.name}
                className="rounded-circle" />
              <h1>Hello, {user.given_name}!</h1>
            </div>
          </Div>

          <Div>
            {/* If there are items in the grocery list, populate list. Otherwise subtitle telling User to search for an item */}
            <div>
              <AddProduction/> 
            </div>
          </Div>

          <Div color="grey">
            <div>
              <Row>
                  <Col>
                  <p>Your Rehearsal Notes</p>
                  </Col>
                  <Col>
                     <Button to ="/Notes">Add a new note</Button>
                  </Col>
              </Row>
              {/* If there are search results, map through them to create a card for each item in the array. Otherwise note no items were found*/}
              <Row>
                
              </Row>
            </div>
          </Div>

          {/* <Footer /> */}
        </Container>
      </>
    )
  )
}

export default withAuthenticationRequired(User);