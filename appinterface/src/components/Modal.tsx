import { openModalForCreatingAlbum } from "@/Types/allTypes";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import cookies from 'js-cookie'
import { useState } from "react";

export default function Example({ open, setOpen, userid }: openModalForCreatingAlbum) {
    const [newAlbum, setNewAlbum] = useState({
        albumname: '',
        albumCover: ''
      })
      async function createAlbum(e: React.MouseEvent<HTMLFormElement>){
        
        const createNewAlbum = await fetch('http://localhost:5001/albums', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${cookies.get('jwtToken')}`
            },
            body: JSON.stringify({...newAlbum, userid})
        })
      }
  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          > <form onSubmit={createAlbum}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
             
                <div className="flex flex-col [&>*]:my-1 [&>*]:mx-1">
                <label htmlFor="albumname">Album Name</label>
                <input
                  className="border-black border-2 rounded-md p-1"
                  name="albumname"
                  onChange={(e) => {setNewAlbum({...newAlbum, albumname:e.target.value})}}
                  type="text"
                  required
                />
                <label htmlFor="photoCover">Album Photo Cover</label>
                <input
                  className="border-black border-2 rounded-md p-1"
                  name="photoCover"
                  onChange={(e) => {setNewAlbum({...newAlbum, albumCover:e.target.value})}}
                  type="text"
                  required
                />
                </div>
             
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Add Album
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setOpen(false)}
                data-autofocus
              >
                Cancel
              </button>
          
            </div>
          </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
