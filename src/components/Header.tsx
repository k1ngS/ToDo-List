import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex h-headerHeight w-full items-center justify-center bg-gray-700">
      <img src={logo} alt="logo" />
    </header>
  );
}
