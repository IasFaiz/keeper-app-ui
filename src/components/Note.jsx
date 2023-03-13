import React from "react";

export default function Note() {
  return (
    <>
      <div
        style={{
          background: "white",
          margin: "30px 10px 10px 30px",
          padding: "auto",
          //   textAlign: "center",
          borderRadius: "5px",
          height: "80px",
          width: "220px",
          boxShadow: "0px 1px 10px 1px #bababa",
          lineHeight: "2mm",
        }}
      >
        <div
          className="container"
          style={{
            margin: "auto",
            padding: "5px",
          }}
        >
          <p>This is the Note title</p>
          <p>This is the Note content.</p>
        </div>
      </div>
    </>
  );
}
