"use client";
import Feed from '@/components/Feed';
import CustomImage from '@/components/Image';
import Share from '@/components/Share';
import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  // If not signed in or loading, don't render the page content
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  // Only render the page content if signed in
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-text-gray font-bold border-b-[1px] border-border-gray">
        <Link href="/" className='pb-3 flex items-center relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-icon-blue before:rounded-full'>
          For you
        </Link>
        <Link href="/" className='pb-3 hidden md:flex items-center'>Following</Link>
        <Link href="/" className='pb-3 hidden md:flex items-center'>Computers are retarded</Link>
        <Link href="/" className='pb-3 hidden md:flex items-center'>Build in silence</Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
