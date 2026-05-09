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

  const registerUser = async (name, email, photo, password) => {
    const newUser = {
      name,
      email,
      image: photo,
      password,
    };

    localStorage.setItem("qurbaniUser", JSON.stringify(newUser));
    setUser(newUser);

    return { error: null };
  };

  const loginUser = async (email, password) => {
    const savedUser = JSON.parse(localStorage.getItem("qurbaniUser"));

    if (
      !savedUser ||
      savedUser.email !== email ||
      savedUser.password !== password
    ) {
      return { error: "Invalid email or password" };
    }

    setUser(savedUser);

    return { error: null };
  };

  const googleLogin = async () => {
    const googleUser = {
      name: "Google User",
      email: "googleuser@gmail.com",
      image: "https://i.ibb.co/4pDNDk1/avatar.png",
    };

    localStorage.setItem("qurbaniUser", JSON.stringify(googleUser));
    setUser(googleUser);

    return { error: null };
  };

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