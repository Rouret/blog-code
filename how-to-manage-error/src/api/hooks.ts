import { useSuspenseQuery } from "@tanstack/react-query";
import { User } from "./user.type";

export const useUsers = () => {
  const { data } = useSuspenseQuery<Array<User>>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://fakeapiontheinternet.com/users").then(
        (res) => res.json() as Promise<Array<User>>
      ),
  });

  return {
    users: data,
  };
};
