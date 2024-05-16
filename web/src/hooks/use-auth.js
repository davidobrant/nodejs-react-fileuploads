import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfile } from "../api/queries";
import { mutations } from "../api/mutations";

const useAuth = () => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading: loadingUser,
    isError: errorUser,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const { mutateAsync: login } = useMutation({
    mutationFn: mutations.login,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  const { mutateAsync: logout } = useMutation({
    mutationFn: mutations.logout,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });

  return {
    auth: user != null,
    user,
    loadingUser,
    errorUser,
    login,
    logout,
  };
};

export default useAuth;
