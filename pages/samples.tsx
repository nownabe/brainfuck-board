import { NextPage } from "next";

import Header from "../components/Header";
import SamplePrograms from "../components/SamplePrograms";

const Samples: NextPage = () => {
  return (
    <>
      <Header tab="samples" />
      <main>
        <SamplePrograms />
      </main>
    </>
  );
};

export default Samples;
