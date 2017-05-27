import * as React from "react";
import * as Modal from "react-modal";
import { connect } from "react-redux";

import { Info as Button } from "bulma/elements/Button/colors";

import ModalContent from "./Modal";

import { IsRunning, Source, State, User } from "states";

interface TStateProps {
    user: User;
    isRunning: IsRunning;
    source: Source;
}
interface TDispatchProps {}
interface TOwnProps {}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
    isRunning: state.isRunning,
    source: state.source,
    user: state.user,
});
const mapDispatchToProps = () => ({});

const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 10,
};

class Publish extends React.Component<Props, { isOpen: boolean, title: string }> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
            title: "",
        };
    }

    public render() {
        return (
            <div>
                <Button
                    onClick={this.onClick.bind(this)}
                    disabled={!this.props.user || this.props.isRunning}
                    isFullwidth
                >
                    Publish
                </Button>
                <Modal
                    contentLabel="Publish"
                    isOpen={this.state.isOpen}
                    onRequestClose={this.onClose.bind(this)}
                    shouldCloseOnOverlayClick={true}
                    style={{ overlay: overlayStyle }}
                >
                    <ModalContent
                        source={this.props.source}
                        onPublish={this.onPublish.bind(this)}
                        onCancel={this.onClose.bind(this)}
                        onTitleChange={this.onTitleChange.bind(this)}
                        title={this.state.title}
                    />
                </Modal>
            </div>
        );
    }

    private onClick() {
        this.setState({ isOpen: true });
    }

    private onClose() {
        this.setState({ isOpen: false });
    }

    private onPublish() {
        this.onClose();
    }

    private onTitleChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ title: e.currentTarget.value });
    }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Publish);
