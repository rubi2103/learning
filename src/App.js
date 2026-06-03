import React from "react";
import logo from "./assets/logo.png";

function Register() {
  return (
    <div
      style={{
        backgroundColor: "#2f7f74",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#e9f0f1",
          width: "90%",
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
        }}
      >
        {/* Left Section */}
        <img
  src={logo}
  alt="Logo"
  style={{
    width: "200px",
    height: "auto",
    textAlign: "top",
  }}
/>
        <div
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          <h1 style={{ marginBottom: "30px" }}>
            REGISTER TO OUR COURSE
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.6",
              marginBottom: "40px",
            }}
          >
            Join our learning platform and build skills needed for the
            digital future. This course is designed to provide a strong
            foundation in programming, algorithms, data structures and
            software development.
          </p>

          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right Section */}
        <div
          style={{
            width: "40%",
            backgroundColor: "#1a1717",
            color: "white",
            padding: "30px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            📖 REGISTER HERE
          </h2>

          <form>
            <input
              type="text"
              placeholder="Enter full name"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <input
              type="text"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <input
              type="text"
              placeholder="Phone Number"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                border: "none",
                borderBottom: "2px solid white",
                background: "transparent",
                color: "white",
              }}
            />

            <select
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
              }}
            >
              <option>Select Course</option>
              <option>Full Stack Development</option>
              <option>UI/UX Design</option>
              <option>Python</option>
              <option>C++</option>
            </select>

            <button
              type="submit"
              style={{
                width: "90px",
                padding: "12px",
                backgroundColor: "#6c63ff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                display: "block ",      
                margin: "20px auto",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;