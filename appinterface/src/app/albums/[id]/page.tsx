import { cookies } from "next/headers";
import AlbumImage from "@/components/AlbumImage";

export default async function Page({ params }: { params: { id: string } }) {
  const token = cookies().get("jwtToken");
  if (!token) throw new Error("No token detected, no permission");
  const albumImageFetch = await fetch(
    `http://localhost:5001/albums/${params.id}/images`,
    {
      headers: {
        content: "application/json",
        Authorization: `Bearer: ${token.value}`,
      },
    }
  );
  const albumImages = await albumImageFetch.json();
   

  return(
    <AlbumImage albumimage={albumImages} />
  ) ;
}
