import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-yellow-200 h-screen flex items-center justify-center
    ">
      {/* <Image preload={true}/> */}
      <h1>Home</h1>
      {/* <video autoPlay="" loop="" playsInline="" preload="metadata" className="absolute inset-0 w-full h-full object-cover" poster="/assets/images/landing_page_hero1.png">
      <source src="https://res.cloudinary.com/dhnd4s77j/video/upload/v1770742914/VN20260210_130411_1_fjd1zv.mp4" type="video/mp4"/>Your browser does not support the video tag.
      
      </video> */}
    </div>
  );
}
