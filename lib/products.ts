export type Product = {
    slug: string;
    category: "solar" | "security";
    title: string;
    eyebrow: string;
    summary: string;
    description: string;
    image: string;
    benefits: string[];
};

export const products: Product[] = [
    {
        slug: "solar-panels",
        category: "solar",
        title: "Solar Panels",
        eyebrow: "Solar energy",
        summary: "Turn abundant Nigerian sunshine into dependable, lower-cost power.",
        description: "We specify and install high-performance solar panels that are sized around your energy needs, roof, and budget. Every system is designed for steady output and long-term value.",
        image: "/images/hero-image.jpg",
        benefits: ["Custom system sizing", "High-efficiency modules", "Professional installation", "Warranty-backed support"],
    },
    {
        slug: "inverters",
        category: "solar",
        title: "Inverters",
        eyebrow: "Solar energy",
        summary: "Keep essential appliances running through outages and unstable grid supply.",
        description: "Our inverter systems intelligently convert and manage stored solar energy, giving homes and businesses clean, quiet backup power with the capacity to grow.",
        image: "/images/WhatsApp Image 2026-03-27 at 3.12.45 PM.jpeg",
        benefits: ["Seamless power changeover", "Quiet, efficient operation", "Expandable system design", "Expert commissioning"],
    },
    {
        slug: "batteries",
        category: "solar",
        title: "Solar Batteries",
        eyebrow: "Solar energy",
        summary: "Store the power you make and use it when you need it most.",
        description: "We pair reliable battery storage with the right inverter and solar array, helping you reduce generator use and maintain power after sunset or during outages.",
        image: "/images/WhatsApp Image 2026-03-27 at 3.14.08 PM.jpeg",
        benefits: ["Reliable energy storage", "Long service life", "Battery health monitoring", "Right-sized capacity"],
    },
    {
        slug: "charge-controllers",
        category: "solar",
        title: "Charge Controllers",
        eyebrow: "Solar energy",
        summary: "Protect your batteries and get more from every ray of sunlight.",
        description: "A properly selected charge controller keeps solar energy flowing safely into your batteries while preventing overcharging, deep discharge, and avoidable system wear.",
        image: "/images/WhatsApp Image 2026-03-27 at 3.14.09 PM.jpeg",
        benefits: ["Safe battery charging", "Improved system efficiency", "Clear performance visibility", "Compatible with new builds"],
    },
    {
        slug: "solar-street-lights",
        category: "solar",
        title: "Solar Street Lights",
        eyebrow: "Solar energy",
        summary: "Create safer, brighter streets without extending the grid.",
        description: "Our solar street lighting solutions provide dependable illumination for estates, compounds, roads, and community spaces with low running costs and straightforward maintenance.",
        image: "/images/WhatsApp Image 2026-03-27 at 3.15.43 PM.jpeg",
        benefits: ["Independent off-grid operation", "Automatic dusk-to-dawn lighting", "Durable outdoor construction", "Lower infrastructure cost"],
    },
    {
        slug: "cctv-systems",
        category: "security",
        title: "CCTV Systems",
        eyebrow: "Security solutions",
        summary: "See what matters, wherever you are, with practical surveillance systems.",
        description: "We design CCTV systems around the places and moments you need to protect, from clear day-and-night coverage to remote monitoring for homes, offices, and sites.",
        image: "/images/cctv.jpg",
        benefits: ["Clear day-and-night footage", "Remote viewing options", "Strategic camera placement", "Professional setup and support"],
    },
    {
        slug: "house-wiring",
        category: "security",
        title: "House Wiring",
        eyebrow: "Security solutions",
        summary: "Build safer, cleaner electrical systems that are ready for modern living.",
        description: "From new builds to careful rewiring, our technicians deliver organized electrical installations with safety, access, and future expansion in mind.",
        image: "/images/about_us.jpeg",
        benefits: ["Safety-first installation", "Organized cable routing", "New-build and retrofit work", "Testing and handover"],
    },
    {
        slug: "electric-fencing",
        category: "security",
        title: "Electric Fencing",
        eyebrow: "Security solutions",
        summary: "Add a visible, intelligent perimeter layer around the places you value.",
        description: "Our electric fencing systems are planned around your perimeter and connected to practical security controls, helping deter intrusion while keeping monitoring simple.",
        image: "/images/project.jpg",
        benefits: ["Perimeter-focused design", "Visible deterrence", "Alarm integration options", "Routine support available"],
    },
];

export const getProduct = (category: string, slug: string) =>
    products.find((product) => product.category === category && product.slug === slug);
