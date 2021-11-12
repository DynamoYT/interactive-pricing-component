import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          margin: "50px",
          padding: "50px",
          textAlign: "center",
          backgroundImage: "url(/pattern-circles.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 style={{ color: "hsl(227, 35%, 25%)" }}>
          Simple, traffic-based pricing
        </h1>
        <p style={{ fontSize: "15px", color: "#9FA5BA" }}>
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>

      <span
        style={{
          backgroundColor: "white",
          width: "35vw",
          height: "50vh",
          alignSelf: "center",
          borderRadius: "9px",
          boxShadow: "4px 5px 10px hsl(240, 80%, 98%)",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "20px",
            alignItems: "center",
          }}
        >
          <h5
            style={{
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              fontWeight: "700",
              color: "hsl(225, 20%, 60%)",
            }}
          >
            100K pageviews
          </h5>
          <label
            style={{
              marginLeft: "auto",
              color: "hsl(227, 35%, 25%)",
              fontSize: "40px",
              fontWeight: "800",
            }}
          >
            $16.00
          </label>
          <label style={{ color: "hsl(225, 20%, 60%)", fontSize: "1em" }}>
            / month
          </label>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            className="slider"
            type="range"
            onMouseMove={handleMouseMoveInputRange}
            style={{
              ...inputStyle,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            color: "hsl(225, 20%, 60%)",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "25px",
            marginBottom: "35px",
          }}
        >
          <h5
            style={{
              fontSize: "11px",
            }}
          >
            Monthly Billing
          </h5>
          <input type="checkbox" name="switch" className="switch" id="switch" />
          <label htmlFor="switch" className="switch-label"></label>
          <h5
            style={{
              fontSize: "11px",
            }}
          >
            Yearly Billing
          </h5>
          <h5
            style={{
              fontSize: "8px",
              fontWeight: "800",
              color: "hsl(15, 100%, 70%)",
              position: "absolute",
              right: "37vw",
              padding: "3.2px",
              backgroundColor: "hsl(14, 92%, 95%)",
              borderRadius: "20px",
            }}
          >
            25% discount
          </h5>
        </div>
        <hr
          style={{
            backgroundColor: "hsl(224, 65%, 95%)",
            height: "1px",
            border: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            margin: "35px",
            alignItems: 'center',
            marginBottom: '30px'
          }}
        >
          <div
          className="foot-text"
            style={{
              color: "hsl(225, 20%, 60%)",
            }}
          >
            <h6 id="headings-6" style={{ fontWeight: "600" }}>
              Unlimited websites
            </h6>
            <h6 id="headings-6" style={{ fontWeight: "600" }}>
              100% data ownership
            </h6>
            <h6 id="headings-6" style={{ fontWeight: "600" }}>
              Email reports
            </h6>
          </div>

          <div style={{
             marginLeft: "auto",
          }}>
            <button style={{
             
              paddingTop: "9px",
              paddingBottom: "9px",
              paddingRight: "40px",
              paddingLeft: "40px",
              borderRadius: "20px",
              border: "none",
              color: "hsl(226, 100%, 87%)",
              backgroundColor: "hsl(227, 35%, 25%)",
              cursor: "pointer",
            }} >Start my trial</button>
          </div>
        </div>
      </span>
    </div>
  );
}
