'use client';
import React, { useEffect, useState } from 'react';
import Logo from '@/public/logo.png';
import Image from 'next/image';
import Profile from '@/public/profile.png';
import { BellRing, MessageCircle, CircleUser, ChevronDown, Search } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';
import app from '../utils/firbaseConfig';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const db = getFirestore(app);
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleUser = async () => {
        if (session?.user) {
            //@ts-ignore
            await setDoc(doc(db, 'users', session.user.email), {
                userName: session.user.name,
                email: session.user.email,
                image: session.user.image,
            });
        }
    };

    const handleCreate = () => {
        if (session) {
            router.push('/pin-builder');
        } else {
            toast.error('Please Login First');
        }
    };

    useEffect(() => {
        handleUser();
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [session]);

    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 768);
    };

    return (
        <div className="flex py-2 w-full justify-between px-5">
            <Toaster />
            <div className="flex items-center gap-5 font-semibol">
                <Link href={'/'}>
                    <Image className="w-10 h-10" src={Logo} alt="Logo" />
                </Link>
                {
                    !isSmallScreen && (
                        <Link href={'/'} className="px-3 py-2 rounded-full">
                            Home
                        </Link>
                    )
                }

                <div className="bg-black text-white px-3 py-2 rounded-full" onClick={handleCreate}>
                    Create
                </div>
            </div>

            {!isSmallScreen && (
                <div className="bg-gray-200 w-2/3 flex items-center rounded-full px-4 gap-2">
                    <Search className="text-black" />
                    <input
                        type="text"
                        className="flex w-full items-center text-black bg-gray-200 focus:outline-none"
                        placeholder="Search Here....."
                    />
                </div>
            )}

            <div className="flex gap-5 items-center">
                {
                    !isSmallScreen && (
                        <>
                            <BellRing />
                            <MessageCircle />
                            </>
                    )
                }
                <div>
                    {session ? (
                        <div>
                        
                            <Link href={'/profile'}>
                           <Image src={session.user?.image || ''} height={40} className="rounded-full" width={40} alt="eerr" />
                            </Link>
                            {/* <div onClick={()=>signOut()}>
                            Sign Out
                        </div> */}
                        </div>
                    ) : (
                        <button onClick={() => signIn()} className="font-semibold bg-black text-white px-3 py-2 rounded-full cursor-pointer">
                            {' '}
                            Login{' '}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
