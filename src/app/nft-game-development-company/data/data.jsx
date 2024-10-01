// Next
import Image from "next/image"

// Bannar Images
import BannerLogos from "media/services/bannerLogo.webp";
import BannerBg from "media/services/bgBanner.webp";

//========= CaseStudy Images
import slider1 from "media/newmobileapp/slider-2.png";
import slider2 from "media/newmobileapp/slider-3.png";
import slider3 from "media/newmobileapp/slider-5.png";
import slider4 from "media/newmobileapp/slider-4.png";
import slider5 from "media/newmobileapp/slider-1.png";

//========= WhyChoose Images
import { WhyChooseIcon01, WhyChooseIcon02, WhyChooseIcon03, WhyChooseIcon04 } from "@/src/app/app-constants"

//========= Process Images
import IMG from "media/services/process/tab01.webp"

//========= Technologies Images
import TechIcon01 from "media/services/tech/1.webp"
import TechIcon02 from "media/services/tech/2.webp"
import TechIcon03 from "media/services/tech/3.webp"
import TechIcon04 from "media/services/tech/4.webp"
import TechIcon05 from "media/services/tech/5.webp"
import TechIcon06 from "media/services/tech/6.webp"
import TechIcon07 from "media/services/tech/7.webp"
import TechIcon08 from "media/services/tech/8.webp"
import TechImg from "media/services/techImg.webp"

//========= Testimonial Images
import TestiImg1 from "media/services/reviwes/trustpilot.webp"
import TestiImg2 from "media/services/reviwes/clutch.webp"
import TestiImg3 from "media/services/reviwes/google.webp"
import KayleeSlone from "media/services/reviwes/KayleeSlone.webp"
import RyanJaden from "media/services/reviwes/RyanJaden.webp"
import Joseph from "media/services/reviwes/Joseph.webp"
import MauryoJones from "media/services/reviwes/MauryoJones.webp"
import KateBullock from "media/services/reviwes/KateBullock.webp"

//========= Risks Images
import RisksIMG01 from "media/services/customImg01.webp"
import RisksIMG02 from "media/services/customImg02.webp"

//========= Fueling Images
import FuelingImg from "media/services/cuttingEdge.webp"

//========= CtaEstimated Images
import CtaEstimatedImg from "media/services/ctaImg.webp"


//========= TechStack Images
import TAB1_1 from "media/services/tech/tab1/01.webp";
import TAB1_2 from "media/services/tech/tab1/02.webp";
import TAB1_3 from "media/services/tech/tab1/03.webp";
import TAB1_4 from "media/services/tech/tab1/04.webp";
import TAB2_1 from "media/services/tech/tab2/01.webp";
import TAB2_2 from "media/services/tech/tab2/02.webp";
import TAB2_3 from "media/services/tech/tab2/03.webp";
import TAB2_4 from "media/services/tech/tab2/04.webp";
import TAB3_1 from "media/services/tech/tab3/01.webp";
import TAB3_2 from "media/services/tech/tab3/02.webp";
import TAB3_3 from "media/services/tech/tab3/03.webp";
import TAB3_4 from "media/services/tech/tab3/04.webp";
import TAB4_1 from "media/services/tech/tab4/01.webp";
import TAB4_2 from "media/services/tech/tab4/02.webp";
import TAB4_3 from "media/services/tech/tab4/03.webp";
import TAB4_4 from "media/services/tech/tab4/04.webp";
import TAB5_1 from "media/services/tech/tab5/01.webp";
import TAB5_2 from "media/services/tech/tab5/02.webp";
import TAB5_3 from "media/services/tech/tab5/03.webp";
import TAB5_4 from "media/services/tech/tab5/04.webp";
import TAB6_1 from "media/services/tech/tab6/01.webp";
import TAB6_2 from "media/services/tech/tab6/02.webp";
import TAB6_3 from "media/services/tech/tab6/03.webp";
import TAB6_4 from "media/services/tech/tab6/04.webp";

//========= Industries Images

import { EcommerceSVG, EducationSVG, FintechSVG, HealthcareSVG, RealEstateSVG, RideHailingSVG, SocialSVG, TravelSVG } from "@/src/app/app-constants";
import Ecommerce from "media/services/industry/Ecommerce.webp";
import Fintech from "media/services/industry/Fintech.webp";
import Healthcare from "media/services/industry/Healthcare.webp";
import Education from "media/services/industry/Education.webp";
import SocialMarketing from "media/services/industry/SocialMarketing.webp";
import RealEstate from "media/services/industry/RealEstate.webp";
import RideHailing from "media/services/industry/RideHailing.webp";
import Travel from "media/services/industry/Travel.webp";

//========= Blogs Images
import BlogsIMG01 from "media/services/blogs/post-1.webp"
import BlogsIMG02 from "media/services/blogs/post-2.webp"
import BlogsIMG03 from "media/services/blogs/post-3.webp"


export const BannerData = {
    subtitle: "Quickly – Efficiently – Effortlessly",
    title: "Top Rated NFT Game Development Company",
    content: "It’s time to revolutionize the world of digital gaming with our 360 NFT game development solutions! We, as an NFT game development company, have built thrilling games using Blockchain technology. Engage and retain players with games that offer exciting stream monetization opportunities.",
    BannerLogos: BannerLogos.src,
    BannerBg: BannerBg.src,
    fromtitle: "Let’s Discuss Game Idea",
    fromtext: "Share your game objectives with our experts and create your custom game."
}

export const CuttingedgeContent = {
    title: "High-Performance NFT Game Development Services For Outstanding Player Engagement!",
    text: "Our team is a score of professional NFT game developers who have remarkably catered to the challenging scope of our NFT game development projects. Here are the services we offer:",
    subtext: "Estimate Your Game Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Full Cycle NFT <br />Game Development</>),
        txt: "Expect more as we offer full-cycle NFT game development support. Our team is well equipped with the latest blockchain tech stack to help you create blockbuster games in a variety of genres. ",
        links: "",
    },
    {
        title: (<>2D/3D NFT Art <br />Content Creation</>),
        txt: "Get NFT artwork that is simply stellar, and outperforms competition. As a top-tier NFT game development company, our 2D and 3D NFT designs remain 100% unique, winning you the spotlight among other game studios. ",
        links: "",
    },
    {
        title: (<>NFT Marketplace<br /> Development</>),
        txt: "Let’s create an NFT marketplace with your favorite CMS, and integrate crypto payment solutions of your choice. Use intuitive and responsive designs for NFT UI/UX, and get regular performance audits",
        links: "",
    },
    {
        title: (<>NFT Gaming<br />Platform Development</>),
        txt: "With our expert blockchain developers, you can create your own NFT gaming platform. Plus, you get end-to-end technical support. We also have a dedicated team to monitor platform health, and continuously enhance performance. ",
        links: "",
    },
    {
        title: (<>Integration Services<br />for NFT Games</>),
        txt: "NFT game development opens a whole plethora of exciting opportunities. Implement integrations that make NFT assets available for players across other NFT games, enabling you to retain satisfied and loyal gamers. ",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "Our Results-Driven NFT Game Development Portfolio!",
    text: "Drive business growth and enhance user engagement with our top-tier games! As a trusted NFT game development company, our portfolio reflects our commitment to delivering high-impact solutions and showcases the success of our clients.",
}

export const caseStudiesList = [
    {
        title: "The Practice Pen",
        description: "We designed Practice Pen as a skill development app that uses video-based learning and gamification. Users can upload practice videos, receive feedback, and compete in interactive challenges to win prizes, making learning fun and engaging.",
        sliderImages: [slider1],
    },
    {
        title: "Soul Scribe",
        description: "We created Soul Scribe as a social networking app that serves as a digital diary, allowing users to invite friends and family to contribute to an online journal. Featuring a freemium subscription model with a complimentary family room option.",
        sliderImages: [slider2],
    },
    {
        title: "Crave Cuisine",
        description: "We developed Crave Cuisine, a food delivery app that streamlines the process of selecting local eateries and placing orders. Enjoy convenient dining with a wide range of meal choices, all in one easy-to-use app.",
        sliderImages: [slider3],
    },
    {
        title: "Fitnow",
        description: "We developed Fitnow as a user-friendly fitness app that allows users to select workouts, set goals, and customize routines with expert guidance. With a simple interface, Fitnow makes tracking progress and achieving fitness goals easy.",
        sliderImages: [slider4],
    },
    {
        title: "Route Rover",
        description: "We created Route Rover, a navigation and route-planning app designed to optimize travel. Whether for daily commutes or road trips, users can discover efficient routes, avoid traffic, and explore new destinations with ease.",
        sliderImages: [slider5],
    }
];

export const AppIdeaContent = {
    title: "Enter into a New Era of Digital Gaming!",
    text: "BitsWits is here to revolutionize the world of gaming. Are you thrilled to make the leap with us?",
}

export const WhyChooseContent = {
    title: "Why Partner with BitsWits for Your Next Project?",
    text: "Along with creating exclusive NFTs, we offer full-time support. Here’s why you need to opt for our NFT game development services: "
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Niche-specific<br /> NFTs </>),
        description: "Our NFT game developers hone versatile skills in digital design and artwork. They can easily cater to a variety of niches. ",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Transparency <br />in work</>),
        description: "As a leading NFT game development company, we maintain full transparency in our costs, fostering trust within the gaming community.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>High Level <br /> of Security</>),
        description: "NFT platforms or marketplaces are based on a highly secured blockchain, leaving no room for threat or compromise. ",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Client-centric<br />approach </>),
        description: "We always take a client-centric approach and invite our clients to join the art team in the brainstorming phase.",
    }
];

export const ProcessContent = {
    title: "Performance-Focused NFT Game Development Process",
    text: "Our expert-vetted NFT game developers and UX team have a special brainstorming approach that leads us to stellar NFT game designs and deliver top-tier NFT game development services."
}

export const ProcessTabs = [
    {
        title: "Research",
        content: {
            heading: "Research & Concept Creation",
            description:
                "It all begins with your game concept. We put our heads together to figure out how the game concept would turn out to be an immersive experience for gamers, making them stick to the platform. To achieve this, we perform rigorous research on competition, design, aesthetics, tech stack, visual assets, blockchain processes, costs, financials, testing, and updates.  ",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Production",
        content: {
            heading: "Art & Design Production",
            description:
                "Moving on, we dive into the art and design phase. In this phase, our NFT designers will work up the most important document, the Game Design Document. This document holds comprehensive insight into game environments, assets, storyline, levels, awards, and tokens. Once we’re done with the design phase, it’s time to move on to the development side of the NFT project. ",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Creation",
        content: {
            heading: "Creation of Smart Contracts",
            description:
                "To tread on a path of secure and quality development, we initiate smart contracts. These contracts define and govern the trade of ownership of NFTs within a specific platform. These specially designed smart contracts ensure that game transactions are executed with a great level of safety, leaving no room for duplication, or tampering with original NFT artwork. ",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Integration",
        content: {
            heading: "Integration of Wallets",
            description:
                "The inclusion of crypto wallets in NFT game development creates new avenues of opportunity for players. It enables them to realize the value of NFT purchases and assets in terms of crypto. Our NFT project team is here to consult you on the best crypto wallets. Some of these options are MetaMask, AlphaWallet, Coinbase, and TrustWallet. ",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Development",
        content: {
            heading: "Development",
            description:
                "Our NFT development process is well-planned into two parts: Front-end, and Back-end development. Our expert NFT developers would work up the design, UX, mechanics, and gameplay experience. For the back end, we manage blockchain integration, token management, smart contracts, and security updates via a robust server infrastructure. ",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Testing",
        content: {
            heading: "Testing for Optimization",
            description:
                "After rigorous development, it’s finally time to experience the game for the user. We run a multitude of complex tests to point out potential issues about performance, NFT transactions, and even security. To achieve that the team may perform Alpha and Beta Testing, Smart Contract testing, and finally, some functional testing to give us the green signal for launch.",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Launch",
        content: {
            heading: "Launch for Success",
            description:
                "Now that we’ve progressed through conception, design, development, and testing, it’s time to finally make the leap, and launch your NFT game for success. You can go about this by connecting with NFT forums, and gaming communities. Run a PR campaign or optimize your game pages for search engines with SEO. It’s time to go out of your way to create some buzz. ",
            imgSrc: IMG.src,
        },
    },
];

export const TechnologiesContent = {
    title: "The Benefits When You Hire An NFT Game Development Company?",
    text: (<><p>BitsWits is an NFT game development company in the USA that tops everyone. We have an outstanding portfolio of versatile NFT gaming projects. Our flawless NFT game development has led us to partner with some of the top gaming studios, and creative teams around the world. Our NFT game developers have proven their worth by building seamless blockchain integrations for NFT games. </p>
    </>),

    TechImg: TechImg.src
}

export const TechnologiesIcons = [
    {
        title: "iOS",
        icons: TechIcon01.src,
    },
    {
        title: "Android",
        icons: TechIcon02.src,
    },
    {
        title: "Flutter",
        icons: TechIcon03.src,
    },
    {
        title: "Kotlin",
        icons: TechIcon04.src,
    },
    {
        title: "Objective C",
        icons: TechIcon05.src,
    },
    {
        title: "ionic",
        icons: TechIcon06.src,
    },
    {
        title: "React Native",
        icons: TechIcon07.src,
    },
    {
        title: "Swift",
        icons: TechIcon08.src,
    },
]

export const TestimonialContent = {
    title: "Client Testimonials",
    TestiImg1: TestiImg1.src,
    TestiImg2: TestiImg2.src,
    TestiImg3: TestiImg3.src
}

export const TestimonialSLIDES = [
    {
        txt: "The team’s deep understanding of our business’s nature was impressive. Their technical knowledge was evident in ensuring the app functioned smoothly.",
        name: "Joseph D’Amora",
        position: "Director of Inside Sales",
        img: Joseph,
    },
    {
        txt: "BitsWits transformed my vision into a stunning, user-friendly app. I couldn’t be happier with the result and their professionalism.",
        name: "Ryan Jaden",
        position: "Technical Team Lead",
        img: RyanJaden,
    },
    {
        txt: "I am thoroughly satisfied with the project management provided by BitsWits. Their attention to detail and seamless communication made the entire process stress-free and efficient!",
        name: "Kaylee Slone",
        position: "Digital Marketing Manager",
        img: KayleeSlone,
    }
    ,
    {
        txt: "Their tireless efforts in making the app not only responsive but also visually stunning were truly remarkable. BitsWits exceeded all our expectations!",
        name: "Mauryo Jones",
        position: "VP Safety, Health & Security",
        img: MauryoJones,
    },
    {
        txt: "They not only listened attentively to our needs but also provided valuable insights and suggestions. BitsWits truly understands how to turn ideas into successful apps!",
        name: "James Moss",
        position: "EVP Business Development",
        img: KateBullock,
    }
]

export const RisksContent = {
    title: (<>Give Players All <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> The Control They Crave With Our <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} /> In-Game NFT Assets!</>),
    text: "Enable NFT purchases and monetize gaming with BitsWits!"
}

export const OffersContent = {
    title: "Features of NFT Game Development",
    text: "At BitsWits, we believe that NFT holds astounding potential for growth. Entrepreneurs can unlock a new plethora of opportunities in the realm of gaming. Unlike traditional gaming, NFT gaming is meant to hand complete control to players via a secure blockchain network. ",
}

export const OffersTabs = [

    {
        title: "In-Game Asset Ownership",
        content: {
            heading: "In-Game Asset Ownership",
            description:
                "With a network of secure blockchains and a robust server, trading NFT assets has never been made easier. Gaming platforms that are built around the NFT gaming ecosystem will benefit from not just ownership, but also enjoy a profitable revenue stream by allowing trade, and creation of custom NFTs for all players. ",
        },
    },
    {
        title: "Scarce and Exclusive Collections",
        content: {
            heading: "Scarce and Exclusive Collections",
            description:
                "What’s even better with NFT game building is that all assets are fully custom and unique. Players would be thrilled to own assets that are rare and hold astounding value in the real world. Duplication fears are not a problem as each asset is owned, and secured via a robust blockchain network.",
        },
    },
    {
        title: "Cross-platform Interoperability",
        content: {
            heading: "Cross-platform Interoperability",
            description:
                "The utility of NFT itself is not just limited to one particular network of blockchain. But more importantly, NFT gaming platforms will support cross-platform interoperability, allowing transactions of assets across multiple blockchains. Hence, this ensures more efficient movement of digital assets in the marketplace. ",
        },
    },
    {
        title: "Play-to-Earn Opportunities",
        content: {
            heading: "Play-to-Earn Opportunities",
            description:
                "Unlike traditional gaming ecosystems, NFT gaming offers you more than just gaming for leisure time. You can entice more players to join the network with Play-to-earn (P2E opportunities). As players compete, they’ll be able to reap rewards in the shape of popular NFTs, cryptocurrency credits, exciting new unlocks, and much more.  ",
        },
    },
    {
        title: "Stream Monetization",
        content: {
            heading: "Stream Monetization",
            description:
                "NFT game development exposes business teams to multiple avenues for revenue and growth. Teams can expect to earn handsomely by monetizing the purchase and sale of NFT assets over the marketplace. Plus, with the influencer economy booming, there’s even more opportunity for collaborations and partnerships that unlock further new streams of revenue. ",
        },
    },

];

export const FuelingContent = {
    title: "Our Expertise in NFT Game Development Genres",
    text: "BitsWits is one of the best NFT game development companies that leverage blockchain technology to build NFT games for a wild variety of genres. ",
    subtitle: "Build Next-Gen NFT Games that Drive Player Engagement!",
    subtext: "Create engaging, player-driven experiences with unique digital ownership rewards.",
    FuelingImg: FuelingImg.src
}

export const FuelingList = [
    {
        title: "NFT P2E Game",
        text: "The most popular among our projects are the P2E games. These allow players to trade integrated NFTs, and monetize their gameplay. Players can earn crypto credits as well as exclusive NFT as rewards for their performance."
    },
    {
        title: "NFT PvP Game",
        text: "We add more intrigue to the competition by introducing multiplayer combats. Players compete against each other on the basis of skill sets, skins, and special weapons which become available on the use of player-owned NFTs."
    },
    {
        title: "NFT Metaverse Game",
        text: "Our NFT game-building services extend to full-fledged NFT metaverse development. Welcome gamers to an entire virtual world of NFTs where they can trade, interact, and explore environments for a breathtaking gaming experience."
    },
    {
        title: "NFT RPG Game",
        text: "The pursuit of exclusive NFTs becomes even more interesting when you draw players to roleplay games. RPG games immerse players into thrilling missions, and storylines, making them crave completion to unlock a bundle of all-exclusive tokens. "
    },
    {
        title: "NFT Sports and Racing Game",
        text: "Watch out for car enthusiasts as NFT racing games are bound to keep them poised for hours. Players will compete in deadly racing tracks to unlock exclusive trophies, skins, new race tracks all in the shape of high-class NFTs."
    },
    {
        title: "NFT Card and Casino Game",
        text: "Our NFT game developers can even go out of their way to help you build high-level simulations of real-world casinos or Poker tables. What’s truly interesting is that players will engage in the game via the tokenization of NFTs. "
    }
];

export const CtaEstimatedContent = {
    subtitle: "NFT Game Development Costs: From Simple to Complex",
    title: "Your Game’s Cost, Simplified",
    text: (<>Get an instant estimate for your NFT game’s development based on its complexity. NFT games typically range from <span>$10k to $100k+</span>. Ready for a precise quote? Contact us today!.</>),
    CtaEstimatedImg: CtaEstimatedImg.src
}

export const TechStackContent = {
    title: "NFT Tech Stack for All Project",
    text: "Our developers hold experience with the most demanding blockchain tech stack.",
}

export const TechStackTabs = [
    {
        title: "Game Engines",
        content: [
            {
                heading: "Buildbox",
                img: TAB1_1.src,
            },
            {
                heading: "Unreal Engine",
                img: TAB1_2.src,
            },
            {
                heading: "Godot",
                img: TAB1_3.src,
            },
            {
                heading: "Amazon Lumberyard",
                img: TAB1_4.src,
            }
        ],
    },
    {
        title: "Programming Languages",
        content: [
            {
                heading: "Rust",
                img: TAB2_1.src,
            },
            {
                heading: "Go",
                img: TAB2_2.src,
            },
            {
                heading: "Python",
                img: TAB2_3.src,
            },
            {
                heading: "JavaScript",
                img: TAB2_4.src,
            }
        ],
    },
    {
        title: "Graphics",
        content: [
            {
                heading: "Adobe Photoshop",
                img: TAB3_1.src,
            },
            {
                heading: "Krita",
                img: TAB3_2.src,
            },
            {
                heading: "Corel Painter",
                img: TAB3_3.src,
            },
            {
                heading: "Bueno",
                img: TAB3_4.src,
            }
        ],
    },
    {
        title: "Databases",
        content: [
            {
                heading: "OpenSea",
                img: TAB4_1.src,
            },
            {
                heading: "Nifty Gateway",
                img: TAB4_2.src,
            },
            {
                heading: "Foundation",
                img: TAB4_3.src,
            },
            {
                heading: "MongoDB",
                img: TAB4_4.src,
            }
        ],
    },
    {
        title: "Frameworks & Libraries",
        content: [
            {
                heading: "Hard Hat",
                img: TAB5_1.src,
            },
            {
                heading: "Moralis NFT API",
                img: TAB5_2.src,
            },
            {
                heading: "ethers.js",
                img: TAB5_3.src,
            },
            {
                heading: "ZettaBlock",
                img: TAB5_4.src,
            }
        ],
    },
    {
        title: "Testing",
        content: [
            {
                heading: "Jenkins",
                img: TAB6_1.src,
            },
            {
                heading: "Selenium",
                img: TAB6_2.src,
            },
            {
                heading: "JIRA",
                img: TAB6_3.src,
            },
            {
                heading: "TestRail",
                img: TAB6_4.src,
            }
        ],
    }
];

export const IndustriesContent = {
    title: "Industries We Serve",
    text: "As a top-grade NFT game development agency, we deliver solutions for a wide range of industries, addressing specific challenges and driving growth across various sectors.",
}


export const IndustriesList = [
    {
        icon: <EcommerceSVG />,
        title: "Ecommerce",
        txt: "We at BitsWits create powerful e-commerce apps, transforming your business with seamless shopping experiences and robust sales platforms.",
        url: "/ecommerce-app-development",
        img: Ecommerce.src,
    },
    {
        icon: <FintechSVG />,
        title: "Fintech",
        txt: "We develop mobile banking, investment tracking, and finance management apps with real-time data and strong security for streamlined operations.",
        url: "/fintech-app-development",
        img: Fintech.src,
    },
    {
        icon: <HealthcareSVG />,
        title: "Healthcare",
        txt: "We create custom mobile apps designed to enhance healthcare delivery, patient care, and medical management efficiency.",
        url: "/healthcare-app-development-services",
        img: Healthcare.src,
    },
    {
        icon: <EducationSVG />,
        title: "Education",
        txt: "We revolutionize education with apps for online learning, virtual classrooms, and management systems, enriching experiences for students and educators.",
        url: "/education-app-development",
        img: Education.src,
    },
    {
        icon: <SocialSVG />,
        title: "Social Media",
        txt: "Our team builds dynamic social media apps with real-time messaging, content sharing, and personalized feeds to boost user engagement and community growth.",
        url: "/social-media-app-development-company",
        img: SocialMarketing.src,
    },
    {
        icon: <RealEstateSVG />,
        title: "Real Estate",
        txt: "We develop apps for real estate, including property listings, virtual tours, and client management, enhancing user experience and transaction efficiency.",
        url: "/real-estate-app-development-company",
        img: RealEstate.src,
    },
    {
        icon: <RideHailingSVG />,
        title: "Ride-hailing",
        txt: "Our ride-hailing apps provide seamless booking, real-time tracking, and smooth driver-passenger interactions for an efficient ride experience.",
        url: "#",
        img: RideHailing.src,
    },
    {
        icon: <TravelSVG />,
        title: "Travel",
        txt: "We design user-friendly travel apps tailored to enhance booking experiences, navigation, and personalized travel itineraries.",
        url: "#",
        img: Travel.src,
    },
];


export const IdeaCtaContent = {
    title: (<>Let’s Change<br /> The World With Your</>),
    text: (<> App <span>Idea!</span></>),
    formtitle: (<>Let’s Create An <br /> Amazing App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: "Are NFT games legal?",
        txt: "Yes, NFTs are perfectly legal. When it comes to the NFT gaming platform, game publishers own all assets. The right of ownership may be acquired by players winning or buying exclusive NFT collectibles. You can even legalize your NFT by acquiring full rights to the asset from the publisher. Or consult a blockchain lawyer to protect your right to ownership.  "
    },
    {
        title: "What’s your expertise with NFT game development?",
        txt: `At BitsWits, we have a team of highly expert NFT artists and game developers who’ve been serving the industry from the very start. It won’t be wrong to claim that we’re among the pioneers in building feature-rich games. Owing to our experience, and client satisfaction level, we’re arguably the best NFT game development company. `
    },
    {
        title: "Are NFT games profitable?",
        txt: `Yes, NFT games can be seriously profitable if the items you create sustain a high-level of demand among gamers and players. Plus, you may even earn from royalty every time the asset is traded over the in-game marketplace. Besides, minting NFTs in games could be profitable for both publishers, and gamers alike as they can trade them.`
    },
    {
        title: "How much does NFT development cost?",
        txt: `The cost of NFT development can vary significantly between $45000 and $60000. This is the estimated cost for an NFT marketplace development. The price may go up depending upon a range of cost factors including tech stack required for development, complexity of art style and concept, niche of the NFT, functionality of the application, and level of security. `
    },
    {
        title: "How long does it take to build an NFT marketplace?",
        txt: `The time to build an NFT marketplace varies. However, to build a marketplace that has all the basic features on offer, you’ll require at least six months. The timeline of your project delivery also greatly depends upon the quality of NFT game development services you hire for the job.`
    }
]

export const BlogsContent = {
    title: "Our Related Blog Posts",
}

export const BlogsList = [
    {
        title: "How Much Does It Cost to Develop an App in 2024?",
        txt: "Ever noticed how there’s an app for almost everything? To be precise, there are over four million apps available across iOS and Android platforms, extending to a wide range of sub-genres and niches.",
        cat: "Mobile App Development",
        img: BlogsIMG01.src,
        links: "https://www.bitswits.co/blog/mobile-app-development-cost",
        date: "August 29,2024"
    }, {
        title: "Most Popular Mobile App Development Frameworks",
        txt: "You know how people are glued to their phones these days? Apps are like, everywhere. From booking a cab to buying movie tickets, chatting with friends, and nearly everything else in between, we just can’t do without apps.",
        cat: "Mobile App Development",
        img: BlogsIMG02.src,
        links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
        date: "August 13,2024"
    }
    , {
        title: "Everything You Need to Know About Application Development Life Cycle",
        txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
        cat: "Mobile App Development",
        img: BlogsIMG03.src,
        links: "https://www.bitswits.co/blog/application-development-life-cycle",
        date: "July 10,2024"
    }
]




