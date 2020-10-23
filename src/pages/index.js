import Head from "next/head";
import ButtonKeyboard from "../components/ButtonKeyboard";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Big Ass Buttons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">big-ass-buttons.js</h1>

        <p className="tagline">
          Because every website needs at least one very large button to be taken
          seriously.
        </p>

        <div class="examples">
          <h2>Keyboard</h2>
          <div className="component">
            <ButtonKeyboard>Press Me</ButtonKeyboard>
          </div>
        </div>
      </main>
    </div>
  );
}
