import Container from "./style";
import { useState } from "react";
const Input = ({ type, placeholder, svg }) => {
  const [isIconVisible, setIsIconVisible] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIsIconVisible(inputValue === "");
  };
  return (
    <Container>
      <div className={`svg-container ${isIconVisible ? "visible" : "hidden"}`}>
        {svg}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default Input;
