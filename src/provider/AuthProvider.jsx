import { createContext, useEffect, useState } from "react";
import { authClient } from "../lib/auth-client";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const refreshSession = async () => {
    const { data, error } = await authClient.getSession();
    if (error) throw new Error(error.message || "Unable to verify session");
    setUser(data?.user ?? null);
    return data?.user ?? null;
  };

  useEffect(() => {
    let active = true;
    authClient.getSession().then(({ data }) => {
      if (active) setUser(data?.user ?? null);
    }).catch(console.error).finally(() => {
      if (active) setLoading(false);
    });
    return () => { active = false; };
  }, []);

  const registerUser = async (name, email, photo, password) => {
    const { error } = await authClient.signUp.email({ name, email, password, image: photo });
    if (error) return { error: error.message };
    // Registration must lead to the login page, not leave the user signed in.
    await authClient.signOut();
    setUser(null);
    return { error: null };
  };

  const loginUser = async (email, password) => {
    const { error } = await authClient.signIn.email({ email, password });
    if (error) return { error: error.message };
    await refreshSession();
    return { error: null };
  };

  const googleLogin = async () => {
    const { error } = await authClient.signIn.social({ provider: "google", callbackURL: `${window.location.origin}/` });
    return { error: error?.message ?? null };
  };

  const logOutUser = async () => {
    const { error } = await authClient.signOut();
    if (error) throw new Error(error.message);
    setUser(null);
  };

  const updateUserInfo = async (name, image) => {
    const { error } = await authClient.updateUser({ name, image });
    if (error) return { error: error.message };
    await refreshSession();
    return { error: null };
  };

  return <AuthContext.Provider value={{ user, loading, registerUser, loginUser, googleLogin, logOutUser, updateUserInfo }}>{children}</AuthContext.Provider>;
}
