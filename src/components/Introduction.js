'use client';

import Image from "next/image";

const Introduction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center z-20 w-full">
      <Image
        src="/intro-1.png"
        alt="intro image"
        width={300}
        height={300}
      />
      <div className="text-center md:text-left">
        <h1 className="text-5xl text-white font-bold">Desarrolando</h1>
        <p className="text-white">desde la etica y la innovacion</p>
      </div>
    </div>
  );
}

export default Introduction;
