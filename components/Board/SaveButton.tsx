import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

import IconButton from "./IconButton";
import { useSaveButton } from "./hooks";

Modal.setAppElement("#__next");

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 40, // z-index of Bulma's header is 30.
};
const contentStyle = {};

const SaveButton = () => {
  const {
    disabled,
    isPublishing,
    isModalOpen,
    title,
    onClick,
    onCloseModal,
    onChangeTitle,
    onClickCancel,
    onClickSave,
  } = useSaveButton();

  return (
    <>
      <IconButton
        className={`button is-fullwidth is-link${
          isPublishing ? " is-loading" : ""
        }`}
        disabled={disabled}
        icon={faFileArrowUp}
        onClick={onClick}
      >
        Save
      </IconButton>
      <Modal
        contentLabel="Save modal"
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={{ content: contentStyle, overlay: overlayStyle }}
      >
        <div className="container">
          <div className="block">
            <h2 className="title is-2">Save Program</h2>
          </div>
          <div className="block">
            <input
              className="input"
              onChange={onChangeTitle}
              placeholder="program name"
              value={title}
            />
          </div>
          <div className="block">
            <div className="buttons is-pulled-right">
              <button className="button" onClick={onClickCancel}>
                Cancel
              </button>
              <button className="button is-primary" onClick={onClickSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SaveButton;
