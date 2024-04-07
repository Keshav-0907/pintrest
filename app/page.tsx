'use client';
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Image from "next/image";
import { ChevronDown, ExternalLink, Ellipsis, Upload } from "lucide-react";
import Link from "next/link";
import app from "./utils/firbaseConfig";

interface Pin {
  id: string;
  image: string;
  title: string;
  link: string;
}


export default function Home() {
  const [pins, setPins] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredPin, setHoveredPin] = useState(null);
  const db = getFirestore(app);

  const getPins = async () => {
    const pinsCollectionRef = collection(db, "pins");
    const querySnapshot = await getDocs(pinsCollectionRef);
    const pinsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPins(pinsData);
  };

  useEffect(() => {
    getPins();
  }, []);

  const handleMouseEnter = (pin:any) => {
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
            //@ts-ignore
              src={pin.image}
              className="rounded-lg"
              width={400}
              height={400}
              //@ts-ignore
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
                  {" "}
                  <span className="sm:text-base text-sm"> {pin.title} </span> <ChevronDown />{" "}
                </div>
              </div>

              <div className="pb-4 px-2 flex justify-between w-full bg-">
                <Link
                  href={pin.link}
                  target="_blank"
                  className="bg-white px-3 py-2 rounded-full flex items-center gap-3"
                >
                  <span className="sm:text-sm text-xs"> {pin.link.slice(0, 10)} </span>{" "}
                  <ExternalLink size={20} />
                </Link>

                {/* <div className="flex sm:py-2 py-1 px-1 sm:px-4 gap-5">
                  <span className="bg-white text-black p-1 rounded-full cursor-pointer">
                    <Ellipsis size={20} />
                  </span>
                  <span className="bg-white text-black p-1 rounded-full cursor-pointer">
                    <Upload size={20} />
                  </span>
                </div> */}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
