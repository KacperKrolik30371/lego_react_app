import SetCard from "../components/SetCard";

import set1 from "../assets/sets/set1.jpg";
import set2 from "../assets/sets/set2.jpg";
import set3 from "../assets/sets/set3.jpg";

function Sets() {
  const sets = [
    {
      number: "31151",
      name: "T-Rex",
      image: set1,
    },
    {
      number: "31140",
      name: "Magiczny Jednorożec",
      image: set3,
    },
    {
      number: "10308",
      name: "Świąteczny Domek",
      image: set2,
    },
  ];

  return (
    <div>
      <h1
        style={{
          marginBottom: "40px",
          textAlign: "center",
          fontSize: "40px",
        }}
      >
        Zestawy LEGO
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sets.map((set) => (
          <SetCard
            key={set.number}
            number={set.number}
            name={set.name}
            image={set.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Sets;