import "./App.css";
import Component from "./Component";
import UsersList from "./UsersList";
import { useUsers } from "./useUsers";

const Example = (): JSX.Element => {
  const { users, isLoading } = useUsers();

  return (
    <div className="container">
      ...
      <Component isLoading={isLoading}>
        <UsersList users={users} />
      </Component>
    </div>
  );
};

export default Example;
