import { Suspense } from "react";
import Link from 'next/link';
import Player from './components/player';

export default function Home(pageProps:any) {

  return (
    <div className="flex max-w-full h-[85vh] justify-center">
      <main className="aspect-9/16">
        <Player {...pageProps} />
      </main>
    </div>
  );
}
