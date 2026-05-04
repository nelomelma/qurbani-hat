import { createContext } from "react";
import { authClient } from "../lib/auth-client";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user || null;

  const registerUser = async (name, email, password, image) => {
    return await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
  };

  const loginUser = async (email, password) => {
    return await authClient.signIn.email({
      email,
      password,
    });
  };

  const googleLogin = async () => {
    return await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const logOutUser = async () => {
    return await authClient.signOut();
  };

  const updateUserInfo = async (name, image) => {
    return await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: isPending,
        registerUser,
        loginUser,
        googleLogin,
        logOutUser,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}