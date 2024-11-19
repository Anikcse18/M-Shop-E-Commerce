import Image from "next/image";

export default function Loading() {
    return <div>
       <Image src={"/loader.gif"}></Image>
    </div>
}