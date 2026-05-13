function Faq() {
  const questions = [
    "Jak działa aplikacja?",
    "Jak dodać zestaw LEGO?",
    "Jak zmienić ilość części?",
    "Jak korzystać z listy zestawów?",
  ];

  return (
    <div>
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Tematy pomocy
      </h2>

      <ol
        style={{
          paddingLeft: "20px",
          lineHeight: "2",
        }}
      >
        {questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ol>
    </div>
  );
}

export default Faq;