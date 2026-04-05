import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
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

        <div className="absolute top-0 h-[inherit] flex items-center w-full bg-[rgba(0,0,0,0.6)]">
          <div className="content w-1/2  px-10 space-y-5">
            <h1 className="text-white text-8xl font-semibold">Power Your World. Protect Your Peace.</h1>
            <p className="text-white font-maven text-4xl font-medium">Say goodbye to blackouts and insecurity with reliable energy and nationwide support you can trust.</p>
            <Link href={""} className="bg-primary text-2xl text-white px-20 py-6 rounded-xl inline-flex gap-3 items-center">Get a free quote <BsArrowRight  className="font-semibold text-3xl"/></Link>
          </div>

        </div>
      </section>

    </div>
  );
}