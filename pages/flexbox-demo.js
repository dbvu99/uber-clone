import Head from "next/head";
import { useState } from "react";
import styles from "../styles/FlexBoxDemo.module.css";

export default function Home() {
  const [mapFlex, setMapFlex] = useState(1);
  const [startFlex, setStartFlex] = useState(0.5);
  const [flexRatios, setFlexRatios] = useState({
    map: 1,
    start: 0.5,
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFlexRatios({ ...flexRatios, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Head>
        <title>Flexbox Demo with NextJS CSS Modules</title>
      </Head>
      <p className="see-code-nav">
        <a href="#code">see code</a>
      </p>
      <div className={styles.container}>
        <div className={styles.map} style={{ flex: flexRatios.map }}>
          <label htmlFor="map-flexbox">Map Ratio: </label>
          <input type="number" onChange={onChangeHandler} name="map" id="map-flexbox" className="map-flexbox" value={flexRatios.map}></input>
        </div>
        <div className={styles.start} style={{ flex: flexRatios.start }}>
          <label htmlFor="start-flexbox">Start Ratio: </label>
          <input type="number" onChange={onChangeHandler} name="start" id="start-flexbox" className="start-flexbox" value={flexRatios.start}></input>
        </div>
      </div>
      <div id="code">
        <h2>Flexbox demo</h2>
        <div>
          <h3>Import the CSS Module</h3>
          <code>
            <pre>
              {`
      import styles from "../styles/Home.module.css";
      `}
            </pre>
          </code>
        </div>
        <div>
          <h3>JSX</h3>
          <code>
            <pre>
              {`
      <p className="see-code-nav">
        <a href="#code">see code</a>
      </p>
      <div className={styles.container}>
        <div className={styles.map}></div>
        <div className={styles.start}></div>
      </div>
          `}
            </pre>
          </code>
        </div>
        <div>
          <h3>CSS</h3>
          <code>
            <pre>
              {`
  .container {
    padding: 0 2rem;
    height: 100vh;
    display: flex;
    background-color: rgb(185, 185, 255);
    flex-direction: column;
  }

  .map {
    background-color: bisque;
    flex: ${flexRatios.map};
    text-align: center;
  }

  .start {
    background-color: floralwhite;
    flex: ${flexRatios.start};
  }
          `}
            </pre>
          </code>
        </div>
      </div>
    </>
  );
}
