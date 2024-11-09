import Image from 'next/image';
import React from 'react';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="border border-r-emerald-500 w-[300px] sm:w-[350px] mx-auto flex flex-col items-center">
      <div className="flex justify-center w-full h-auto overflow-hidden">
        <Image
          className="object-cover"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className="p-4 space-y-4 text-center">
        <div className="text-4xl font-light">{title}</div>
        <div>{desc}</div>
        <div className="flex justify-center space-x-2">
          {tags.map((el) => (
            <span className="bg-gray-200 px-2 py-1 rounded-full text-sm" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
