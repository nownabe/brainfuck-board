import Link from "next/link";
import MenuItem from "./MenuItem";

type Tab = "board" | "saved";

type Props = {
  tab: Tab;
};

const Header = ({ tab }: Props) => {
  return (
    <div
      aria-label="main navigation"
      className="navbar has-shadow"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/" passHref>
            <a className="navbar-item">
              <h1 className="has-text-weight-bold">Brainfuck Board</h1>
            </a>
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <MenuItem href="/" isActive={tab === "board"}>
              Board
            </MenuItem>
            <MenuItem href="/saved" isActive={tab === "saved"}>
              Saved
            </MenuItem>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span>Sign In with GitHub</span>
                </button>
                <button className="button">
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>Sign In with Twitter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
