import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { SetAuthorizationToken } from '../../services/BaseServices';

import * as UserServices from "../../services/UserServices";
import * as ExceptionHanlder from "../../exceptions/ExceptionHandler"

import { useNavigate  } from 'react-router-dom';

const RegistrationForm = ({ setIsAuthenticated }) => {
  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAccepted: false
  });

  const navigate = useNavigate();

  // Handler
  const handleSubmit = e => {
    e.preventDefault();

    UserServices.Login({email: formData.email, password: formData.password}).then(response =>{
      SetAuthorizationToken(response.data);
      setIsAuthenticated(true);
    }).catch(ex =>{
      ExceptionHanlder.ErroHandling(ex, navigate, toast);
    });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
     
      <Form.Group className="mb-3">
        {<Form.Label>Email</Form.Label>}
        <Form.Control
          placeholder={'Email'}
          value={formData.email}
          name="email"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} >
          {<Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={'Password'}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>
     
      </Row>

      <Form.Group className="mb-4">
        <Button
          className="w-100"
          type="submit"
          disabled={
            !formData.email ||
            !formData.password 
          }
        >
          Login
        </Button>
      </Form.Group>
    
    </Form>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool,
  setIsAuthenticated: PropTypes.func
};

export default RegistrationForm;
