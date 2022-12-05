import Head from 'next/head'
import Image from "next/image";
import classNames from "classnames";
import "../styles/Home.module.css";

export default function Home() {
  // TODO: for some reason iterating over these objects don't apply the expected classes
  // const defaultSizes = ["xs", "sm", "lg", "xl"];
  // const defaultColors = [
  //   "navy",
  //   "navy-dark",
  //   "blue",
  //   "blue-dark",
  //   "green",
  //   "green-dark",
  //   "red",
  //   "red-dark",
  //   "orange",
  //   "purple",
  // ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-h-screen p-16 flex-1 flex-col justify-center items-center">
        <div className="text-center text-red text-3xl font-bold capitalize">
          Buttons in different sizes
        </div>
        <div className="flex justify-center items-center my-9">
          <button className="btn btn-xs bg-navy text-white mx-10">xs</button>
          <button className="btn btn-sm bg-navy text-white mx-10">sm</button>
          <button className="btn btn-lg bg-navy text-white mx-10">lg</button>
          <button className="btn btn-xl bg-navy text-white mx-10">xl</button>
        </div>
        <div className="flex justify-center items-center flex-col my-9">
          <div className="text-center text-orange text-3xl font-bold capitalize my-10">
            Buttons in different colors and sizes
          </div>
          <div className="flex-1">
            <button className="btn btn-xs btn-navy  text-white mx-10 my-3">
              btn-navy
            </button>
            <button className="btn btn-sm btn-navy-dark text-white mx-10 my-3">
              btn-navy-dark
            </button>
            <button className="btn btn-lg btn-blue text-white mx-10 my-3">
              btn-blue
            </button>
            <button className="btn btn-xl btn-blue-dark text-white mx-10 my-3">
              btn-blue-dark
            </button>
            <button className="btn btn-lg btn-green text-white mx-10 my-3">
              btn-green
            </button>
            <button className="btn btn-lg btn-green-dark text-white mx-10 my-3">
              btn-green-dark
            </button>
            <button className="btn btn-lg btn-red text-white mx-10 my-3">
              btn-red
            </button>
            <button className="btn btn-lg btn-red-dark text-white mx-10 my-3">
              btn-red-dark
            </button>
            <button className="btn btn-lg btn-orange text-white mx-10 my-3">
              btn-orange
            </button>
            <button className="btn btn-lg btn-purple mx-10 my-3">
              btn-purple
            </button>
          </div>
        </div>
      </main>

      <footer className="flex flex-1 justify-center items-center p-8 border-t-black">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-grow justify-center items-center"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
