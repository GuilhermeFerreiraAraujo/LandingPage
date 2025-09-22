import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from 'components/pages/landing/Landing';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {

return (
    <Router basename={process.env.PUBLIC_URL}>
      <Landing />
    </Router>)
};

export default App;
