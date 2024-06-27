"use client";
import { GrAdd } from "react-icons/gr";
import { useEffect, useState } from "react";
import Modal from './Modal'
export default function CreateAlbum() {
  const [open, setOpen] = useState<boolean|undefined>(false)
  const [userid, setUserid] = useState<string|null>('')
  useEffect(() => {
    const userdata = localStorage.getItem('userData');
    if(userdata) setUserid(JSON.parse(userdata).id)
  }, [])
  return (
    <div className="flex absolute top-56 right-56 text-2xl items-center">
   
    <button onClick={() => setOpen(true)} className="border-black border-2 rounded-xl p-5 px-7 ">
      <GrAdd />
      <Modal open={open} setOpen={setOpen} userid={userid}/>
    </button>
    <h3 className="ml-3">Create Album</h3>
    </div>
  );
}
