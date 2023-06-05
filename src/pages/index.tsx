import Head from "next/head";
// import Pro from '../pages/pro'
import Schedule from "../components/schedule";
import Team from "../components/team";
import Slider from "../components/slider";
import PodkastyBody from "../components/podkasty_body";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>P&B</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Link className="img_play" href="/"></Link>
        <svg className="img_illustration"></svg>
      </div>
      <div className="container">
        <svg className="img_group"></svg>
      </div>
      <div className="container">
        <div className="body">
          <h2>Сьогодні у програмі</h2>
        </div>
      </div>
      <div className="container">
        <Schedule />
      </div>
      <div className="container">
        <div className="podkasty"></div>
      </div>
      <div className="container">
        <PodkastyBody />
      </div>
      <div className="container">
        <svg className="comand"></svg>
      </div>
      <div className="container">
        <Team />
      </div>
      <div className="container">
        <svg className="partners"></svg>
      </div>
      <div className="container">
        <Slider />
      </div>
    </>
  );
}
