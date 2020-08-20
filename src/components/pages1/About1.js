import React from "react";

const About1 = () => {
  return (
    <div className="container2">
      <div className="headers">
        <p style={{ color: "teal" }}>
          <h1>
            <i>About Me</i>
          </h1>
        </p>
      </div>
      <div className="row">
        <div className="element1">
          <p style={{ color: "teal" }}>
            <h3>
              <i>Overview</i> <br />
            </h3>

            <h5>
              Full Name: Siyamthanda Mgoqi <br /> <br />
              Date of Birth: 26/01/2002 <br /> <br />
              Gender: Male <br />
              <br />
              Location (suburb): Delft, Cape Town <br />
              <br />
              Nationality (or legal status in this country): South African{" "}
              <br /> <br />
              Willing to relocate to: Durban/Gauteng
            </h5>
          </p>
        </div>
        <div className="element2">
          <p style={{ color: "teal" }}>
            <h3>
              <i>Interests</i> <br />
            </h3>
            <h5>
              Keeping fit and healthy. <br /> <br />
              Music <br /> <br />
              Exploring other art forms <br /> <br />
              Technology <br /> <br />
            </h5>
          </p>
        </div>
        <div className="element3">
          <p style={{ color: "teal" }}>
            <h3>
              <i>Education</i> <br />
            </h3>
            <h5>
              Matric : <br />
              2019 Christel House South Africa <br />
              <br />
              University name: CPUT <br />
              <br />
              Course name: High Certificate in IT <br />
              <br />
              Period: 1 year <br />
              <br />
              Completed: No <br />
              <br />
              Other: Life Choices Coding Academy <br />
              <br />
              Duration: 6 months
            </h5>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About1;
