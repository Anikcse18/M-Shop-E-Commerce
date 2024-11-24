import Image from "next/image";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        src="/loading.gif" // Path to the image file (can be a URL or local path)
        alt="Description of image"
        width={500} // Width of the image
        height={500} // Height of the image
      />
    </div>
  );
}
