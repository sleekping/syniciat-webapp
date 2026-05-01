import Link from 'next/link';
import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
const Contact = (): React.JSX.Element => {
    return (
        <section className='grid grid-cols-2 gap-20 max-lg:grid-cols-1 px-20 py-20  pb-16 max-sm:px-10'>
            <div className='space-y-8'>
                <div className='space-y-3'>
                    <p className='text-primary leading-loose  tracking-wide text-3xl font-semibold '>Feel free to contact us</p>
                    <h2 className='text-4xl font-semibold'>We’d Love to Hear From You</h2>
                </div>


                <form className="space-y-5 ">

                    {/* First Name */}
                    <div>
                        <label className="text-2xl text-gray-600">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-2xl px-3 py-5 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="text-2xl text-gray-600">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="w-full border rounded-2xl px-3 py-5 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Phone */}
                    <div className='space-y-2'>
                        <label className="text-2xl text-gray-600">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="w-full border rounded-2xl px-3 py-5 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Email */}
                    <div className='space-y-2'>
                        <label className="text-2xl text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border rounded-2xl px-3 py-5 outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Message */}
                    <div className='space-y-2'>
                        <label className="text-2xl text-gray-600">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            className="w-full border rounded-2xl px-3 py-4 outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-5 rounded-lg font-medium hover:bg-primary-dark transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <div className='space-y-10'>
                <div className="space-y-10">
                    <Link href={"mailto:info.Syniciat@gmail.com"} className='flex gap-4'>
                        <div className="bg-primary/10  w-20 h-20 rounded-full flex items-center justify-center" aria-hidden="true">
                            <CiMail className='text-primary' size={"25"} />
                        </div>
                        <div className="space-y-2">
                            <h3 className='text-2xl font-semibold'>info.syniciat@gmail.com</h3>
                            <p className='text-gray-600 text-xl'>Send a message</p>
                        </div>
                    </Link>


                    <div className='flex gap-4'>
                        <div className="bg-primary/10  w-20 h-20 rounded-full flex items-center justify-center" aria-hidden="true">
                            <LuPhone className='text-primary' size={"25"} />
                        </div>
                        <div className="space-y-2">
                            <h3 className='text-2xl font-semibold'>+234 816 682 3498</h3>
                            <p className='text-gray-600 text-xl'>Drop a call</p>
                        </div>
                    </div>

                    <div className='flex gap-4'>
                        <div className="bg-primary/10  w-20 h-20 rounded-full flex items-center justify-center" aria-hidden="true">
                            <IoLocationOutline className='text-primary' size={"25"} />
                        </div>
                        <div className="space-y-2">
                            <h3 className='text-2xl font-semibold'>2 Micheal Alade St, Ifako-Ijaiye, Lagos 101232, Lagos, Nigeria</h3>
                            <p className='text-gray-600 text-xl'>Office Address</p>
                        </div>
                    </div>
                </div>
                <iframe width="650" height="400" className='w-full h-150 rounded-xl' src="https://maps.google.com/maps?width=650&height=400&hl=en&q=2%20Micheal%20Alade%20St%2C%20Ifako-Ijaiye%2C%20Lagos%20101232%2C%20Lagos&t=&z=14&ie=UTF8&iwloc=B&output=embed" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact