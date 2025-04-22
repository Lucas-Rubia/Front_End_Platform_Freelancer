import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./pages/home/header";
import { HeroSection } from "./pages/home/heroSection";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="freelancer-theme">
      <Toaster />
      <Header />
      <HeroSection />
    </ThemeProvider>
  );
}
