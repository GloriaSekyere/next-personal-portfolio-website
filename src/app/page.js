import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./home/page";
import '../app/globals.css';

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}
