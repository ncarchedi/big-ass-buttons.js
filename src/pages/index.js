import Head from "next/head";
import Button from "../components/Button";

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
          Because making it very large is the{" "}
          <span style={{ fontStyle: "normal", fontWeight: "bold" }}>only</span>{" "}
          way to guarantee 100% of people click it.
        </p>

        <div className="examples">
          <div className="example">
            <h2>Keyboard</h2>
            <Button type="keyboard">Press Me</Button>
          </div>

          <div className="example">
            <h2>Floating</h2>
            <Button type="floating">Press Me</Button>
          </div>

          <div className="example">
            <h2>Retro</h2>
            <Button type="retro">Press Me</Button>
          </div>

          <div className="example">
            <h2>Clean</h2>
            <Button type="clean">Press Me</Button>
          </div>

          <div className="example">
            <h2>Gradient</h2>
            <Button type="gradient">Press Me</Button>
          </div>

          <div className="example">
            <h2>Hoverboard</h2>
            <Button type="hoverboard">Press Me</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
