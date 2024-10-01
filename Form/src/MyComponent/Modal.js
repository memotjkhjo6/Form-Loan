import "./LoanFormCss.css";

export default function Modal({ isVisable, errorMsg = null }) {
  if (isVisable == true) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/*<h1>The Form Has Been Submited Successfully</h1>*/}
          <h1 style={{ color: errorMsg ? "red" : "green" }}>
            {errorMsg != null
              ? errorMsg
              : "The Form Has Been Submited Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
