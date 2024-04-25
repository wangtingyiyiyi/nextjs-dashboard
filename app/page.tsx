import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <div className="rounded-lg flex bg-blue-500 h-20 p-4 items-end shrink-0 md:h-52">
        <AcmeLogo />
      </div>
      <div className="flex flex-col mt-4 gap-4 grow md:flex-row">
        <div className="rounded-lg flex flex-col bg-gray-50 py-10 px-6 gap-6 justify-center md:px-20 md:w-2/5">
          <div className="border-b-black border-l-transparent border-r-transparent border-b-[30px] border-l-[20px] border-r-[20px] h-0 w-0" />
          <div className={styles.shape}></div>
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="rounded-lg flex font-medium bg-blue-500 text-sm text-white py-3 px-6 transition-colors gap-5 items-center self-start md:text-base hover:bg-blue-400"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex p-6 items-center justify-center md:py-12 md:px-28 md:w-3/5">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
