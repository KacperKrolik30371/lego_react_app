import { useState } from "react";

function PartItem({ image, name, number, price }) {
  const [quantity, setQuantity] = useState(1);

  const total = (quantity * price).toFixed(2);

  return (
    <tr>
      <td>
        <img
          src={image}
          alt={name}
          style={{
            width: "80px",
            borderRadius: "10px",
          }}
        />
      </td>

      <td>
        <strong>{name}</strong>
        <br />
        {number}
      </td>
      <td>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
            -
          </button>

          <span>{quantity}</span>

          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
      </td>

      <td>{price.toFixed(2)} PLN</td>

      <td>
        <strong>{total} PLN</strong>
      </td>
    </tr>
  );
}
export default PartItem;