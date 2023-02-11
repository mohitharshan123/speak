import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => navigate(`/${route}`);

  return (
    <header className="flex w-full">
      <nav className="flex flex-row space-x-2 w-full">
        <ul className="flex flex-row space-x-10 w-full">
          <li>
            <button id="home" onClick={() => handleNavigate("home")}>
              Home
            </button>
          </li>
          <li>
            <button id="about" onClick={() => handleNavigate("about")}>
              About
            </button>
          </li>
          <li>
            <button id="services" onClick={() => handleNavigate("services")}>
              Services
            </button>
          </li>
          <li>
            <button id="contact" onClick={() => handleNavigate("contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
