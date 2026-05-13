function SetCard({ image, number, name }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        width: "300px",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>{number}</h2>

        <p
          style={{
            color: "#666",
            marginBottom: "20px",
          }}
        >
          {name}
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "#ffcc00",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Lista części
          </button>

          <button
            style={{
              backgroundColor: "#222",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Instrukcja
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetCard;