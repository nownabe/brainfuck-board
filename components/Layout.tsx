import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Brainfuck Board</title>
    </Head>
    {children}
  </>
);

export default Layout;
