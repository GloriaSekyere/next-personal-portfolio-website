import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/page";
import '../app/globals.css';

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
