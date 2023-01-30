import React from "react";
import { useState } from "react";
import "./Form.css";
import ViewTable from "./ViewTable";

// Task to do: This JSON description with the following fields:

// Equipment No (text, 1-255 characters, unique, required)
// First Name (text, 1-255 characters, required)
// Last Name (text, 1-255 characters, required)
// Mobile Phone (text, required)
// Email (email, required)
// Category (dropdown, required, non-multi, Residential or Commercial)
// Sales tax code (text, 1-255 characters, optional)
// Invoice method (dropdown, required, non-multi, email or paper)
// Invoice Type (text, 1-255 characters, optional)
// The form should validate that:

// Equipment No has 1-255 characters and is unique
// First Name, Last Name, Mobile Phone, and Email are all required
// Category must be Residential or Commercial
// Invoice method must be either email or paper
// Invoice Type has 1-255 characters
function Page() {
  //Defining input array
  const [inputarr, setInputArr] = useState([]);
  const [inputdata, SetInputData] = useState({
    equipmentNo: "",
    firstName: "",
    lastName: "",
    mobilePhone: "",
    email: "",
    category: "",
    salesTaxCode: "",
    invoiceMethod: "",
    invoiceType: "",
  });

  // Array to store errors
  const [error, setError] = useState({});
  // All the required validation of the fields
  const validate = () => {
    const error = {};

    if (
      equipmentNo == "" ||
      equipmentNo.length < 1 ||
      equipmentNo.length > 255
    ) {
      error.equipmentNo = "Equipment No must be between 1 and 255 characters";
    }
    if (!firstName || firstName.length < 1 || firstName.length > 255) {
      error.firstName = "First Name must be between 1 and 255 characters";
    }
    if (!lastName || lastName.length < 1 || lastName.length > 255) {
      error.lastName = "Last Name must be between 1 and 255 characters";
    }
    if (!mobilePhone) {
      error.mobilePhone = "Mobile Phone is required";
    }
    if (!email) {
      error.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      error.email = "Invalid email address";
    }
    if (!category) {
      error.category = "Category is required";
    } else if (category !== "Residential" && category !== "Commercial") {
      error.category = "Category must be either Residential or Commercial";
    }
    if (
      salesTaxCode.length > 0 &&
      (salesTaxCode.length < 1 || salesTaxCode.length > 255)
    ) {
      error.salesTaxCode =
        "Sales tax code must be between 1 and 255 characters";
    }
    if (!invoiceMethod) {
      error.invoiceMethod = "Invoice method is required";
    } else if (invoiceMethod !== "email" && invoiceMethod !== "paper") {
      error.invoiceMethod = "Invoice method must be either email or paper";
    }
    if (
      invoiceType.length > 0 &&
      (invoiceType.length < 1 || invoiceType.length > 255)
    ) {
      error.invoiceType = "Invoice Type must be between 1 and 255 characters";
    }

    return error;
  };

  // The change in the input field and to set the input array value
  function changehandle(e) {
    SetInputData({
      ...inputdata,
      [e.target.name]: e.target.value,
    });
  }

  let {
    equipmentNo,
    firstName,
    lastName,
    mobilePhone,
    email,
    category,
    salesTaxCode,
    invoiceMethod,
    invoiceType,
  } = inputdata;

  //This function after Submit button is clicked
  function submitHandle() {
    // Call to the validate method before adding a
    const error = validate();
    setError(error);

    if (!Object.keys(error).length) {
      // Submit the form if there are no errors
      setInputArr([
        ...inputarr,
        {
          equipmentNo,
          firstName,
          lastName,
          mobilePhone,
          email,
          category,
          salesTaxCode,
          invoiceMethod,
          invoiceType,
        },
      ]);
      SetInputData({
        equipmentNo: "",
        firstName: "",
        lastName: "",
        mobilePhone: "",
        email: "",
        category: "",
        salesTaxCode: "",
        invoiceMethod: "",
        invoiceType: "",
      });
    }
  }

  return (
    <>
      <h1>Equipment Information</h1>
      {/* equipmentNo */}
      <label htmlFor="equipmentNo">
        Equipment No<span style={{ color: "red" }}>*</span>
      </label>
      <input
        autoComplete="off"
        type="text"
        name="equipmentNo"
        value={inputdata.equipmentNo}
        onChange={changehandle}
        placeholder="Enter Equipment Number"
      />{" "}
      <br />
      {error.equipmentNo}
      <br />
      <br />
      {/* firstName */}
      <label htmlFor="firstName">
        First Name <span style={{ color: "red" }}>*</span>
      </label>
      <input
        autoComplete="off"
        type="text"
        name="firstName"
        value={inputdata.firstName}
        onChange={changehandle}
        placeholder="Enter First Name"
      />{" "}
      <br />
      {error.firstName}
      <br />
      <br />
      {/* lastName */}
      <label htmlFor="lastName">
        Last Name <span style={{ color: "red" }}>*</span>
      </label>
      <input
        autoComplete="off"
        type="text"
        name="lastName"
        value={inputdata.lastName}
        onChange={changehandle}
        placeholder="Enter Last Name"
      />{" "}
      <br />
      {error.lastName}
      <br />
      <br />
      {/* mobilePhone */}
      <label htmlFor="mobilePhone">
        Mobile Phone <span style={{ color: "red" }}>*</span>
      </label>
      <input
        autoComplete="off"
        type="text"
        name="mobilePhone"
        value={inputdata.mobilePhone}
        onChange={changehandle}
        placeholder="Enter Mobile Phone"
      />{" "}
      <br />
      {error.mobilePhone}
      <br />
      <br />
      {/* email */}
      <label htmlFor="email">
        Email <span style={{ color: "red" }}>*</span>
      </label>
      <input
        autoComplete="off"
        type="text"
        name="email"
        value={inputdata.email}
        onChange={changehandle}
        placeholder="Enter Email"
      />{" "}
      <br />
      {error.email}
      <br />
      <br />
      {/* category */}
      <label htmlFor="category">
        Choose a category<span style={{ color: "red" }}>* </span>{" "}
      </label>{" "}
      <select
        name="category"
        id="category"
        value={inputdata.category}
        onChange={changehandle}
      >
        <option value="">Select</option>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
      </select>
      <br />
      {error.category}
      <br />
      <br />
      {/* Sales Tax Code */}
      <label htmlFor="salesTaxCode">Sales Tax Code</label>
      <input
        autoComplete="off"
        type="text"
        name="salesTaxCode"
        value={inputdata.salesTaxCode}
        onChange={changehandle}
        placeholder="Enter salesTaxCode"
      />{" "}
      <br />
      {error.salesTaxCode}
      <br />
      <br />
      {/* invoiceMethod */}
      <label htmlFor="invoiceMethod">
        Choose an Invoice Method<span style={{ color: "red" }}>* </span>{" "}
      </label>{" "}
      <select
        name="invoiceMethod"
        id="invoiceMethod"
        value={inputdata.invoiceMethod}
        onChange={changehandle}
      >
        <option value="">Select</option>
        <option value="email">Email</option>
        <option value="paper">Paper</option>
      </select>
      <br />
      {error.category}
      <br />
      <br />
      {/* invoiceType */}
      <label htmlFor="invoiceType">Invoice Type</label>
      <input
        autoComplete="off"
        type="text"
        name="invoiceType"
        value={inputdata.invoiceType}
        onChange={changehandle}
        placeholder="Enter invoiceType"
      />{" "}
      <br />
      {error.invoiceType}
      <br />
      {/* Submit button is clicked and call be made to submitHandle function */}
      <button onClick={submitHandle}>Submit</button>
      <br />
      <br />
      {/* If no error is encountered then the row is reflected in the table */}
      <ViewTable inputarr={inputarr}></ViewTable>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Page;
