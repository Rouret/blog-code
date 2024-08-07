import { ErrorBoundary, FallbackProps } from "react-error-boundary";

import "./App.css";
import UserList from "./UserList";

const ErrorView = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p style={{ color: "red" }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <ErrorBoundary FallbackComponent={ErrorView}>
        <UserList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
