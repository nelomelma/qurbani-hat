import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("qurbaniUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  const logOutUser = () => {
    localStorage.removeItem("qurbaniUser");
    setUser(null);
    return Promise.resolve();
  };

  const updateUserInfo = (name, image) => {
    const updatedUser = {
      ...user,
      name,
      image,
    };

    localStorage.setItem("qurbaniUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    return Promise.resolve({ error: null });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logOutUser,
        updateUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}