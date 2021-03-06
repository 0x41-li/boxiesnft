import Head from "next/head";
import Header from "@components/Header";
import About from "@components/About";
import Faq from "@components/Faq";
import Footer from "@components/Footer";
import Roadmap from "@components/Roadmap";
import Team from "@components/Team";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>B O X I E S</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />

        <Roadmap />
        <Team />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
