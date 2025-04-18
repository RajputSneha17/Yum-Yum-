import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "28px",
            fontWeight: "700",
            letterSpacing: "-0.5px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
        >
          <span
            style={{
              fontSize: "32px",
              transform: "rotate(-15deg)",
              display: "inline-block",
              animation: "wobble 2s infinite alternate",
            }}
          >
            😋
          </span>
          <span
            style={{
              color: "#333",
              textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Yum
          </span>
          <span
            style={{
              color: "#ff6b6b",
              textShadow: "1px 1px 2px rgba(255,107,107,0.2)",
            }}
          >
            Yum!
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
