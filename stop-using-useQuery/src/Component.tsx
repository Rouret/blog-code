import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  isLoading: boolean;
}>;

const Component = ({ children, isLoading }: Props): JSX.Element => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default Component;
