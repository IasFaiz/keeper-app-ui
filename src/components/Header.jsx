import React from "react";

const Header = () => {
  return (
    <div
      style={{
        background: "#f0b643",
        height: "65px",
        color: "white",
        fontSize: "30px",
        boxShadow: "0px 1px 10px 1px #bababa",
      }}
    >
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          className="container"
          style={{
            margin: "10px",
            marginLeft: "30px",
            padding: "5px",
            fontWeight: "500",
          }}
        >
          Keeper
        </div>
      </nav>
    </div>
  );
};

export default Header;
