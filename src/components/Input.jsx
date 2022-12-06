import { useEffect, useRef } from "react";

const Input = ({ isFocused = false, type = "text", ...props }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      {...props}
      className={
        "transition duration-300 w-full focus:outline-none focus:ring-blue-200 border-blue-400 shadow-sm rounded-lg"
      }
      type={type}
    />
  );
};
export default Input;
