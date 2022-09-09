import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CaruselCom() {
  return (
    <div style={{ display: "block", width: "100%" }}>
      <div className="d-flex ">
        <Carousel style={{ display: "block", width: "50%" }}>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={
                "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt=" One"
            />
            <Carousel.Caption>
              <h3>1st Project Img</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=" Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <span className="p-4" style={{ display: "block", width: "50%" }}>
          <h4>About Me</h4>
          <ul>
            <li>
              Professional exposure in JavaScript technology such as ReactJS,
              ReduxJS, MongoDB, MongooseJS, Axios, ExpressJS, NodeJS & many
              more.
            </li>
            <li>
              Worked with may CSS frameworks/libraries i.e. Bootstrap,
              SemanticUI, TailwindCSS with twin.macro
            </li>
            <li>
              Leveraged React JS resources for all data access, encapsulating
              URL’s and standardizing data access interfaces.
            </li>
            <li>
              React and Functional Driven Javascript expert in SPA’s, UI
              Components, Mobile web and Performance optimization.
            </li>
            <li>
              Responsible for implementing UI mockups, integrating third party
              React libraries, and handling/creating Redux store data.
            </li>
            <li>
              The back-end use of Node JS, Express JS, MongoDB and Mongoose, the
              complete MERN Stack to provide RESTFUL API.
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
