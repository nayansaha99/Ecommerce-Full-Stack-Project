"use client";

import { createContext, useContext, useState } from "react";

const NotificationContext = createContext(null);

export function SuccessTrigger({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotif = (msg, type = "success") => {
    setNotification({ msg, type });

    setTimeout(() => {
      setNotification(null);
    }, 2500);
  };

  return (
    <NotificationContext.Provider value={{ showNotif }}>
      {children}

      {notification && (
        <div
          className={`fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 ${
            notification.type === "error" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {notification.msg}
        </div>
        
      )}
    </NotificationContext.Provider>
  );
}

export const useNotif = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error("useNotif must be used inside SuccessTrigger provider");
  }

  return context;
};