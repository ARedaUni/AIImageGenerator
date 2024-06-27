import { cookies } from "next/headers";
import Albums from "@/components/Albums";
import CreateAlbum from "@/components/CreateAlbum";
export default async function Page() {
  const authToken = cookies().get("jwtToken");
  if (!authToken) throw new Error("token not auht");
  const albums = await fetch("http://localhost:5001/albums", {
    method: "GET",
    headers: { Authorization: `Bearer ${authToken.value}` },
  });
  const albumList = await albums.json();
  return (
    <div>
      <CreateAlbum />
      <div className="min-h-screen flex justify-center items-center">
        <div className="grid grid-cols-3 gap-5">
          {albumList.map(
            (item: { id: number; user_id: string; albumname: string }) => (
              <Albums key={item.id} album={item} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
