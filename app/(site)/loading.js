import Image from "next/image";

export default function Loading() {
  return (
    <div>
      <Image src={"/loading.gif"}></Image>
    </div>
  );
}
