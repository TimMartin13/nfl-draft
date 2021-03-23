import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import { Container, Row, Col, } from 'react-bootstrap'
// import { useAuth } from "../../utils/contexts/AuthContext";
// import HeaderDropdown from "../Dropdown";
// import Login from "../Login";
// import Signup from "../Signup";
// import SignupTextBtn from "../SignupTextBtn";
import "./style.css";
// import API from "../../utils/API";
// import logo from '../../styles/images/featuredEdge.png'

const Header = () => {
//   const [loggedInState, setLoggedInState] = useState(false);
//   const { currentUser, logout, userInfo } = useAuth();
//   const [isAdmin, setIsAdmin] = useState(false);

//   //check to see if user is logged in via context provider
//   useEffect(() => {
//     if (currentUser) {
//       setLoggedInState(true);
//       console.log("we fo sho logged in");
//       getUserName();
//     }
//   }, []);

//   const getUserName = async () => {
//     // console.log('CURRENT USER', currentUser.uid);
//     let dbResults;
//     try {
//       dbResults = await API.getUser(currentUser.uid);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       // console.log("isAdmin: ", dbResults.data.admin);
//       setIsAdmin(dbResults.data.admin);
//     }
//   };

  return (
    <>
      <Container fluid id="pageHeader">
        <Row>
          <Col>
            <a href="/" className="logo">
              {/* <img className='logoImg' src={logo} alt="logo" /> */}
              <h3 className="logo noPaddingNoMargin">Draft Wonk</h3>
              <h5 id='tagLine'>Your Team's Next Best Chance</h5>
            </a>
          </Col>
        </Row >
      </Container>
    </>
  );
};

export default Header;
