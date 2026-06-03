function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fc",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Welcome, Rubi 👋</h1>
      <p>Track your learning progress here.</p>

      {/* Stats Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Total Courses</h3>
          <h1>5</h1>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Completed</h3>
          <h1>2</h1>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Assignments</h3>
          <h1>3</h1>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Quiz Score</h3>
          <h1>85%</h1>
        </div>
      </div>

      {/* Course Section */}
      <div
        style={{
          background: "#fff",
          marginTop: "30px",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>My Courses</h2>

        <div style={{ marginTop: "15px" }}>
          <p>React JS - 80%</p>
          <progress value="80" max="100"></progress>

          <p>Node JS - 60%</p>
          <progress value="60" max="100"></progress>

          <p>MySQL - 90%</p>
          <progress value="90" max="100"></progress>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "12px 25px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          View Profile
        </button>

        <button
          style={{
            padding: "12px 25px",
            background: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;