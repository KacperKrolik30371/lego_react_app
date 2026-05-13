import PartItem from "./PartItem";

function RegularList({ parts }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "white",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <thead
        style={{
          backgroundColor: "#222",
          color: "white",
        }}
      >
        <tr>
          <th style={{ padding: "15px" }}>Obraz</th>
          <th>Nazwa / Numer</th>
          <th>Ilość</th>
          <th>Cena</th>
          <th>Wartość</th>
        </tr>
      </thead>

      <tbody>
        {parts.map((part) => (
          <PartItem
            key={part.number}
            image={part.image}
            name={part.name}
            number={part.number}
            price={part.price}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RegularList;