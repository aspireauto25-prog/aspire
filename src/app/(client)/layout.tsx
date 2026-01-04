"use client";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { persistor, store } from "@/redux/store";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ClientLayout;
