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

const STATES = [
    "Abia", "Abuja (FCT)", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi",];
const SelectState = (): React.JSX.Element => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");

    const handleConnect = () => {
        if (!selected) return alert("Please select a state first.");
        alert(`Connecting you with an installer in ${selected} via WhatsApp...`);
    };
    return (
        <section className='flex-col px-20 py-20 flex items-center justify-center'>
            <div className=' '>


                <div className='space-y-5 text-center mb-10'>

                    <h2 className='text-5xl font-bold '>Select Your State</h2>
                    <p className='text-2xl text-gray-600 leading-loose'>Select your location to get matched with vetted professionals nearby</p>
                </div>
                <div className="rounded-xl shadow-sm border-2 border-gray-200 hover:border-primary/30 transition-all p-10 space-y-4 w-280">
                    <label htmlFor="state" className=' text-2xl font-medium'>Where do you need an installer?</label>
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
                        <PopoverContent className="w-full p-0 rounded-xl shadow-lg" align="start">
                            <Command>
                                <CommandInput placeholder="Search state..." className="h-10 text-xl" />
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
                                                className="text-xl cursor-pointer"
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
                            <Button className='w-full text-xl bg-primary text-white py-8 rounded-xl font-medium hover:bg-primary-dark transition    ' onClick={handleConnect}>Connect with an installer</Button>
                            <p className='text-gray-600 text-xl'> Look out for a WhatsApp message from our installer team — usually within 24 hours</p>
                        </div>
                        : <p className='pt-20 text-center text-xl tracking-wide'>Please pick a state to continue.</p>}
                </div>
            </div>
        </section>
    )
}

export default SelectState