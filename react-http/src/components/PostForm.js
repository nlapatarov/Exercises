import React, { useState } from "react";

import axios from "axios";

function App() {
  const [info, setInfo] = useState({ name: "", proffession: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/users",
      data: info,
    }).then((res) => console.log(res.data));
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Name :</label>
      <input
        type="text"
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
      />

      <label>Profession : </label>
      <input
        type="text"
        onChange={(e) => setInfo({ ...info, proffession: e.target.value })}
      />

      <button>Submit</button>
    </form>
  );
}

export default App;
