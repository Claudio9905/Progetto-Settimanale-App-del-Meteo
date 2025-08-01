import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";

const NavbarUser = (props) => {
  const location = useLocation();
  console.log("Location", location);

  return (
    <>
      {/* creo la mia barra di navigazione dove l'utente può navigare attraverso le pagine */}

      <Navbar expand="lg" className=" nav-meteo bg-dark" data-bs-theme="dark">
        <Container>
          <Link to="/" id="link-logo" className="me-2">
            <img
              src="../public/update-the-logo-with.png"
              alt="logo del sito"
              className=" img-fluid"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex ">
              <Link
                className={
                  location.pathname === `/`
                    ? `nav-item text-light me-2 text-decoration-none tag-page active`
                    : `nav-item text-light me-2 text-decoration-none tag-page`
                }
                to="/"
              >
                Home
              </Link>
              <Link
                className={
                  location.pathname === `/previsioni`
                    ? `nav-item text-light me-2 text-decoration-none tag-page active`
                    : `nav-item text-light me-2 text-decoration-none tag-page`
                }
                to="/previsioni"
              >
                Previsioni
              </Link>
              <Link
                className={
                  location.pathname === `/aboutus`
                    ? `nav-item text-light me-2 text-decoration-none tag-page active`
                    : `nav-item text-light me-2 text-decoration-none tag-page`
                }
                to="/aboutus"
              >
                About Us
              </Link>
            </Nav>
            <div className=" d-flex justify-content-start">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Insiresci la città"
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
