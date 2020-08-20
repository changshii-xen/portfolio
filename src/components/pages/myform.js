import React from "react";
import "../../App.css";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="container4">
        <div className="headers">
          <p style={{ color: "#f9e6f0" }}>
            <h1>
              <i>Contact Me</i>
            </h1>
          </p>
        </div>
        <div className="form">
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/mwkrrljy"
            method="POST"
          >
            <label className="label">Email:</label>
            <input type="email" name="email" />
            <label className="label">Message:</label>
            <input type="text" name="message" />
            {status === "SUCCESS"
              ? <p>Thanks!</p>
              : <button className="button">Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
