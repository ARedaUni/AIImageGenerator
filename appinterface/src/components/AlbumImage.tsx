"use client";
import { HiOutlineArchive } from "react-icons/hi";
import { GlareCard } from "./Glarecard";
import Image from "next/image";
import cookies from "js-cookie";
import { useEffect } from "react";
export default function AlbumImage({
  albumimage,
}: {
  albumimage: {
    id: bigint;
    description: string;
    name: string;
    album_id: number;
  }[];
}) {
  let token: undefined | string;
  useEffect(() => {
    token = cookies.get("jwtToken");
  }, []);
  async function deleteImage(
    e: React.MouseEvent<HTMLButtonElement>,
    id: bigint,
    album_id: number
  ) {
    e.preventDefault();
    const deletealbum = await fetch(
      `http://localhost:5001/albums/${album_id}/images`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ imageid: id }),
      }
    );
  }

  return (
    <div className="flex justify-center items-center mt-96">
      <div className="rainbow text-wrap grid grid-cols-2 xl:grid-cols-3 gap-7 ">
        {albumimage.map((item) => (
          <div className="rainbow flex flex-col justify-center items-center">
            <GlareCard>
              <Image
                alt="astro"
                className="h-full"
                width={600}
                height={800}
                src="https://th.bing.com/th/id/OIP.f741wVXT52C1j9oAUa1BTQHaFj?w=245&h=183&c=7&r=0&o=5&pid=1.7"
              />
            </GlareCard>
            <div className="flex justify-between items-center">
              <h3 className=" text-xl max-w-64  ">{item.description}</h3>
              <button onClick={(e) => deleteImage(e, item.id, item.album_id)} className="">
                <HiOutlineArchive size={36} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
