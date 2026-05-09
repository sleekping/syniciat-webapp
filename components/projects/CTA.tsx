import Link from "next/link";

export default function CTA() {
    return (
        <section 
        className="px-20 py-20 max-mdPhone:px-10 max-mdPhone:text-center bg-gray-50 flex justify-center items-center flex-col gap-3"
        aria-labelledby="cta-heading"
      >
        <h2 id="cta-heading" className="text-4xl font-bold">
          Our Work Speaks
        </h2>
        <p className="text-2xl font-medium text-gray-600 mb-8">
          Real installations. Real impact. Let&apos;s build something great together.
        </p>
        <Link 
          href="/contact-us"
          className="w-140 max-phone:w-full bg-primary text-white py-5 rounded-lg font-medium hover:bg-primary-dark transition ease-in-out duration-300 flex justify-center items-center gap-2"
          aria-label="Contact us to discuss your project"
        >
          Let&apos;s Talk
        </Link>
      </section>
    )
  }