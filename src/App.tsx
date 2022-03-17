import { useState } from "react";
import { User } from "./interfaces";

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Don Mitchell",
      age: 31,
      country: "USA",
      address: {
        street: "137 Glenville Avenue",
        number: 816754096,
        zip: "02134",
      },
      admin: false,
    });

  return (
    <>
      <button onClick={fetchUser}>Fetch user on click</button>
      <p>{user && <p>{`Welcome ${user.name}`}</p>}</p>
    </>
  );
}
