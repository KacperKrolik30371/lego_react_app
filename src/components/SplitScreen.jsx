function SplitScreen({
  left,
  right,
  vertical = false,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: vertical ? "column" : "row",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {left}
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {right}
      </div>
    </div>
  );
}

export default SplitScreen;