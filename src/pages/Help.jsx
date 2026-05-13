import { useState } from "react";

import SplitScreen from "../components/SplitScreen";

import Faq from "./Faq";
import Form from "./Form";

function Help() {
  const [vertical, setVertical] = useState(false);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Pomoc</h1>

          <p
            style={{
              color: "#666",
              marginTop: "10px",
            }}
          >
            Centrum pomocy aplikacji LEGO
          </p>
        </div>

        <button
          onClick={() => setVertical(!vertical)}
          style={{
            backgroundColor: "#222",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Zmień układ
        </button>
      </div>

      <SplitScreen
        vertical={vertical}
        left={<Faq />}
        right={<Form />}
      />
    </div>
  );
}

export default Help;