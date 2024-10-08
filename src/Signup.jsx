import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" name="name" />
        </div>
        <div>
          Email: <input type="email" name="email" />
        </div>
        <div>
          Role: <input type="text" name="role" />
        </div>
        <div>
          Password: <input type="password" name="password" />
        </div>
        <div>
          Password confirmation: <input type="password" name="password_confirmation" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
