import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import backgroundImage from './Bgimage.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} sm={6} md={6} lg={7} className="left-content">
            <div className="left-content-inner">
              <h1 className="display-3 text-light">Welcome to Enigma Escapes</h1>
              <p className="lead text-light">Decode Your Unforgettable Journey</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={5} className="login-form">
            <div className="login-inner">
              <h2 className="text-center mb-4 login-title">Welcome Back</h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input-field"
                  />
                  <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input-field"
                  />
                  <Form.Control.Feedback type="invalid">Please provide a password.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="login-btn mt-2 w-100">
                  Log in
                </Button>

                <div className="text-center mt-3">
                  <span className="forgot-password">Forgot Password?</span>
                </div>
                <div className="text-center mt-3">
                  <span className="create-account">Don't have an account? <Link to="/register">Create One</Link></span>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
