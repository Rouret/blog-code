import { useQuery } from "@tanstack/react-query";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export const useUsers = () => {
  const { data, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Simulate a slow network
      await new Promise((resolve) => setTimeout(resolve, 2000));

      return response.json();
    },
  });

  return {
    users: data?.slice(0, 4) || [], // Limit to 4 users
    isLoading,
  };
};
