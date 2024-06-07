'use client';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, doc, updateDoc, increment, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { ChevronDown, ExternalLink, Ellipsis, Upload, Heart } from "lucide-react";
import Link from "next/link";
import app from "./utils/firbaseConfig";
import { useSession } from 'next-auth/react';
import toast from "react-hot-toast";

interface Pin {
  id: string;
  image: string;
  title: string;
  link: string;
  likes: number;
}

export default function Home() {

  const [pins, setPins] = useState<Pin[]>([]);
  const { data: session, status } = useSession();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredPin, setHoveredPin] = useState<Pin | null>(null);
  const [likedPins, setLikedPins] = useState<string[]>([]);
  const db = getFirestore(app);

  const userId = session?.user?.email;

  const getPins = async () => {
    const pinsCollectionRef = collection(db, "pins");
    const querySnapshot = await getDocs(pinsCollectionRef);
    const pinsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Pin[];
    setPins(pinsData);
    if (userId) {
      getLikedPins(pinsData);
    }
  };

  const getLikedPins = async (pins: Pin[]) => {
    const likedPins: string[] = [];
    for (const pin of pins) {
      const likeDocRef = doc(db, `pins/${pin.id}/likes/${userId}`);
      const likeDoc = await getDoc(likeDocRef);
      if (likeDoc.exists()) {
        likedPins.push(pin.id);
      }
    }
    setLikedPins(likedPins);
  };

  const handleLikeClick = async (pinId: string) => {
    if (!userId) {
      toast.error('You must be logged in to like pins');
      return;
    }

    const pinDocRef = doc(db, "pins", pinId);
    const likeDocRef = doc(db, `pins/${pinId}/likes/${userId}`);
    const likeDoc = await getDoc(likeDocRef);

    if (!likeDoc.exists()) {
      await setDoc(likeDocRef, { userId });
      await updateDoc(pinDocRef, { likes: increment(1) });
      setLikedPins([...likedPins, pinId]);
      toast.success('Liked Pin');
    } else {
      await deleteDoc(likeDocRef);
      await updateDoc(pinDocRef, { likes: increment(-1) });
      setLikedPins(likedPins.filter(id => id !== pinId));
      toast.success('Unliked Pin');
    }
    
    getPins();
  };

  useEffect(() => {
    getPins();
    // if (status !== 'authenticated') {
    //   toast.error('You must be logged in to interact with pins');
    // }
  }, [status]);

  const handleMouseEnter = (pin: Pin) => {
    setHoveredPin(pin);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="columns-2 md:px-20 px-5 md:columns-3">
      {pins.map((pin) => (
        <div
          className="relative flex p-2 rounded-lg"
          onMouseEnter={() => handleMouseEnter(pin)}
          onMouseLeave={handleMouseLeave}
          key={pin.id}
        >
          <div className="relative">
            <img
              src={pin.image}
              className="rounded-lg"
              width={400}
              height={400}
              alt={pin.title}
            />
            {isHovered && hoveredPin && hoveredPin.id === pin.id && (
              <div className="absolute inset-0 rounded-lg bg-black opacity-50"></div>
            )}
          </div>
          {isHovered && hoveredPin && hoveredPin.id === pin.id && (
            <div className="absolute rounded-lg p-2 flex flex-col justify-between h-full w-full">
              <div>
                <div className="font-medium text-white text-xl shadow-custom-1 flex items-center gap-1">
                  <span className="sm:text-base text-sm"> {pin.title} </span> <ChevronDown />
                </div>
              </div>
              <div className="pb-4 px-2 flex justify-between w-full items-center">
                <Link
                  href={pin.link}
                  target="_blank"
                  className="bg-white px-3 py-2 rounded-full flex items-center gap-3"
                >
                  <span className="sm:text-sm text-xs"> Link </span>
                  <ExternalLink size={20} />
                </Link>
                <div className="flex sm:py-2 py-1 px-1 sm:px-4 gap-5 items-center">
                  <span
                    className={`rounded-full cursor-pointer bg-white text-black p-1 ${likedPins.includes(pin.id) ? 'bg-red-500' : 'text-white'}`}
                    onClick={() => handleLikeClick(pin.id)}
                  >
                    <Heart size={20} className={`${likedPins.includes(pin.id) ? 'text-white' : 'text-black'}`} />
                  </span>
                  <span className="text-white">{pin.likes}</span>
                  <span className="bg-white text-black p-1 rounded-full cursor-pointer">
                    <Ellipsis size={20} />
                  </span>
                  <span className="bg-white text-black p-1 rounded-full cursor-pointer">
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
}
