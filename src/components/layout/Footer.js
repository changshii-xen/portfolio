import React from "react";
import "../../App.css";

const Footer = () => {
  return (
    <div className="container6">
      <div className="header">
        <p style={{ color: "teal" }}>
          <h3>
            <i>This is what others had to say about me.</i>
          </h3>
        </p>
      </div>
      <div className="row">
        <div className="test1">
          <p style={{ color: "#f9e6f0" }}>
            <h5>
              <i>Asaph Jude Franks</i>
            </h5>
            <h6>
              "Siyamthanda is a really hard working person and if he doesn't
              understand something he makes sure he pushes himself to figure it
              out. He is a very curious."
            </h6>
            <h5>
              <i>( Friend/ Collegue)</i>
            </h5>
            <h6>
              <a href="mailto:asaphfranksboi@gmail.com">
                asaphfranksboi@gmail.com
              </a>
            </h6>
          </p>
        </div>
        <div className="test2">
          <p style={{ color: "#f9e6f0" }}>
            <h5>
              <i>Thapelo Tsotetsi</i>
            </h5>
            <h6>
              "Siyamthanda is a Life Choices Academy student of 2020. He is a
              dedicated student who strives to solve problems by himself first.
              He has strong interpersonal skills and great debugging skills."
            </h6>
            <h5>
              <i>(Lecturer)</i>
            </h5>
            <h6>
              <a href="mailto:thapelo@lifechoices.co.za">
                thapelo@lifechoices.co.za
              </a>
            </h6>
          </p>
        </div>
        <div className="test3">
          <p style={{ color: "teal" }}>
            <h5>
              <i>Yonela Ntsangani</i>
            </h5>
            <h6>
              "Siyamthanda is a team player, an excellent problem solver and an
              enthusiastic individual. His passion for his work is truly
              honorable. It would be a great privilege to have him on your
              team."
            </h6>
            <h5>
              <i>( Friend/ Collegue)</i>
            </h5>
            <h6>
              <a href="mailto:ntsanganinela@gmail.com">
                ntsanganinela@gmail.com
              </a>
            </h6>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
