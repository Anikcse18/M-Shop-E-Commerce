import Image from "next/image";

export default function Loading() {
  return (
    <div>
      <Image src={"/loader.gif"} width={300} height={300} alt="Loader" />
    </div>
  );
}
