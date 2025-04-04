import "./App7.css";
import { useState } from "react";
export default function App7() {
  const [users, setUsers] = useState([]);
  const [user, setuser] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  return (
    <div className="App-Row">
      <div>
        <h3>Registration Form</h3>
        <p>
          <input
            type="text"
            placeholder="Enter name"
            onChange={(e) => setuser({ ...user, name: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setuser({ ...user, email: e.target.value })}
          ></input>
        </p>
        <p>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) =>
              setuser({ ...user, password: e.target.value })
            }
          ></input>
        </p>
        <p style={{ textAlign: "center" }}>
          <button onClick={handleSubmit}>Submit</button>
        </p>
      </div>
      <div>
        <h4>Details</h4>
        <table border="1">
          {users&&
            users.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}