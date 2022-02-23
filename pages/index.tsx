import type { NextPage } from "next";
import Head from "next/head";

import Board from "../components/Board";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header tab="board"></Header>

      <main>
        <Board></Board>
      </main>
    </>
  );
};

export default Home;
