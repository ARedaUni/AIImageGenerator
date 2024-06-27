import { Dispatch, SetStateAction } from "react"

export type album = {id:number, user_id:string, albumname:string}
export type openModalForCreatingAlbum = {open: boolean|undefined, setOpen: Dispatch<SetStateAction<boolean|undefined>>, userid:string|null}