import Link from "next/link";

import Account from "./Account";
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
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
