import { images } from "@/data";
import Image from "next/image";

export default function ImageGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-lg flex justify-center items-center ${
            index === 0 ? "row-span-2 col-span-2 md:col-span-1" : ""
          }`}
        >
          <div className="relative w-[150px] md:w-[180px] lg:w-[200px]">
            <Image
              src={image}
              alt={`grid-img-${index}`}
              width={150}
              height={150}
              className="rounded-lg object-cover w-full transition-transform duration-500 ease-in-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md opacity-0 hover:opacity-100 rounded-lg transition-opacity duration-300 ease-in-out flex items-center justify-center"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
