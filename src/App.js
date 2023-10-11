import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes'

import AdminControl from "./components/AdminControl";
import UserForm from "./components/UserForm";
// import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formFields, setFormFields] = useState([]);

  const handleFieldConfigChange = (fields) => {
    setFormFields(fields);
  };

  return (
    <Router>
      <div>
       
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminControl onFieldConfigChange={handleFieldConfigChange} />
            }
          />
          <Route path="/" element={<UserForm formFields={formFields} />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;
