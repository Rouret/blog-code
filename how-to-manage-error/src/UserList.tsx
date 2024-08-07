import { useUsers } from "./api/hooks";
import "./App.css";

const UserList = (): JSX.Element => {
  const { users } = useUsers();

  return (
    <div className="content">
      {users.length === 0 && <p>Empty ....</p>}
      {users.length !== 0 && users.map((u) => <p>{u.name}</p>)}
    </div>
  );
};

export default UserList;
