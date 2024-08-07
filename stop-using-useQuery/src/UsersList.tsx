import UserCard from "./UserCard";
import { User } from "./useUsers";

const UsersList = ({ users }: { users: User[] }): JSX.Element => {
  return (
    <>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </>
  );
};

export default UsersList;
