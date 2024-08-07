import { ErrorBoundary } from "react-error-boundary";
import { errorConnector } from "./api/connectors";
import { User } from "./api/user.type";

import { ErrorBoundaryView, logErrorToService } from "./App";
import "./App.css";
import { Button } from "./Button";
const Actions = ({ setUsers }: { setUsers: (users: User[]) => void }) => {
  const onClickWithError = async () => {
    const usersFetched = await errorConnector();
    setUsers(usersFetched);
  };

  const onClickWithoutError = async () => {
    const usersFetched = await usersConnector();
    setUsers(usersFetched);
  };

  return (
    <div className="actions">
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryView}
        onError={logErrorToService}
      >
        <Button.ErroredButton onClick={onClickWithError} />
        <Button.UsersButton onClick={onClickWithoutError} />
      </ErrorBoundary>
      <div>
        <button
          onClick={() => {
            setUsers([]);
          }}
        >
          Clear Data and Error
        </button>
      </div>
    </div>
  );
};

export default Actions;
