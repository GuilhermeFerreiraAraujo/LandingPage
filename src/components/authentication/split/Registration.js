import React from 'react';
import RegistrationForm from 'components/authentication/RegistrationForm';
import bgImg from 'assets/img/generic/15.jpg';
import AuthSplitLayout from 'layouts/AuthSplitLayout';

const Registration = ({ setIsAuthenticated }) => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      <RegistrationForm setIsAuthenticated={setIsAuthenticated} />
    </AuthSplitLayout>
  );
};

export default Registration;
