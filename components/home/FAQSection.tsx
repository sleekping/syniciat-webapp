import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: 'What services does Syniciat offer?',
        answer: 'We provide solar energy systems, backup power, CCTV and access control, GPS tracking, and other smart technology solutions. Our team can help you choose, install, configure, and support the right system for your home, office, business, or vehicle.',
    },
    {
        question: 'Can you design a system for my needs?',
        answer: 'Yes. We assess your energy usage, security concerns, property, budget, and future plans before recommending a solution. This lets us size the system properly instead of relying on a one-size-fits-all package.',
    },
    {
        question: 'How does a solar system work?',
        answer: 'Solar panels convert sunlight into electricity, while an inverter makes that electricity usable by your appliances. Depending on your setup, batteries can store excess energy for later use, helping you stay powered during outages or at night.',
    },
    {
        question: 'Will solar power work during blackouts?',
        answer: 'A properly designed system with battery storage can keep selected appliances or your entire property running during a blackout. The exact runtime depends on your battery capacity, the appliances connected, and how much power you use.',
    },
    {
        question: 'How long does installation take?',
        answer: 'Installation time depends on the size and complexity of the project. A straightforward residential system may be completed quickly, while larger commercial, security, or integrated projects require more preparation, configuration, and testing.',
    },
    {
        question: 'Do you install security cameras?',
        answer: 'Yes. We install and configure CCTV systems for homes, offices, shops, estates, and other facilities. We can help with camera placement, remote viewing, recording storage, motion detection, and access to your system from a mobile device.',
    },
    {
        question: 'Can I track my vehicle or assets?',
        answer: 'Our GPS tracking solutions provide location visibility and useful movement information for vehicles and other assets. We help you select the right device and set up access so you can monitor what matters from a convenient dashboard or mobile device.',
    },
    {
        question: 'How much will my project cost?',
        answer: 'The cost depends on the equipment, capacity, installation requirements, and level of support your project needs. Contact us for a consultation and a clear quote based on your actual requirements rather than an unsuitable generic estimate.',
    },
    {
        question: 'Do you provide maintenance and support?',
        answer: 'Yes. We provide guidance and ongoing support to help your system perform reliably. Depending on the solution, this can include inspections, troubleshooting, system adjustments, software support, and recommendations for future upgrades.',
    },
    {
        question: 'How do I get started?',
        answer: 'Start by contacting us with a few details about your home, business, vehicle, or project. We will discuss your goals, answer your questions, recommend the next step, and arrange a consultation or site assessment when needed.',
    },
]

const FAQSection = (): React.JSX.Element => {
    return (
        <section className="w-full bg-gray-50 px-8 py-24 max-tab:px-10 max-mdPhone:px-6" aria-labelledby="faq-heading">
            <div className="mx-auto w-full max-w-560 px-6 lg:px-12">
                <div className="mb-16 text-center place-items-center">
                    <p className="text-2xl font-semibold uppercase tracking-wide text-primary">FAQs</p>
                    <h2 id="faq-heading" className="mt-3 text-5xl mb-6.5 font-bold max-mdPhone:text-4xl">Answers before you get started.</h2>
                    <div className="w-35 h-1.5 bg-primary rounded-full mb-8"></div>
                    <p className="mx-auto mt-8 max-w-6xl text-2xl leading-relaxed text-gray-600">Find quick answers about our energy, security, and tracking solutions. We are also happy to talk through the details of your project.</p>
                </div>

                <Accordion type="single" collapsible defaultValue="item-0" className="w-full gap-3">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={faq.question} className="w-full min-w-0 rounded-xl border border-gray-200 bg-white px-6 shadow-sm transition-colors hover:border-primary/40 max-mdPhone:px-4">
                            <AccordionTrigger className="w-full min-w-0 gap-6 py-6 text-left text-xl font-semibold hover:no-underline max-mdPhone:text-lg">
                                <span className="min-w-0 flex-1">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="w-full min-w-0">
                                <p className="max-w-4xl text-lg leading-relaxed text-gray-600">{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default FAQSection