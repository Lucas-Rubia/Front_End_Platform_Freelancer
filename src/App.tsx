import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./pages/home/header";
import { Router } from "./router/router";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="freelancer-theme">
      <BrowserRouter>
        <Toaster />
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
