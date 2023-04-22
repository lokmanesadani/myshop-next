import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "components/AuthRoute";
import theme from "theme/theme";
import store from "redux/store";
import { Provider } from "react-redux";
import process from "process";
import "styles/globals.css";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
      >
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </Provider>
  );
}
