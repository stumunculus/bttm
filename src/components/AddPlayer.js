import { useState } from "react";

export const AddPlayer = ({ addNewPlayer }) => {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPlayer(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Player Name:{" "}
        <input
          name="nameInput"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Your name here"
        />
      </label>
      <hr />
      <button type="reset">Reset form</button>
      <button disabled={name.length < 3} type="submit">
        Save name
      </button>
    </form>
  );
};
