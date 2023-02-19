import Head from 'next/head'
import { Main } from '@/components/main';
export default function Home() {
  
  return (
    <>
      <Head>
        <title>MacOs Like</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  )
}
