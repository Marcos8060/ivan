import React, { useState, useEffect } from "react";
import "@/styles/globals.css";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
          <ThemeProvider theme={theme}>
            {/* <ToastContainer /> */}
            {/* {isLoading ? <SplashScreen /> : null} */}
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
      {/* </AuthProvider> */}
    </Provider>
  );
}