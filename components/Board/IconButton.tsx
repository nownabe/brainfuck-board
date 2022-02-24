import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon: IconDefinition;
};

const IconButton = ({ icon, children, ...props }: Props) => (
  <button {...props}>
    <span className="icon">
      <FontAwesomeIcon icon={icon} />
    </span>
    <span>{children}</span>
  </button>
);

export default IconButton;
