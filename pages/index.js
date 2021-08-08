import Head from "next/head";
import Header from "../components/header/Header";
import Nav from "../components/navbar/Nav";
import Results from "../components/result/Results";
import requests from "../utils/requests";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name='description' content='Hulu 2.0 created using Next js' />
        <link rel='icon' href='/hulu-icon-2.jpg' />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
