import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav
      style={{
        backgroundColor: "#222",
        padding: "20px",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "30px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          justifyContent: "center",
        }}
      >
        <li>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Start
          </Link>
        </li>

        <li>
          <Link
            to="/sets"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Zestawy
          </Link>
        </li>

        <li>
          <Link
            to="/parts"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Części
          </Link>
        </li>

        <li>
          <Link
            to="/help"
            style={{ color: "white", textDecoration: "none", fontSize: "20px" }}
          >
            Pomoc
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;