'use client';
import React from 'react'
import Uploader from '../components/Uploader'
import { useSession, signIn, signOut } from 'next-auth/react';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { getDownloadURL, getStorage, uploadBytes } from 'firebase/storage';
import app from '../utils/firbaseConfig';
import { getFirestore, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { ref } from 'firebase/storage';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const { data: session, status } = useSession();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(false)

    const storage = getStorage(app)
    const db = getFirestore(app)
    const postId = Date.now().toString();

    const HandlePinSave = async () => {
        setLoading(true)
        //@ts-ignore
        const storageRef = ref(storage, `images/${image.name}`);
        try {
            //@ts-ignore
            const snapshot = await uploadBytes(storageRef, image);
            console.log('Uploaded a blob or file!', snapshot);

            const url = await getDownloadURL(storageRef);
            console.log('File available at', url);

            const newPin = {
                title,
                description,
                link,
                image: url,
                userId: session?.user?.email,
            };

            console.log(newPin);

            await setDoc(doc(db, 'pins', postId), newPin);
            toast.success('Pin Uploaded Successfully')
            setLoading(false)
            window.location.href = '/'
        } catch (error) {
            console.error('Error uploading file and setting pin data:', error);
        }
    };


    return (
        <div className='flex w-full h-[95vh] justify-center items-center'>
            <Toaster />
            <div className='bg-gray-200 rounded-2xl p-5 w-2/3 h-4/5 '>
                <div className='flex justify-end'>
                    <div onClick={HandlePinSave} className='bg-red-600 text-white px-4 py-2 rounded-xl cursor-pointer'>
                        {
                            loading ? (
                                <div
                                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                    role="status">
                                    <span
                                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                    >Loading...</span >
                                </div>

                            ) : 'Save Pin'
                        }
                    </div>
                </div>
                <div className=' h-full flex justify-evenly w-full'>
                    <div className='w-1/2'>
                        <Uploader file={image} setFile={setImage} />
                    </div>

                    <div className='flex flex-col gap-7 w-1/2'>
                        <div>
                            <input placeholder='Add Title' className='w-full bg-gray-200 border-b-[1px] font-semibold text-2xl border-gray-400 p-2 outline-none' onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>

                        <div>
                            {session && (
                                <div className='flex items-center gap-3'>
                                    {/*@ts-ignore */}
                                    <img src={session?.user?.image} alt="Profile" className='w-16 h-16 rounded-full' />
                                    <div>
                                        <div>{session?.user?.name}</div>
                                        <div>{session?.user?.email}</div>
                                    </div>

                                </div>
                            )}
                        </div>

                        <div className=''>
                            <div className='text-gray-500 text-sm '> Tell Everyone what this pin is about </div>
                            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full bg-gray-200 border-b-[1px] border-gray-400 p-2 outline-none' />
                        </div>

                        <div>
                            <div className='text-gray-500 text-sm '> Link to the Img </div>
                            <input onChange={(e) => setLink(e.target.value)} className='w-full bg-gray-200 border-b-[1px] border-gray-400 p-2 outline-none' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page