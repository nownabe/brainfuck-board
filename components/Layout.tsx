import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Brainfuck Board</title>
      <meta content="Enjoy Brainfuck!" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
    {children}
  </>
);

export default Layout;
