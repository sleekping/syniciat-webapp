import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-yellow-200 h-screen relative flex items-center justify-center w-full
    ">
      {/* upload video to cloudinary later */}
      <video autoPlay loop muted playsInline preload="metadata" className="inset-0 w-full h-full object-cover" poster="/images/hero-image.jpg">
        <source src="/images/labs.mp4" type="video/mp4" />Your browser does not support the video tag.
      </video>
      {/* texts */}

      <div className="absolute space-y-2 w-200">
        <h1 className="text-white font-montserrat text-8xl font-medium">Power Your World. Protect Your Peace.</h1>
        <p className="text-white font-inter text-3xl">End blackouts and insecurity. Nationwide support, guaranteed.</p>
      </div>
    </div>
  );
}