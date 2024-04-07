import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import app from '../utils/firbaseConfig';
import { ChevronDown } from 'lucide-react';
import { ExternalLink, Ellipsis, Upload } from 'lucide-react';
import Link from 'next/link';

const PinList: React.FC = () => {
    const { data: session } = useSession();
    const [pins, setPins] = useState<any[]>([]);
    const db = getFirestore(app);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [hoveredPin, setHoveredPin] = useState<any>(null);

    const getUserPins = async () => {
        setPins([])
        const q = query(collection(db, 'pins'), where("userId", '==', session?.user?.email));

        const querySnapshot = await getDocs(q);

        const pinsData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setPins(pinsData);
    };

    useEffect(() => {
        if (session) {
            getUserPins();
        }
    }, [session]);

    const handleMouseEnter = (pin: any) => {
        setHoveredPin(pin);
        setIsHovered(true);
    };

    console.log(pins)

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='columns-2 md:px-20 px-5 md:columns-3'>
            {pins.map(pin => (
                <div
                    className='relative flex p-2 rounded-lg'
                    onMouseEnter={() => handleMouseEnter(pin)}
                    onMouseLeave={handleMouseLeave}
                    key={pin.id}
                >
                    <div className='relative'>
                        <img src={pin.image} className='rounded-lg' width={400} height={400} alt={pin.title} />
                        {isHovered && hoveredPin && hoveredPin.id === pin.id && (
                            <div className='absolute inset-0 rounded-lg bg-black opacity-50'></div>
                        )}
                    </div>
                    {isHovered && hoveredPin && hoveredPin.id === pin.id && (
                        <div className='absolute rounded-lg p-2 flex flex-col justify-between h-full w-full'>
                            <div className=''>
                                <div className='font-medium text-white text-xl shadow-custom-1 flex items-center gap-1'> <span> {pin.title} </span> <ChevronDown /> </div>
                            </div>

                            <div className='pb-4 px-2 flex justify-between w-full bg-'>
                                <Link href={pin.link} target='_blank' className='bg-white px-3 py-2 rounded-full flex items-center gap-3'>
                                    <span className='text-sm'> {pin.link.slice(0, 15)} </span> <ExternalLink size={20} />
                                </Link>

                                <div className='flex py-2 px-4 gap-5'>
                                    <span className='bg-white text-black p-1 rounded-full cursor-pointer'>
                                        <Ellipsis size={20} />
                                    </span>
                                    <span className='bg-white text-black p-1 rounded-full cursor-pointer'>
                                        <Upload size={20} />
                                    </span>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>

    );
};

export default PinList;
