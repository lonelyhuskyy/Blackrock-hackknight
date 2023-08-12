import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Form.css";

function App() {
  const formInitialDetails = {
    Name: "",
    selectedStock: "",
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const [elementVisible, setElementVisible] = useState(false);

  const handleClick = () => {
    setElementVisible(!elementVisible);
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [name, setName] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [price, setPrice] = useState("");
  const [res, setRes] = useState("");
  const [news, setNews] = useState("No recent Headlines were found");
  const [buttonText, setButtonText] = useState("Predict");
  const stockOptions = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];
  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Predicting...");
    // Send data to Flask backend
    try {
      const response = await axios.post("/submit-form", {
        name: name,
        stock: selectedStock,
      });

      setSelectedStock(selectedStock);
      setButtonText("Predict");
      setFormDetails(formInitialDetails);
      // Update state with the prediction
      setPrice(response.data.price);
      setRes(response.data.res);
      setNews(response.data.news);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <section className="contact" id="contact">
      <Container className="bigCont">
        <Row md={6} className="contactForm">
          <Col className="formCont">
            <h2>Stock Predictor</h2>
            <form onSubmit={handleSubmit}>
              <Row md={12}>
                <div className="container">
                  <Col md={4} className="px-1">
                    <div className="btnCont">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Name"
                      />
                    </div>
                  </Col>
                  <Col md={4} className="px-1">
                    <div className="btnCont">
                      <select
                        value={selectedStock}
                        onChange={(e) => setSelectedStock(e.target.value)}
                      >
                        <option value="">Select a stock</option>
                        {stockOptions.map((stock, index) => (
                          <option key={index} value={stock}>
                            {stock}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="btnCont">
                      <button type="submit" onClick={handleClick}>
                        <span>{buttonText}</span>
                      </button>
                    </div>
                  </Col>
                </div>
              </Row>
            </form>
          </Col>
        </Row>
        {elementVisible && (
        <Row md={6} id="result" className="Result">
          <Col>
            <Row>
              <Col className="shout"> {name}, you should hear this!</Col>
              <Col className="figure">Prediction: ${price}/share</Col>
              <Col>Advice: {res}</Col>
            </Row>
            <Row>
              <Col>News: {news}</Col>
            </Row>
          </Col>
        </Row>
          )}
      </Container>
    </section>
  );
}

export default App;
