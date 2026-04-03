import Link from "next/link";

export default function Home() {
  return (
    <div>


      <section className="bg-yellow-200 h-screen relative  w-full
    ">
        {/* upload video to cloudinary later */}
        <video autoPlay loop muted playsInline preload="metadata" className="inset-0 w-full h-full object-cover" poster="/images/hero-image.jpg">
          <source src="/images/labs.mp4" type="video/mp4" />Your browser does not support the video tag.
        </video>
        {/* texts */}

        <div className="absolute top-0 h-[inherit] flex items-center w-full bg-[rgba(0,0,0,0.4)]">
          <div className="content w-1/2  px-10 space-y-2">
            <h1 className="text-white font-montserrat text-9xl font-semibold">Power Your World. Protect Your Peace.</h1>
            <p className="text-white font-inter text-3xl">End blackouts and insecurity. Nationwide support, guaranteed.</p>
            <Link href={""}>Get a free quote</Link>
          </div>

        </div>
      </section>

      {/*  */}
      <div
      className="jonze h-[400]"></div>
    </div>
  );
}