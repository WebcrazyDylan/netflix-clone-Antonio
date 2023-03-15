import Head from "next/head";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

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

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/netflix.svg" />
      </Head>
      <h1 className="text-4xl font-bold underline text-white">Netflix Clone</h1>
      <p className="text-white">Logged In As: {user?.name}</p>
      <button
        className="h-10 w-full text-white cursor-pointer"
        onClick={() => signOut()}
      >
        Log Out!
      </button>
    </>
  );
}
