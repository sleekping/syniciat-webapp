"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,
} from "@/components/ui/command";
import { IoMdCheckmark } from "react-icons/io";
import {
    Popover, PopoverContent, PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { LuChevronDown } from 'react-icons/lu';
import { PiSparkle } from "react-icons/pi"; import { HiOutlineBolt, HiOutlineCheckBadge } from "react-icons/hi2";
import Link from 'next/link';
const STATES = [
    "Abia", "Abuja (FCT)", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi",];

const badges = [
    {
        label: "Certified",
        sub: "Elite professionals",
        icon: HiOutlineCheckBadge,
    },
    {
        label: "Exquisite",
        sub: "Uncompromising quality",
        icon: PiSparkle,
    },
    {
        label: "Immediate",
        sub: "Priority response",
        icon: HiOutlineBolt,
    },
];

const SelectState = (): React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");


    return (
        <section className='flex-col  max-sm:px-10 px-20 py-20 flex items-center justify-center'>
            <div className='space-y-8 max-w-280 max-tab:max-w-full'>


                <div className='space-y-5 text-center mb-10'>

                    <h2 className='text-5xl font-bold '>Select Your State</h2>
                    <p className='text-2xl text-gray-600 leading-loose tracking-wide max-tab:text-xl    '>Select your location to get matched with vetted professionals nearby</p>
                </div>
                <div className="rounded-xl shadow-sm border-2 border-gray-200 hover:border-primary/30 transition-all p-10  max-sm:px-5 space-y-4">
                    <label htmlFor="state" className=' font-poppins text-2xl font-medium'>Where do you need an installer?</label>
                    {/* //select */}

                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-full justify-between rounded-xl border-gray-200 px-4 py-3.5 h-auto text-xl font-medium text-gray-800 hover:bg-gray-50 mt-4"
                            >
                                {selected || "Select a state..."}
                                <LuChevronDown className="ml-2 shrink-0 text-gray-500" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="p-0 rounded-xl shadow-lg"
                            align="start"
                            style={{ width: "var(--radix-popover-trigger-width)" }}
                        >
                            <Command>
                                <CommandInput placeholder="Search state..."
                                    className='text-xl'
                                />
                                <CommandList>
                                    <CommandEmpty>No state found.</CommandEmpty>
                                    <CommandGroup>
                                        {STATES.map((state) => (
                                            <CommandItem
                                                key={state}
                                                value={state}
                                                onSelect={(val) => {
                                                    setSelected(val === selected ? "" : val);
                                                    setOpen(false);
                                                }}
                                                className="text-xl tracking-wide font-poppins cursor-pointer"
                                            >
                                                <IoMdCheckmark
                                                    className={cn(
                                                        "mr-2 h-4 w-4 text-primary",
                                                        selected === state ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                {state}
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    
                    {selected ?
                        <div className='space-y-5'>
                            <Link target='_blank' href={`https://wa.me/2348166823498?text=${encodeURIComponent(`Hello, I would like to connect with a verified installer in ${selected}.Please guide me on the next steps.`)}`} className='w-full text-xl bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-dark transition  block text-center  max-phone:text-lg'>Connect with an installer in {selected}</Link>
                            <p className='text-gray-600 text-xl text-center max-phone:text-lg'> Look out for a WhatsApp message from our installer team — usually within 24 hours</p>
                        </div>
                        : <p className='pt-20 text-center text-xl tracking-wide'>Please pick a state to continue.</p>}
                </div>


                <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4 '>
                    {
                        badges.map((v, i) => (
                            <article className="bg-white flex-1 rounded-2xl border-primary/20 border
                shadow-sm  hover:border-primary/50 transition-all ease-in-out duration-500 hover:shadow-xl group px-10 py-10 max-mdPhone:px-6 place-items-center" key={i}>
                                <div className="bg-primary/10 group-hover:bg-primary transition-all ease-in-out duration-300 w-16 h-16 rounded-full text-center flex items-center justify-center mb-5" aria-hidden="true">
                                    {<v.icon className='text-primary group-hover:text-white' size={"2rem"} />}
                                </div>
                                <p className='font-semibold text-2xl'>{v.label}</p>
                                <p className='text-gray-600 text-xl'>{v.sub}</p>
                            </article>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default SelectState