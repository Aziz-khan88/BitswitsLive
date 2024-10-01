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
import TAB4_1 from "media/services/tech/tab4/01.webp";
import TAB4_2 from "media/services/tech/tab4/02.webp";
import TAB4_3 from "media/services/tech/tab4/03.webp";
import TAB4_4 from "media/services/tech/tab4/04.webp";
import TAB5_1 from "media/services/tech/tab5/01.webp";
import TAB5_2 from "media/services/tech/tab5/02.webp";
import TAB5_3 from "media/services/tech/tab5/03.webp";
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
    title: "Leading Blockchain Game Development Company",
    content: "BitsWits is a leading Blockchain game development company with over 10+ years of experience. Our expert Blockchain game developers & talented designers assist businesses in creating engaging, revenue-generating Blockchain games that captivate players and attract investors.",
    BannerLogos: BannerLogos.src,
    BannerBg: BannerBg.src,
    fromtitle: "Let’s Discuss Game Idea",
    fromtext: "Share your game objectives with our experts and create your custom game."
}

export const CuttingedgeContent = {
    title: "Premium Blockchain Game Development Services for Exceptional Experiences",
    text: "As a leading Blockchain game development company, we specialize in delivering cutting-edge Blockchain game development services that help businesses thrive swiftly. ",
    subtext: "Estimate Your Game Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Custom <br />Game Development </>),
        txt: "We have experienced game developers who can create new-generation Web3, Blockchain, and Metaverse games based on the newest technologies. Most of our games are designed to fit certain project specifications and conditions.",
        links: "",
    },
    {
        title: (<>Smart Contract <br />Development </>),
        txt: "Manage your Blockchain game assets with smart contracts for a smooth gaming experience. With extensive experience in multiple smart contract languages and technology setups, we assist businesses in integrating and deploying P2E and other apps.",
        links: "",
    },
    {
        title: (<>VR/AR/MR <br />Game Development </>),
        txt: "Our team is proficient with all the trending tools and technologies. We develop intriguing and innovative games based on VR and AR technology to enhance the gaming experience and design.",
        links: "",
    },
    {
        title: (<>Cross-Platform <br />Game Development </>),
        txt: "Deploy our cross-platform game development services to create powerful web3 games that are engaging in terms of response. Develop games that simulate real-world environments & can be played on multiple devices.",
        links: "",
    },
    {
        title: (<>Unity 3D/Unreal Engine <br />Game Development </>),
        txt: "As a top-grade Blockchain game development company, we incorporate stringent Unity 3D, Blender, & Unreal Engine game development tools in our games to deliver a smooth gaming experience.",
        links: "",
    },
    {
        title: (<>Wallet <br />Integration  </>),
        txt: "We provide end-to-end crypto wallet development and integration services that allow players to manage their crypto tokens, in addition to exchanging their virtual assets in the form of NFTs. ",
        links: "",
    },
];

export const caseStudiesContent = {
    title: "Our Results-Driven Blockchain Game Development Portfolio!",
    text: "Drive business growth and enhance user engagement with our top-tier games! As a trusted Blockchain game development company, our portfolio reflects our commitment to delivering high-impact solutions and showcases the success of our clients.",
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
    title: "Future-Proof Your Games with Blockchain Technology!",
    text: "Deliver a next-level gaming experience with our award-winning Blockchain game developers!",
}

export const WhyChooseContent = {
    title: "Why Partner with BitsWits for Your Next Project?",
    text: "We are a leading Blockchain game development company, delivering innovative solutions that captivate game lovers & investors alike."
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>Proven <br />Mastery</>),
        description: "We have successfully completed over 150 projects, showcasing our commitment to delivering high-quality solutions that meet and exceed client goals.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>Customized <br />Creations</>),
        description: "We develop custom Blockchain games tailored to your vision, ensuring each project meets your unique requirements and drives engagement.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>Robust <br /> Security</>),
        description: "Our games incorporate the latest security measures, safeguarding in-game assets and ensuring secure transactions, building trust with your players.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>Ongoing<br />Support </>),
        description: "We provide continuous maintenance and support, keeping your game updated with the latest features and innovations, ensuring long-term success.",
    }
];

export const ProcessContent = {
    title: "Our Comprehensive Blockchain Game Development Process",
    text: "Being a reliable Blockchain development company, we ensure to provide tailor-made solutions for our respective clients. From ideation to launch, our game developers excel at every stage. Here is how we develop our game;"
}

export const ProcessTabs = [
    {
        title: "Discovery",
        content: {
            heading: "Discovery and Planning",
            description:
                "In the initial phase, our Blockchain development firm conducts a thorough analysis of your project objectives. Utilizing tools like Unity & Unreal Engine, we define the project scope, identify the target audience, and then create detailed game design documents. This foundational step enables us to craft a strategic roadmap that aligns the Blockchain game development process with your goals, ensuring long-term success.",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Concept Art",
        content: {
            heading: "Concept Art and Prototyping",
            description:
                "Before diving into full design and development, we create concept art and build prototypes using tools like Blender and Unreal Engine. This stage allows us to visualize the game’s key mechanics and style, ensuring that the game aligns with the intended vision. Prototyping also helps to gather early feedback and make necessary adjustments before committing to full-scale development.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "UI/UX Design",
        content: {
            heading: "UI/UX Designt",
            description:
                "Next, our skilled Blockchain game designers utilize tools such as Unity and Adobe XD to create visually captivating and intuitive interfaces. We prioritize user experience, focusing on seamless gameplay mechanics and immersive aesthetics. By designing interfaces that resonate with your players, we enhance engagement and retention, making your game functional & visually appealing. This approach ultimately drives players towards your game.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Development",
        content: {
            heading: "Development",
            description:
                "In the development phase, we build robust frontend & backend solutions that emphasize scalability, security, and real-time interaction. Our developers utilize solidity for smart contract development and integrate Blockchain protocols like Ethereum and Polygon to ensure a seamless gaming experience across different platforms, positioning your game competitively in the market.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Testing and QA",
            description:
                "Testing & QA plays a crucial role in Blockchain game development. Using tools such as Truffle and Ganache, our QA team conducts rigorous testing to identify and resolve potential issues. Our refined testing approach ensures a stable and reliable game, providing players with a high-quality experience that enhances satisfaction and minimizes disruptions, providing transparency and long-term engagement.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment",
            description:
                "We manage the deployment process, ensuring compliance with Blockchain network standards and optimization for decentralized platforms. Our team implements effective strategies for Blockchain game distribution and visibility, enhancing discoverability and user acquisition. This streamlined approach facilitates a successful launch, reaching your target audience effectively and maximizing initial engagement, setting the stage for sustained success in the competitive gaming market.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Support",
        content: {
            heading: "Maintenance and Support",
            description:
                "Post-deployment is also highly important after the game’s release. We offer ongoing maintenance and support services using tools like GitHub and Remix. Our services include regular updates, performance optimizations, and feature enhancements to keep your game up-to-date with evolving Blockchain technologies. As dedicated Blockchain game developers, we help your game adapt to market trends, and maintain player engagement, ensuring your game remains competitive.",
            imgSrc: IMG.src,

        },
    },
];

export const TechnologiesContent = {
    title: "Benefits of Blockchain Game Development for Startups & Enterprises ",
    text: (<>
        <ul className="listPoint">
            <li>Blockchain technology enables players with true ownership of in-game assets.
            </li>
            <li>It ensures transparent and secure transactions through immutable ledgers.</li>
            <li>Tokenized economies within Blockchain games create lucrative opportunities for monetization.</li>
            <li>Decentralized governance models encourage active community participation & engagement.</li>
            <li>Smart contracts in Blockchain games prevent cheating and ensure fairness.</li>
        </ul>
        <p>Reach our Blockchain game development company in USA & get an indigenous app today.</p>
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
    title: (<>Captivate Your <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Audience with Our Studio’s Masterfully <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} /> Crafted Blockchain Games!</>),
    text: "Partner with our team to create a blockchain game with exceptional ROI"
}

export const OffersContent = {
    title: "Additional Blockchain Game Development Services",
    text: "At BitsWits, we offer advanced Blockchain game development services for all sizes of businesses. Our skilled game developers are aware of all the complexities of Blockchain games, hence you could expect a premium-quality digital app. Here are the services we offer;",
}

export const OffersTabs = [

    {
        title: "Full-Cycle Game Development",
        content: {
            heading: "Full-Cycle Game Development",
            description:
                "Our app development company has all the necessary team members needed to create a Blockchain game, starting from the development of an idea and ending with the creation of a game and subsequent support. We pay close attention and always plan and design every phase of the development, making the gaming experience as smooth and engaging as possible.",
        },
    },
    {
        title: "Tokenomics",
        content: {
            heading: "Tokenomics",
            description:
                "Speaking of tokens, our Blockchain game developers have the ability to generate exclusive tokens inside the game on top Blockchain platforms. These are in-game tokens such as currencies, governance, utility, security tokens, etc. These tokens add to the game interface especially because they help the players explore different forms of interactions, trades, and investments among others within the game’s environment.",
        },
    },
    {
        title: "Blockchain Porting",
        content: {
            heading: "Blockchain Porting",
            description:
                "We can also integrate your developed games into the Blockchain as well. While analyzing your games, we implement Blockchain-focused features while leaving the overall gameplay experience intact. This makes it possible for traditional games to adopt Blockchain from a transparency and security point of view while also ensuring that it transitions seamlessly from the traditional environment into the decentralized ecosystem.",
        },
    },
    {
        title: "Asset Creation",
        content: {
            heading: "Asset Creation",
            description:
                "Our veteran team of Blockchain game developers designs unique in-game assets, which are further tokenized in the form of NFTs. Taking into account various input parameters and types of art, we create and tokenize 2D and 3D assets using AI and metadata. These assets can be bought and sold, as well as gamed within the game environment. ",
        },
    },
    {
        title: "Integration Services",
        content: {
            heading: "Integration Services",
            description:
                "We have highly experienced gaming programmers in different technologies that enable them to put as many integrations as possible in the custom Blockchain game. Whether it is the additions of new aspects of Blockchain or making your game compatible with other platforms, our team makes sure your game stands out from the competition.",
        },
    },

];

export const FuelingContent = {
    title: "Integrating Cutting-Edge Technologies in Blockchain Game Development ",
    text: "We capitalize on pioneering technologies to make extraordinary games that help your brand escalate to higher levels. Discover how these innovations amplify user experiences & improve game functionality.",
    subtitle: "Build the Future of Gaming with Blockchain-Powered Game Development!",
    subtext: "Design engaging, decentralized games that enhance player interaction and rewards.",
    FuelingImg: FuelingImg.src
}

export const FuelingList = [
    {
        title: "NFTs (Non-Fungible Tokens)",
        text: "NFTs introduce a revolutionary level of ownership and uniqueness to in-game items. Each token represents a distinct asset that players can trade, sell, or collect. This innovation creates dynamic revenue streams and cultivates a thriving in-game economy. "
    },
    {
        title: "Decentralized Finance (DeFi)",
        text: "DeFi seamlessly integrates financial services within the gaming ecosystem, encouraging players to earn, stake, or lend in-game currencies. This infusion of financial strategy enriches gameplay, transforming the gaming experience into a rewarding and multifaceted adventure."
    },
    {
        title: "Cross-Chain Compatibility",
        text: "Cross-chain technology ensures seamless interoperability between different Blockchain networks. Players can effortlessly transfer assets and interact across multiple games and platforms, breaking down barriers and expanding the gaming ecosystem. "
    },
    {
        title: "AI & ML",
        text: "AI & ML technology helps in creating intelligent, adaptive game environments. These technologies enhance NPC behavior, making interactions more realistic and dynamic. Also, they improve player experiences and enable predictive analytics, resulting in more engaging and tailored gameplay. "
    },
    {
        title: "Decentralized Autonomous Organizations (DAOs)",
        text: "DAOs enable players to participate in the governance and decision-making processes of their favorite games. By utilizing Blockchain technology, DAOs ensure transparency and fairness in how games are developed and managed. "
    },
    {
        title: "Metaverse Integration ",
        text: "Metaverse technologies create expansive, interconnected virtual worlds. Players can experience immersive social interactions and economies, providing a seamless, engaging experience that transcends traditional gaming boundaries. Connect with our Blockchain game development company to launch your game. "
    }
];

export const CtaEstimatedContent = {
    subtitle: "Blockchain Game Development Costs: From Simple to Complex",
    title: "Your Game’s Cost, Simplified",
    text: (<>Get an instant estimate for your Blockchain game’s development based on its complexity. Blockchain games typically range from <span>$10k to $100k+</span>. Ready for a precise quote? Contact us today!</>),
    CtaEstimatedImg: CtaEstimatedImg.src
}

export const TechStackContent = {
    title: "Our Tech Stack for Blockchain Game Development ",
    text: "As a leading Blockchain development company, we have proficiency with the latest technologies. ",
}

export const TechStackTabs = [
    {
        title: "Frontend",
        content: [
            {
                heading: "Unity",
                img: TAB1_1.src,
            },
            {
                heading: "Unreal Engine",
                img: TAB1_2.src,
            },
            {
                heading: "WebGL",
                img: TAB1_3.src,
            },
            {
                heading: "Three.js",
                img: TAB1_4.src,
            }
        ],
    },
    {
        title: "Backend ",
        content: [
            {
                heading: "Node.js",
                img: TAB2_1.src,
            },
            {
                heading: "Python",
                img: TAB2_2.src,
            },
            {
                heading: "Golang",
                img: TAB2_3.src,
            },
            {
                heading: "C++",
                img: TAB2_4.src,
            }
        ],
    },
    {
        title: "Mobile Development",
        content: [
            {
                heading: "Unity",
                img: TAB3_1.src,
            },
            {
                heading: "Unreal Engine",
                img: TAB3_2.src,
            }
        ],
    },
    {
        title: "Database Management",
        content: [
            {
                heading: "IPFS",
                img: TAB4_1.src,
            },
            {
                heading: "MongoDB",
                img: TAB4_2.src,
            },
            {
                heading: "AudaFirebase Realtime Databasecity",
                img: TAB4_3.src,
            },
            {
                heading: "PostgreSQL",
                img: TAB4_4.src,
            }
        ],
    },
    {
        title: "Cloud",
        content: [
            {
                heading: "AWS",
                img: TAB5_1.src,
            },
            {
                heading: "Google Cloud",
                img: TAB5_2.src,
            },
            {
                heading: "Microsoft Azure",
                img: TAB5_3.src,
            }
        ],
    },
    {
        title: "Testing & QA",
        content: [
            {
                heading: "Truffle",
                img: TAB6_1.src,
            },
            {
                heading: "Hardhat",
                img: TAB6_2.src,
            },
            {
                heading: "MythX",
                img: TAB6_3.src,
            },
            {
                heading: "Mocha",
                img: TAB6_4.src,
            }
        ],
    },
];

export const IndustriesContent = {
    title: "Industries We Serve",
    text: "As a top-grade blockchain game development agency, we deliver solutions for a wide range of industries, addressing specific challenges and driving growth across various sectors.",
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
        title: "What Blockchain game development services do you offer?",
        txt: "At BitsWits, we offer a comprehensive range of Blockchain game development services, including game design, smart contract integration, NFT creation, decentralized finance (DeFi) implementation, cross-chain compatibility, and ongoing maintenance and support. Our services are tailored to provide a seamless and engaging gaming experience."
    },
    {
        title: "How do I get started with your Blockchain game development services??",
        txt: `To get started with our Blockchain game development services, simply contact us to discuss your project requirements. Our team of experts will guide you through the process, from initial concept and design to development and deployment, ensuring a seamless and successful launch of your Blockchain game.`
    },
    {
        title: "How does a Blockchain gaming platform benefit players and developers?",
        txt: "A Blockchain gaming platform benefits players by offering true ownership of in-game assets, enhanced security, and the ability to trade or sell items. Developers benefit from reduced fraud, increased transparency, and new monetization opportunities through NFTs and DeFi mechanisms. This creates a more interactive and profitable ecosystem for all participants."
    },
    {
        title: "What are the costs associated with Blockchain game development?",
        txt: "The cost of Blockchain game development varies based on the complexity and features of the game. Simple Blockchain games might cost between $10,000 - $60,000, while more complex games can range from $60,000 - $150,000 or more. Connect with our firm to get an estimate for your dream game app. "
    },
    {
        title: "What factors influence the development timeline of a Blockchain game?",
        txt: (<>
            <p>Several factors influence the development timeline of a Blockchain game, including:</p>
            <ul className="listPoint">
                <li>The complexity of game mechanics and features.
                </li>
                <li>The choice of Blockchain platform, smart contracts, and integration of technologies like NFTs and DeFi.</li>
                <li>The size and expertise of the development team.</li>
                <li>The time required for testing, debugging, and iterating on the game.</li>
            </ul>
        </>)
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
    },
    {
        title: "Most Popular Mobile App Development Frameworks",
        txt: "You know how people are glued to their phones these days? Apps are like, everywhere. From booking a cab to buying movie tickets, chatting with friends, and nearly everything else in between, we just can’t do without apps.",
        cat: "Mobile App Development",
        img: BlogsIMG02.src,
        links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
        date: "August 13,2024"
    },
    {
        title: "Everything You Need to Know About Application Development Life Cycle",
        txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
        cat: "Mobile App Development",
        img: BlogsIMG03.src,
        links: "https://www.bitswits.co/blog/application-development-life-cycle",
        date: "July 10,2024"
    }
]




