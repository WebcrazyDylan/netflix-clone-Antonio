import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Head from "next/head";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}

const Profiles = () => {
  return (
    <>
      <Head>
        <title>Profiles</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/netflix.svg" />
      </Head>
    </>
  );
};

export default Profiles;
