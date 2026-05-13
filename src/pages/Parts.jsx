import RegularList from "../components/RegularList";

import brick1 from "../assets/parts/brick1.jpg";
import brick2 from "../assets/parts/brick2.jpg";
import brick3 from "../assets/parts/brick3.jpg";

function Parts() {
  const parts = [
    {
      image: brick1,
      name: "Brick 1x6",
      number: "3009",
      price: 0.35,
    },
    {
      image: brick2,
      name: "Brick 2x4",
      number: "3001",
      price: 0.55,
    },
    {
      image: brick3,
      name: "Brick Special",
      number: "4216",
      price: 1.2,
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <div>
          <h1 style={{ marginBottom: "10px" }}>Lista części</h1>
          <p
            style={{
              color: "#666",
            }}
          >
          </p>
        </div>
      </div>
      <RegularList parts={parts} />
    </div>
  );
}
export default Parts;