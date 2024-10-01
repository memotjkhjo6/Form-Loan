import { flushSync } from "react-dom";
import "./LoanFormCss.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [errorMassage, setErrorMassage] = useState(null);
  const [showModel, setShowMode] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMassage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMassage("The Age Is Not Allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMassage("Phone Number Format Is Incorrect");
    }
    setShowMode(true);
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";

  function handleDivClick() {
    if (showModel == true) {
      setShowMode(false);
    }
  }
  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form
        className="flex"
        id="Loan-Flex"
        style={{ flexDirection: "column", marginTop: "20px" }}
        onSubmit={handleFormSubmit}
      >
        <h1 id="h1">Requesting a Loan</h1>

        <label style={{ padding: "5px" }}>Name: </label>
        <input
          placeholder="Enter Your Name"
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs((prevLoanInputs) => ({
              ...prevLoanInputs,
              name: event.target.value,
            }));
          }}
        />

        <label style={{ padding: "5px" }}>Phone Number: </label>
        <input
          placeholder="Enter Your Number's Phone"
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs((prevLoanInputs) => ({
              ...prevLoanInputs,
              phoneNumber: event.target.value,
            }));
          }}
        />

        <label style={{ padding: "5px" }}>Age: </label>
        <input
          type="number"
          placeholder="Enter Your Age"
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs((prevLoanInputs) => ({
              ...prevLoanInputs,
              age: event.target.value,
            }));
          }}
        />

        <label style={{ marginTop: "30px" }}>Are You An Employee? </label>
        <input
          type="checkBox"
          checked={loanInputs.isEmployee}
          onChange={(event) => {
            setLoanInputs((prevLoanInputs) => ({
              ...prevLoanInputs,
              isEmployee: event.target.checked,
            }));
          }}
        />

        <label style={{ padding: "5px" }}>Salary: </label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) => {
            setLoanInputs((prevLoanInputs) => ({
              ...prevLoanInputs,
              salaryRange: event.target.value,
            }));
          }}
          style={{ padding: "5px" }}
        >
          <option value="">Select Salary Range</option>
          <option style={{ padding: "5px" }}>less than 500$</option>
          <option style={{ padding: "5px" }}>between 500$ and 2000$</option>
          <option style={{ padding: "5px" }}>above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          id="btn-Loan"
        >
          Submit
        </button>
      </form>

      <Modal errorMsg={errorMassage} isVisable={showModel} />
    </div>
  );
}
