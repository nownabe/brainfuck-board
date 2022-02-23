import Link from "next/link";

type Props = {
  isActive: boolean;
  href: string;
  children: string;
};

const MenuItem = ({ isActive, href, children }: Props) => {
  const activeClassName = isActive ? " is-active" : "";
  return (
    <Link href={href} passHref>
      <a className={`navbar-item is-tab${activeClassName}`}>{children}</a>
    </Link>
  );
};

export default MenuItem;
