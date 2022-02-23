import { NextPage } from "next";

import Header from "../components/Header";
import SavedPrograms from "../components/SavedPrograms";

const Saved: NextPage = () => {
  return (
    <>
      <Header tab="saved"></Header>
      <main>
        <SavedPrograms />
      </main>
    </>
  );
};

export default Saved;
