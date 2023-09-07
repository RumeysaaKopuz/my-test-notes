import { useState } from "react";

const Button = () => {
  const [btnColor, setBtnColor] = useState("red");
  return (
    <>
        <h2>Buton testi:</h2>
    <div className="btn-container">

      <button
        // rengini belirleme
        onClick={() => setBtnColor(btnColor === "red" ? "blue" : "red")}
        style={{ background: btnColor }}
      >
        {/* icerigini belirleme  */}
        {btnColor === "red" ? "maviye cevir" : "kirmiziya cevir"}
      </button>
    </div>
    </>
  );
};

export default Button;
