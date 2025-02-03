import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
    return (
      <header className="bg-gray-600 p-4 flex flex-col items-center justify-center pt-12">
        <Logo />
        <Menu />  
      </header>
    );
  }