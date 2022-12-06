import "./tailwindcss/tailwind.css";
import PlaceContentCenter from "./components/PlaceContentCenter";
import { useRef, useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const inputRef = useRef(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const Change = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const Submit = (event) => {
    event.preventDefault();

    console.log(form);
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <PlaceContentCenter>
      <Todo></Todo>
    </PlaceContentCenter>
  );
};

export default App;
