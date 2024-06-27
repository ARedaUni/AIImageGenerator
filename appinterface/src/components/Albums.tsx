'use client'
import Image from "next/image"
import { HiOutlineArchive } from "react-icons/hi";
import { album } from "@/Types/allTypes";
import { useEffect } from "react";
import cookies from 'js-cookie'
export default function Albums({album}: {album:album}) {
    let token: undefined | string;
    useEffect(() => {
        token = cookies.get('jwtToken');
    }, [])

    async function deleteAlbum(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const deletealbum = await fetch('http://localhost:5001/albums', {
            method:'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({albumid:album.id, userid: album.user_id})
        })
    }

    return(
        <div className="max-w-72 md:max-w-96  border border-black rounded-2xl  ">
            <Image alt="album image cover" src="https://th.bing.com/th/id/OIP.5FpuABrbRobubIqW0qgQcgHaEJ?w=318&h=180&c=7&r=0&o=5&pid=1.7" width={400} height={400} className="rounded-t-2xl"/>
            <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl p-3">{album.albumname}</h2>
            <button onClick={deleteAlbum}>
            <HiOutlineArchive size={48} />
            </button>
            </div>
        </div>
    )
}