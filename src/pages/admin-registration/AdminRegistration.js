import React, { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../App.css";
import { CustomInputField } from "../../components/customInputField/CustomInputField";

const AdminRegistration = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const fields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Same",
      required: true,
    },
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "Same",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "041111",
      required: true,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "1 gerorge st, Sydney",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*******",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "041111",
      required: true,
    },
  ];
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1>New Admin Registration</h1>
            <hr />
            {fields.map((items, i) => (
              <CustomInputField key={i} {...items} onChange={handleOnChange} />
            ))}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default AdminRegistration;
