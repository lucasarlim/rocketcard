import React, { useState, createContext, ReactNode } from "react";

type UserContextType = {
  userData: any;
  setUserData: (userData: any) => void;
}

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider(props: UserContextProviderProps) {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
