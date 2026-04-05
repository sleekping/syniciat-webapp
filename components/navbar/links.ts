type NavLinks = (
    | {
        title: string;
        href: string;
    }
    | {
        title: string;
        type: "product"
        dropdownItem: {
            heading: string;
            product: {
                href: string;
                title: string;
            }[];
        }[];
    }

    | {
        title: string;
        type: "project",
        dropdownData: {
            heading: string;
            subHeading: string;
            projects: {
                title: string;
                image: string;
            }[];
        };

    }
)[];
const Links: NavLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about-us" },
    {

        title: "Products", type: "product", dropdownItem: [

            {
                heading: "Solar Products", product: [
                    { title: "Solar Panels", href: "/products/solar/solar-panels" },
                    { title: "Inverters", href: "/products/solar/inverters" },
                    { title: "Batteries", href: "/products/solar/batteries" },
                    { title: "Charge Controllers", href: "/products/solar/charge-controllers" },
                    { title: "Solar Street Lights", href: "/products/solar/solar-street-lights" },
                ],
            },
            {
                heading: "Security Solutions", product: [
                    { title: "CCTV Systems", href: "/products/security/cctv-systems" },
                    { title: "House Wiring", href: "/products/security/house-wiring" },
                    { title: "Electric Fencing", href: "/products/security/electric-fencing" },
                ]
            }

        ]
    },
    { title: "Find Installers", href: "/find-installers" },

    {
        title: "Projects", type: "project",
        dropdownData: {
            heading: "Trusted Across Cities",
            subHeading: "We've delivered successful solar and electrical projects in major cities.",
            projects: [
                { title: "Lagos", image: "/images/lagos.png" },
                { title: "Abuja", image: "/images/benin.png" },
                { title: "Benin", image: "/images/benin.png" },
            ]

        }
    }, { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact-us" },
]
export default Links;