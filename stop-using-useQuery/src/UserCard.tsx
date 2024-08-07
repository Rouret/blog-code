import { User } from "./useUsers";

const UserCard = ({ user }: { user: User }): JSX.Element => {
  return (
    <div className="hover-effect box">
      <p>{user.username}</p>
    </div>
  );
};

export default UserCard;
