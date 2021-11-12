import React from "react";
import { useState } from "react";

const UpperText = () => {
  return (
    <div className="upper-text">
      <h1>Simple, traffic-based pricing</h1>
      <p>
        Sign-up for our 30-day trial. <span>No credit card required.</span>
      </p>
    </div>
  );
};

export default function Home() {
  const [inputStyle, setInputStyle] = useState({
    background: `linear-gradient(90deg, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)`,
  });
  const handleMouseMoveInputRange = (e) => {
    const x = e.target.value;
    const color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${x}%, hsl(224, 65%, 95%) ${x}%)`;
    setInputStyle({ background: color });
  };
  return (
    <div className="container">
      <div className="upper-container">
        <UpperText />
      </div>
      <div className="down-container">
        <div>
          <h1 className="pageviews-text">100K PAGEVIEWS</h1>
          <input
            type="range"
            className="slider"
            onMouseMove={handleMouseMoveInputRange}
            onTouchMove={handleMouseMoveInputRange}
            onTouchEnd={handleMouseMoveInputRange}
            style={{ ...inputStyle }}
          />

          <h1 className="pricing-text">
            $16.00<label> / month</label>
          </h1>

          <div className="wrapper">
            <h5 id="monthly">Monthly Billing</h5>
            <input
              type="checkbox"
              name="switch"
              className="switch"
              id="switch"
            />
            <label htmlFor="switch" className="switch-label"></label>
            <h5>Yearly Billing</h5>

            <h4>
              <span id="minus">-</span>25%<span id="discount"> discount</span>
            </h4>
          </div>

          <hr />

          <div className="wrapper-down">
            <div>
              <h4>Unlimited websites</h4>
              <h4>100% data ownership</h4>
              <h4>Email reports</h4>
            </div>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  );
}
