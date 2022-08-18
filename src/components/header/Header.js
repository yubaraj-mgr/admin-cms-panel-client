import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogout } from "../../pages/login/userAction";
import { setShowSideMenu } from "../../pages/system-state/systemSlice";
import { useNavigate } from "react-router";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);
  const handleShow = () => dispatch(setShowSideMenu(true));
  const handleOnLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" expand="md">
      <Container>
        <div>
          {user?._id && (
            <i className="fa-solid fa-bars mx-3" onClick={handleShow}></i>
          )}
        </div>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <Link className="nav-link" to="/" onClick={handleOnLogout}>
                Logout
              </Link>
            ) : (
              <>
                <Link className="nav-link" to="/">
                  Login
                </Link>
                <Link className="nav-link" to="/">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
