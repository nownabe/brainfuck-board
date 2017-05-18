import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import styled from "styled-components";

import { change } from "actions/source";

import DarkTextarea from "components/common/DarkTextarea";

const Textarea = styled(DarkTextarea)`
  min-height: 480px;
`;

const Container = styled.div`
  margin-top: 1rem;
`;

interface Props {
  dispatch: Dispatch<Action>;
  source: string;
}

const editor = ({ dispatch, source }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.currentTarget.value));
  };

  return (
    <Container>
      <h3>Source Code</h3>
      <Textarea value={source} onChange={onChange} />
    </Container>
  );
};

export default connect(
  ({ source }, ownProps) => ({ source }),
)(editor);
