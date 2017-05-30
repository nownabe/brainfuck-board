import * as React from "react";

import Container from "bulma/layout/Container";
import Section from "bulma/layout/Section";
import Header from "components/common/Header";
import ProgramList from "./ProgramList";

export default () => (
    <div>
        <Header tab="programs" />
        <Section>
            <Container>
                <ProgramList />
            </Container>
        </Section>
    </div>
);
