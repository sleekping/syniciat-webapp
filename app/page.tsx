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
          <div className="content px-22 space-y-5 max-tab:px-10 max-mdLap:px-18 max-[600px]:px-8">
            <h1 className="text-white leading-[1.2] text-8xl font-bold w-7/12  max-[1200px]:w-2/3 max-mdLap:text-7xl max-mdLap:w-3/4 max-tab:text-6xl max-[600px]:w-full">
              {/* Uninterrupted Power Complete Peace of Mind */}
              Uninterrupted <span className="text-secondary">
                Power Total Peace
              </span>  of Mind

            </h1>
            <p className="text-white font-maven font-medium text-3xl leading-relaxed w-1/2 max-mdLap:w-2/3 max-tab:w-3/4 max-tab:text-2xl max-[600px]:w-full">Say goodbye to blackouts and insecurity with reliable energy and nationwide support you can trust.</p>
            <Link href={""} className="bg-primary text-2xl text-white px-20 py-6 rounded-xl inline-flex gap-3 items-center">Get a free quote <BsArrowRight className="font-semibold text-3xl" /></Link>
          </div>

        </div>
      </section>

    </div>
  );
}