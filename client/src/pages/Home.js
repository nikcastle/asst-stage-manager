import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Pager } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import NavBar from "../components/navbar";
import Greeting from "../components/Greeting";
import Notes from "../components/Notes";
import AddProduction from "../components/addProduction";
import API from "../utils/API";
import styled from "styled-components";

const StyleWrapper = styled.div`
  text-align: center;
  margin: 0 50px;
  .element {
    height: 1000px;
    border-top: 2px solid #451814;
    padding-top: 55px;
    padding-left: 10px;
  }
  
  .element.no-padding {
    padding-top: 0;
  }
`

const Home = () => {

  const [currentPage, setCurrentPage] = useState(null)

  const handlePageChange = number => {
    setCurrentPage({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };
  
  const getPagesNumbers = () => {
    const pageNumbers = [];
  
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
          {i}
        </Pager.Item>,
      );
    }
  
    return [...pageNumbers];
  };
  const pagesNumbers = getPagesNumbers();  

  return (
    <StyleWrapper>
      <NavBar/>
      <React.Fragment>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <Greeting/>
        <Notes/>
      </ReactPageScroller>
      <Pager className="pagination-additional-class" bsSize="large">
        {pagesNumbers}
      </Pager>
    </React.Fragment>
        

      
        
  </StyleWrapper>
  )
}

export default Home;
