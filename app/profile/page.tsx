'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PinList from '../components/PinList';
import Pin from '../components/Pin'

const Profile = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (!session) {
        router.push('/');
        return null; // Return null while session is loading or not available
    }

    const HandleSignOut = () => {
        signOut();
    }

    return (
        <div className='flex justify-center items-center h-fit flex-col mt-5 gap-5'>
            <div className='bg-gray-100 px-5 py-5 rounded-lg flex flex-col md:flex-row justify-center md:items-center gap-8'>
                <div className='relative w-32 h-32 md:w-40 md:h-40'>
                    {/* @ts-ignore */}
                    <Image src={session?.user?.image} layout='fill' className='rounded-full' alt='Profile Image' />
                </div>

                <div className='flex flex-col items-center gap-2 text-xl'>
                    <div className='font-semibold'>{session?.user?.name}</div>
                    <div>{session?.user?.email}</div>
                </div>

                <button onClick={HandleSignOut} className='bg-black text-white px-4 py-2 rounded-full hover:bg-red-600 hover:text-white'>
                    Sign Out
                </button>
            </div>


            <div>
                <PinList />
            </div>
        </div>
    );
};

export default Profile;
