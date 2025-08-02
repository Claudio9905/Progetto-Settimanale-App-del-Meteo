import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";

const NavbarUser = (props) => {
  const location = useLocation();
  console.log("Location", location);

  return (
    <>
      {/* creo la mia barra di navigazione dove l'utente può navigare attraverso le pagine */}

      <Navbar expand="lg" className=" nav-meteo " data-bs-theme="dark">
        <Container>
          <Link to="/" id="link-logo" className="me-2">
            <img
              src="../public/update-the-logo-with.png"
              alt="logo del sito"
              className=" img-fluid"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="navBar-control">
            <i className="bi bi-list fs-1" id="list-icon"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <div className="d-flex">
                <Link
                  className={
                    location.pathname === `/`
                      ? `nav-item text-light me-2 text-decoration-none tag-page page target-page text-center m-2 `
                      : `nav-item text-light me-2 text-decoration-none tag-page page text-center m-2 `
                  }
                  to="/"
                >
                  Home
                </Link>

                <Link
                  className={
                    location.pathname === `/aboutus`
                      ? `nav-item text-light me-2 text-decoration-none tag-page page target-page m-2 text-center `
                      : `nav-item text-light me-2 text-decoration-none tag-page page text-center m-2`
                  }
                  to="/aboutus"
                >
                  About Us
                </Link>
              </div>
            </Nav>
            <div className=" d-flex justify-content-start">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Inserisci la città"
                  value={props.location}
                  onChange={(e) => props.search(e.target.value)}
                />
              </Form.Group>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarUser;
