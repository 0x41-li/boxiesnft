import Head from "next/head";
import Header from "@components/Header";
import About from "@components/About";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>B O X I E S</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
      </main>
    </div>
  );
}
