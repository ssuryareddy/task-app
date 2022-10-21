import React from "react";
import {
  Row,
  Col,
  Nav,
  Navbar,
  Container,
  Image,
  Form,
  InputGroup,
} from "react-bootstrap";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const mobile = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    arrow: false,

    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="main-wrapper">
        <Row className="g-0">
          <Col md={3} className="res-order">
            <div className="mobile-app-slider">
              <Slider {...mobile}>
                <div className="slider-img">
                  <Image
                    src={window.location.origin + "/images/mobile-img.png"}
                  />
                </div>
                <div className="slider-img bg-grey">
                  <Image
                    src={window.location.origin + "/images/mobile-img.png"}
                  />
                </div>
                <div className="slider-img">
                  <Image
                    src={window.location.origin + "/images/mobile-img.png"}
                  />
                </div>
                <div className="slider-img">
                  <Image
                    src={window.location.origin + "/images/mobile-img.png"}
                  />
                </div>
              </Slider>
            </div>
          </Col>
          <Col md={9}>
            <div className="app-left-sec">
              <div className="header-sec">
                <Navbar expand="lg">
                  <Container>
                    <Navbar.Brand href="#home">
                      <Image
                        src={window.location.origin + "/images/logo.png"}
                      />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto menu-link">
                        <Nav.Link href="#home">Overview</Nav.Link>
                        <Nav.Link href="#link">Features</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                      </Nav>
                      <Nav className="ms-auto auth-link">
                        <Nav.Link href="#link">Login</Nav.Link>
                        <Nav.Link href="#link">Sign Up</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
              <div className="banner-sec">
                <Row>
                  <Col md={6}>
                    <div className="banner-content">
                      <h1>Powerful News Explore Feed</h1>
                      <p>
                        Create an account and savings bookmarks upvote/downvote
                        and start a discussion around what's trending.
                      </p>
                      <div className="banner-form">
                        <Form>
                          <InputGroup>
                            <Form.Control
                              placeholder="Enter email"
                              aria-label="Recipient's username"
                              aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text id="basic-addon2">
                              Try Now
                            </InputGroup.Text>
                          </InputGroup>
                        </Form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="banner-bottom-sec">
                <h3 className="title">Recommendations</h3>
                <div className="recommend-box">
                  <div className="recommend-card">
                    <div className="recommed-details">
                      <Image
                        src={window.location.origin + "/images/card-img.jpg"}
                      />
                      <div className="card-deatils">
                        <h5>
                          <span>
                            <Image
                              src={
                                window.location.origin + "/images/profile.jpg"
                              }
                            />
                          </span>{" "}
                          Jessy sider
                        </h5>
                        <h4>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </h4>
                        <h6>Blogging</h6>
                      </div>
                    </div>
                    <div className="recommend-status">35 min</div>
                  </div>
                  <div className="recommend-card">
                    <div className="recommed-details">
                      <Image
                        src={window.location.origin + "/images/card-img-1.jpg"}
                      />
                      <div className="card-deatils">
                        <h5>
                          <span>
                            <Image
                              src={
                                window.location.origin + "/images/profile.jpg"
                              }
                            />
                          </span>{" "}
                          Jessy sider
                        </h5>
                        <h4>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                        </h4>
                        <h6>Blogging</h6>
                      </div>
                    </div>
                    <div className="recommend-status">35 min</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
