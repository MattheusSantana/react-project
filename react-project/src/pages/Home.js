import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    })();
  }, []);

  if(loading) {
      return <div>Loading Users...</div>
  }

  return (
    <>
      <p>
        Home
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </p>
    </>
  );
}

export default Home;
