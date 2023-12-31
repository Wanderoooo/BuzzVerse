import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import '@radix-ui/themes/styles.css';
import { Theme, Flex, Text, Button, ThemePanel, Grid } from '@radix-ui/themes';

import Textbox from '../components/input/Textbox';
import ChatView from '@/components/display/ChatView';
import './test.module.css'


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (<>
   <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By an insanely skilled dev team
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <h1>silly chat</h1>
        </div>

        <div className={styles.grid}>
          <a
            href="signup"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Sign up <span>-&gt;</span>
            </h2>
            <p>
              Sign up by creating an account.
            </p>
          </a>

          <a
            href="login"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Login <span>-&gt;</span>
            </h2>
            <p>
              Quickly get back to chatting with your friends.
            </p>
          </a>

          <a
            href="main"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Dashboard <span>-&gt;</span>
            </h2>
            <p>
              Discover the beautiful interface we have to offer.
            </p>
          </a>

          <a
            href="https://github.com/Wanderoooo/messaging-social-platform"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              About <span>-&gt;</span>
            </h2>
            <p>
              Learn more about this application.
            </p>
          </a>
        </div>
      </main> 
    </>)
}


