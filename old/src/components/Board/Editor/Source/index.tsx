import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import styled from "styled-components";

import { change } from "actions/source";
import { IsRunning } from "states";

import Textarea from "bulma/elements/Textarea";
import Container from "components/common/MiniContainer";

const TallTextarea = styled(Textarea)`
  min-height: 480px;
`;

interface Props {
  dispatch: Dispatch<Action>;
  isRunning: IsRunning;
  source: string;
}

const editor = ({ dispatch, isRunning, source }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.currentTarget.value));
  };

  return (
    <Container>
      <h3>Source Code</h3>
      <TallTextarea value={source} onChange={onChange} disabled={isRunning} />
    </Container>
  );
};

export default connect(
  ({ source, isRunning }, ownProps) => ({ source, isRunning }),
)(editor);
