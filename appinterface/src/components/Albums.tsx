import Image from "next/image"

export default function Albums({albumname}: {albumname:string}) {


    return(
        <div className="max-w-72 md:max-w-96  border border-black rounded-2xl  ">
            <Image alt="album image cover" src="https://th.bing.com/th/id/OIP.5FpuABrbRobubIqW0qgQcgHaEJ?w=318&h=180&c=7&r=0&o=5&pid=1.7" width={400} height={400} className="rounded-t-2xl"/>
            <h2 className="text-2xl md:text-3xl p-3">{albumname}</h2>
        </div>
    )
}