import { useState } from "react";

function Form() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Wiadomość została wysłana!");

    console.log({
      author,
      title,
      message,
    });

    setAuthor("");
    setTitle("");
    setMessage("");
  };

  return (
    <div>
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Wyślij wiadomość
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <textarea
          placeholder="Treść wiadomości"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "none",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#ffcc00",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Wyślij
        </button>
      </form>
    </div>
  );
}

export default Form;