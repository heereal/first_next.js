import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Next.js 공부</title>
      </Head>
      <div>
        <Link href={`/about`}>About</Link>
        <div onClick={() => {
          router.push("/profile")
        }}>Profile</div>

      </div>
      <Component {...pageProps} />
      <h2>Footer</h2>
    </>
  )
}
