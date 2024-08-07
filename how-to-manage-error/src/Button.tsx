type ButtonProps = {
  onClick: () => void;
};
export const Button = {
  ErroredButton: ({ onClick }: ButtonProps) => {
    return (
      <div className="card">
        <button onClick={onClick}>Generate Error</button>
      </div>
    );
  },
  UsersButton: ({ onClick }: ButtonProps) => {
    return (
      <div className="card">
        <button onClick={onClick}>Get Users</button>
      </div>
    );
  },
};
