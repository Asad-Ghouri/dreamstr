import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";
// Styled components for styling the form
import Img1 from "../asserts/4.png"
import Img2 from "../asserts/5.png"
import Img3 from "../asserts/6.png"

import { Link , NavLink } from 'react-router-dom';
import { toast } from "react-toastify";

import YouTubeVideo from './YouTubeVideo';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: transparent;
  border: 2px solid black;
  width: 97%;
  border: 2px solid;
  border-image: linear-gradient(to right, #ffffff, #000000);
  border-image-slice: 1;
  background-color: transparent;
`;

const UserForm = () => {
  const [formFields, setFormFields] = useState([
    {
      label: "Name",
      type: "text",
      value: "", // You can initialize with a default value
      placeholder: "name?",
    },
    {
      label: "Email",
      type: "email",
      value: "", // You can initialize with a default value
      placeholder: "email?",
    },
    {
      label: "Wallet Address",
      type: "text",
      value: "", // You can initialize with a default value
      placeholder: "Wallet Address?",
    },
  ]);
  const [formData, setFormData] = useState({});

  const [backgroundImage, setBackgroundImage] = useState("");

  console.log("formData data is ", formData);
  const [selectedFont, setSelectedFont] = useState(
    localStorage.getItem("selectedFont") || "Lobster"
  );

  const handleInputChange = (e, fieldName) => {
    const updatedData = { ...formData, [fieldName]: e.target.value };
    setFormData(updatedData);
  };

  useEffect(() => {
    // Fetch the current background image URL from the server
    axios
      .get("https://excel-sheet-backend.vercel.app/api/background")
      .then((response) => {
        setBackgroundImage(response.data.background);
      });
  }, []);

  function handleFormSubmit(fieldName) {
    // Create a FormData object
    var formDataObject = new FormData();

    // Loop through the properties of the formData object
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataObject.append(key, formData[key]);
      }
    }
    // Send a POST request using fetch
    toast.success("request sent successfully!", {
      position: "top-right",
      autoClose: 3000, // Close the toast after 3 seconds
    });
    fetch(
      "https://script.google.com/macros/s/AKfycbyf5l6-nq6O_zQyWCjdvtb8QS5AYalZQ48MovzrRx4XPU6Rs6-8rHvIFgYEW_n43ywV/exec",
      {
        method: "POST",
        body: formDataObject,
      }
    )
      .then((response) => {
        if (response.status === 200) {
          console.log("Form submitted successfully");
          for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
              formDataObject.append(key, " ");
            }
          }
          // You can add code here to handle the response if needed
          setFormData(formDataObject);
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Form submission error", error);
      });
  }

  const [name, setname] = useState();
  const [contractAddress, setcontractAddress] = useState();
  console.log("name is ",name , "contract address is ",contractAddress)
  return (
    <div
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        minHeight: "100vh",
        backgroundPosition: "center",
        // fontFamily: selectedFont,
      }}
    >
         <Header/>
      <div>
        <Container className="userpage">
          <Label>Name:</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => {setname(e.target.value)}}
            placeholder="Name?"
          />
          <br />
          <br />
          <Label>Wallet Address:</Label>
          <Input
            type="text"
            value={contractAddress}
            onChange={(e) => {setcontractAddress(e.target.value)}}
            placeholder="Wallet Address?"
          />
          <br />
          <br />
          <SubmitButton
           
            // onClick={()=>{()}}
          >
            Claim Now
          </SubmitButton>
        </Container>
      </div>

      {/* <Container>
        {formFields.map((field, index) => (
          <FormGroup key={index}>
            <Label>{field.label}:</Label>
            {field.type === "textarea" ? (
              <textarea
                type="text"
                className="textArea"
                value={formData[field.placeholder] || ""}
                onChange={(e) => handleInputChange(e, field.placeholder)}
                required={field.required}
                placeholder={field.placeholder}
                name={field.placeholder}
              />
            ) : (
              <Input
                type={field.type}
                value={formData[field.placeholder] || ""}
                onChange={(e) => handleInputChange(e, field.placeholder)}
                required={field.required}
                placeholder={field.placeholder}
                name={field.placeholder}
              />
            )}
          </FormGroup>
        ))}
        <SubmitButton
          style={{
            fontFamily: selectedFont,
          }}
          onClick={() => {
            handleFormSubmit();
          }}
        >
          Submit
        </SubmitButton>
      </Container> */}
      {/* <div className="instructions-container">
      <div className="instructions-title">Claim Your Dster Tokens</div>
      <div className="instructions-text">
        To claim your Dster tokens, follow these simple steps:
      </div>
      <div className="instructions-text">
        1. Enter your name as it appears on the whitelist.
      </div>
      <div className="instructions-text">
        2. Enter your wallet address. Ensure it is accurate to ensure a seamless token transfer.
      </div>
      <div className="instructions-text">
        3. Confirm your submission, and our system will promptly process your request.
      </div>
      <div className="instructions-text">
        4. Once your claim is verified and processed, you'll receive your Dster token directly in your wallet.
      </div>
      <div className="instructions-text">
      5. if you have not provided your wallet address, <NavLink to="/admin" className="link-a">Click here</NavLink> to apply for your Dster
         
      </div>
      <div className="support-text">
        If you have any questions or require assistance during the claiming process, our support team is here to help. Enjoy your Dster token and all the exciting opportunities it brings!
      </div>
    </div> */}
    <center>
    <h1 className="instructions-title">Claim Your Dster Tokens</h1>
    </center>
    <center>
      <div className="instructions-text">
        To claim your Dster tokens, follow these simple steps:
      </div>
    </center>
          <div className="d-flex a-c">
            <div className="texts">
                  <h1>
                  Enter your name 
                  </h1>
                  <p>
                  As it appears on the whitelist
                  </p>
            </div>
            <div className="img">
            <img src={Img1} alt="" />
            </div>
          </div>

          <div className="d-flex a-c">
          <div className="img">
            <img src={Img2} alt="" />
            </div>
            <div className="texts">
                  <h1>
                  Enter your wallet address
                  </h1>
                  <p>
                  Ensure it is accurate to ensure a seamless token transfer.
                  </p>
            </div>
          </div>

          <div className="d-flex a-c">
            <div className="texts">
                  <h1>
                  Confirm your submission 
                  </h1>
                  <p>
                  Our system will promptly process your request
                  </p>
            </div>
            <div className="img">
            <img src={Img3} alt="" />
            </div>
          </div>

<br />
<br />
<br />
          <center>
      <div className="instructions-text">
      If you have not provided your wallet address, <NavLink to="/admin" className="link-a">Click here</NavLink> to apply for your Dster
      </div>
    </center>
    <YouTubeVideo videoId="Pym8jd6hJF0" />
    </div>
  );
};

export default UserForm;
