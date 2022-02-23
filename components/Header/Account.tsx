import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Spinner from "./Spinner";
import { useUser } from "./hooks";

const Account = () => {
  const {
    isLoading,
    user,
    signInWithTwitter,
    signInWithGithub,
    onClickSignOut,
  } = useUser();

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return (
      <>
        <div className="navbar-item">{user.name}</div>
        <div className="navbar-item">
          <button className="button" onClick={onClickSignOut}>
            <span>Sign out</span>
            <span className="icon">
              <FontAwesomeIcon icon={faSignOut} />
            </span>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="navbar-item">
        <button className="button" onClick={signInWithGithub}>
          <span className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span>Sign In with GitHub</span>
        </button>
      </div>
      <div className="navbar-item">
        <button className="button" onClick={signInWithTwitter}>
          <span className="icon">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>Sign In with Twitter</span>
        </button>
      </div>
    </>
  );
};

export default Account;
