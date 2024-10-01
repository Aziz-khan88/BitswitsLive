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
import TAB1_2 from "media/industry/techstack/Flutter.svg";
import TAB1_3 from "media/industry/techstack/Flutter.svg";
import TAB2_1 from "media/services/tech/tab2/01.webp";
import TAB2_2 from "media/services/tech/tab2/02.webp";
import TAB2_3 from "media/services/tech/tab2/03.webp";
import TAB2_4 from "media/services/tech/tab2/04.webp";
import TAB2_5 from "media/services/tech/tab2/05.webp";
import TAB2_6 from "media/services/tech/tab2/06.webp";
import TAB2_7 from "media/services/tech/tab2/07.webp";
import TAB3_1 from "media/industry/techstack/Firebase.svg";
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
    title: "Top-Grade Flutter App Development Company",
    content: "We deliver next-gen Flutter mobile apps for Android and iOS with accelerated development and cross-platform consistency. As a leading Flutter app development company, our efficient solutions offer native-like performance and interactive UIs with reduced development costs and time-to-market.",
    BannerLogos: BannerLogos.src,
    BannerBg: BannerBg.src,
    fromtitle: "Let’s Discuss Your App Idea",
    fromtext: "Share your app business objectives with our experts and create your custom app."
}

export const CuttingedgeContent = {
    title: "Agile Flutter App Development Services for Growing Enterprises",
    text: "Our Flutter app development services are customized for aspiring startups and SMEs, enabling fast market entry and sustainable growth!",
    subtext: "Estimate Your App Project’s Cost Now!"
}

export const CuttingedgeList = [
    {
        title: (<>Flutter App  <br />Consultation</>),
        txt: "In our Flutter consulting services, we validate your Flutter project idea or evaluate your existing Flutter-based app, integrating it with your business strategy to maximize success and align with your growth objectives and market demands.",
        links: "",
    },
    {
        title: (<>Cross-Platform <br />App Development</>),
        txt: "Our cross-platform solutions deliver scalable, secure, and seamless applications for both B2B and B2C, providing high-performance apps and exceptional user experience on iOS and Android, driving business success and engagement.",
        links: "",
    },
    {
        title: (<>Custom Flutter <br />App Development</>),
        txt: "Achieve a strong multi-platform presence with fully functional Flutter applications for Android and iOS, delivering native-like performance and product-market fit to enhance your business reach and customer engagement.",
        links: "",
    },
    {
        title: (<>Flutter Apps <br />for IoT Devices</>),
        txt: "Our Flutter apps for IoT devices simplify complexities, providing seamless solutions for environmental monitoring, asset tracking, and health monitoring. We develop premium-grade wearable devices and smart home control apps, enhancing connectivity across smart ecosystems.",
        links: "",
    },
    {
        title: (<>Flutter App <br />Migration</>),
        txt: "Our expert Flutter app developers can seamlessly migrate your existing app to the Flutter framework, facilitating a smooth transition across operating systems, enhancing performance and UX while minimizing downtime.",
        links: "",
    }
    , {
        title: (<>Flutter Desktop <br />App Development</>),
        txt: "Create powerful Windows, Mac, and Linux-supported desktop apps with a leading Flutter app development company like BitsWits! Our Flutter app developers deliver native functionality and seamless performance across platforms, enhancing both business operations and user experience.",
        links: "",
    }
]

export const caseStudiesContent = {
    title: "Our Results-Driven Flutter App Development Portfolio!",
    text: "Drive business growth and enhance user engagement with our top-tier apps! As a trusted flutter app development company, our portfolio reflects our commitment to delivering high-impact solutions and showcases the success of our clients.",
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
    title: "Flutter to the Future!",
    text: "-Take the next step in digital evolution with Flutter! Ready to lead? Book a free session and see how we build brilliance!",
}

export const WhyChooseContent = {
    title: "Why Choose BitsWits?",
    text: "BitsWits provides top-quality Flutter app development services, delivering cross-platform, enterprise-grade mobile apps that maximize your project’s success!"
}

export const WhyChooseList1 = [
    {
        Icon: <WhyChooseIcon03 />,
        title: (<>End-to-End<br /> Product Development</>),
        description: "We provide Flutter-based solutions with guaranteed support throughout the entire development process for seamless delivery and success.",
    },
    {
        Icon: <WhyChooseIcon01 />,
        title: (<>100% <br /> Transparency</>),
        description: "We keep clients fully aware and in control throughout the process, enabling open collaboration and trust.",
    }
];

export const WhyChooseList2 = [
    {
        Icon: <WhyChooseIcon04 />,
        title: (<>90% Workforce <br /> Retention Rate</>),
        description: "Our dedicated Flutter app developers have been with us for over 7 years, which makes your project secure from start to finish.",
    },
    {
        Icon: <WhyChooseIcon02 />,
        title: (<>4.5/5 Average<br /> Rating</>),
        description: "Our 4.5/5 average rating on Google Play and App Store reflects positive feedback as a professional Flutter app development company.",
    }
];

export const ProcessContent = {
    title: "Our Flutter App Development Process",
    text: "Our Flutter app development services follow a well-defined process, placing user experience at the center to achieve zero platform differences for seamless, high-quality applications across all devices."
}

export const ProcessTabs = [
    {
        title: "Discovery and Ideation",
        content: {
            heading: "Discovery and Ideation",
            description:
                "To set a solid foundation, we define your project scope and establish clear milestones in the discovery and ideation phase by collaborating with all the stakeholders. Then, our team decides on an optimal tech stack to build your Flutter app, creating a well-architected solution and documenting every detail to reflect your vision, setting a solid foundation for development success.",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Planning",
        content: {
            heading: "Planning",
            description:
                "In the planning stage, we analyze your business requirements to create a comprehensive development roadmap for your Flutter product. We develop a dedicated plan with strategies and methodologies tailored to your needs, efficiently allocating resources and setting clear timelines to guide the project toward successful completion.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "UI/UX Design",
        content: {
            heading: "UI/UX Design",
            description:
                "Our UI/UX design phase means expert-vetted designers building customer journey maps and user flows to enhance the overall UX of your mobile app. Our team builds user-friendly interfaces and perfects the visual appeal of your Flutter app to achieve seamless navigation. The ultimate goal is to engage your users with intuitive design.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Prototype ",
        content: {
            heading: "Prototype Demo",
            description:
                "In the prototype demo phase, we present a working model of your app to finalize designs and gain your approval. This demo allows you to experience the look and feel, confirming it meets the project scope and your expectations. Feedback during this stage helps us make necessary refinements before proceeding to full development.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Development",
        content: {
            heading: "Development",
            description:
                "During the development phase, our Flutter app developers utilize agile methodologies to build your app, delivering new builds every two weeks for your review and approval. This iterative development process allows us to quickly adapt to changes and integrate feedback while consistently producing high-quality results, without compromising on quality or project goals.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Testing",
        content: {
            heading: "Testing",
            description:
                "In the testing phase, we conduct rigorous testing to make your Flutter app robust and reliable. This process includes quality assurance and infrastructure testing to identify and rectify potential issues. Each iteration is thoroughly documented, allowing us to refine the app and deliver a smooth user experience before the final release.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Launch and Support",
        content: {
            heading: "Launch and Support",
            description:
                "In the launch and support phase, we release your iOS and Android apps to the Google Play Store and Apple App Store. However, our support doesn’t end there. As a top-grade Flutter app development agency, we provide ongoing assistance and maintenance to keep your app operating smoothly and adapting to market trends, maximizing its performance and relevance post-launch.",
            imgSrc: IMG.src,

        },
    },
];

export const TechnologiesContent = {
    title: "Strategic Advantages of Hiring BitsWits As Your Flutter Mobile App Development Company",
    text: (<><p>BitsWits is a premier Flutter app development company in USA that provides top-tier mobile solutions to enhance user engagement and drive market competitiveness. </p>
        <p>Our experienced Flutter app developersfocus on cross-platform development, intuitive UI/UX design, and fast development cycles. </p>
        <p>We deliver scalable and secure solutions, with smooth integration of third-party services, making your app a standout in a competitive market.</p>
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
    title: (<>Achieve Rapid <Image src={RisksIMG01} alt="Bitswits Services" width={228} height={85} /> Development with Flutter’s <Image src={RisksIMG02} alt="Bitswits Services" width={228} height={85} />  Cross-Platform Power!</>),
    text: "Let our expert team develop your Flutter app cost-effectively!"
}

export const OffersContent = {
    title: "Why You Should Choose Flutter For Cross-Platform App Development?",
    text: "Flutter offers numerous benefits for cross-platform apps, making it an ideal choice for your mobile app development project. Our Flutter application development services provide efficiency, and native-like performance, offering compelling reasons to choose Flutter for your next app.",
}

export const OffersTabs = [

    {
        title: "Multi-Platform Support",
        content: {
            heading: "Multi-Platform Support",
            description:
                "As one of the top Flutter app development companies, we utilize Flutter’s multi-platform support to greatly reduce the need for writing individual codes for each platform. Our flexible framework enables Flutter mobile developers to create apps with a native-like experience, providing seamless functionality and consistent performance across Android, iOS, web, and desktop environments.",
        },
    },

    {
        title: "Accelerated Development Process",
        content: {
            heading: "Accelerated Development Process",
            description:
                "With productivity features such as hot reload and an extensive library of pre-built widgets, Flutter allows developers to build and deploy apps faster. As a top Flutter app development company, we use this feature to reduce time-to-market, enabling quick iterations and maintaining high-quality standards throughout the development process.",
        },
    },

    {
        title: "Enhanced Performance",
        content: {
            heading: "Enhanced Performance",
            description:
                "Flutter application development delivers enhanced performance by offering the same efficiency as native mobile applications. It eliminates the need for a bridge between the app and the basic operating system, resulting in faster execution and smooth performance across platforms, providing a high-quality user experience in every app.",

        },
    },
    {
        title: "Comprehensive Widget Collection",
        content: {
            heading: "Comprehensive Widget Collection",
            description:
                "Flutter’s comprehensive widget library offers a wide array of pre-built widgets, including buttons, text fields, lists, and navigation bars. These common UI components, along with dialogs and animations, enable our Flutter mobile app development services to create rich, visually appealing apps that enhance user interaction and streamline the development process.",

        },
    },
    {
        title: "Dynamic and Adaptive UI",
        content: {
            heading: "Dynamic and Adaptive UI",
            description:
                "Flutter provides agile and flexible widgets with Material Design and Cupertino components that support a dynamic and adaptive UI. We as a top-tier Flutter mobile application development company, utilize these capabilities for real-time UI iteration. This enables our developers to rapidly adjust and refine user interfaces for a consistent and engaging experience across all platforms.",

        },
    },


];

export const FuelingContent = {
    title: "Technologies We Use In Combination with Flutter",
    text: "We pair backend technologies and databases with Flutter to enhance mobile apps, providing seamless integration and robust performance for superior user experiences.",
    subtitle: "Accelerate Your App Launch with Flutter’s Cross-Platform Efficiency!",
    subtext: "Develop high-performance apps with seamless user experience across multiple platforms.",
    FuelingImg: FuelingImg.src
}

export const FuelingList = [
    {
        title: "Flutter + Firebase",
        text: "We’re recognized as the best Flutter app development company for combining Flutter with Firebase, which allows us to build MVPs faster. This powerful technology enables the development of feature-rich and scalable applications, providing seamless integration for real-time data handling."
    },
    {
        title: "Flutter + Node.js",
        text: "Integrating Flutter with Node.js enhances backend functionality using RESTful APIs and JavaScript. This combination creates a robust architecture, allowing seamless data exchange and efficient app performance, supporting dynamic and scalable application development across various platforms."
    },
    {
        title: "Flutter + MongoDB",
        text: "Pairing Flutter with MongoDB enables the development of powerful, feature-rich apps with excellent UX across multiple platforms. This combination supports flexible data storage and retrieval, ensuring high performance and scalability for modern application needs."
    },
    {
        title: "Flutter + FastAPI",
        text: "Combining Flutter with FastAPI enables modern API design, creating responsive and secure apps capable of handling high traffic loads. This integration ensures efficient data processing and robust performance, enhancing user experiences across various platforms."
    },
    {
        title: "Flutter + Python",
        text: "Flutter and Python together enable the development of data-intensive apps that utilize data science and machine learning. This synergy facilitates automation and advanced analytics, enhancing app functionality and delivering intelligent solutions across multiple platforms."
    }
];

export const CtaEstimatedContent = {
    subtitle: "Flutter App Development Costs: From Simple to Complex",
    title: "Your App’s Cost, Simplified",
    text: (<>Get an instant estimate for your Flutter app’s development based on its complexity. Mobile apps typically range from <span>$10k to $100k+</span>. Ready for a precise quote? Contact us today! .</>),
    CtaEstimatedImg: CtaEstimatedImg.src
}

export const TechStackContent = {
    title: "Our Tech Stack For Flutter App Development ",
    text: "We use the latest tools and technologies to deliver secure and resilient Flutter apps!",
}

export const TechStackTabs = [
    {
        title: "Languages",
        content: [
            {
                heading: "Dart",
                img: TAB1_1.src,
            },
            {
                heading: "Flutter SDK",
                img: TAB1_2.src,
            },
            {
                heading: "Flutter Framework",
                img: TAB1_3.src,
            },
        ],
    },
    {
        title: "UI Components and Design",
        content: [
            {
                heading: "Material",
                img: TAB2_1.src,
            },
            {
                heading: "Cupertino",
                img: TAB2_2.src,
            },
            {
                heading: "MediaQuery",
                img: TAB2_3.src,
            },
            {
                heading: "Theme",
                img: TAB2_4.src,
            },
            {
                heading: "Localization",
                img: TAB2_5.src,
            },
            {
                heading: "Flutter SVG",
                img: TAB2_6.src,
            },
            {
                heading: "Syncfusion Charts",
                img: TAB2_7.src,
            }
        ],
    },
    {
        title: "Backend and Database",
        content: [
            {
                heading: "Firebase",
                img: TAB3_1.src,
            },
            {
                heading: "Firestore",
                img: TAB3_2.src,
            },
            {
                heading: "Firebase Cloud Storage",
                img: TAB3_3.src,
            },
            {
                heading: "SQLite",
                img: TAB3_4.src,
            }
        ],
    },
    {
        title: "State Management",
        content: [
            {
                heading: "Get & Provider",
                img: TAB4_1.src,
            },
            {
                heading: "Riverpod",
                img: TAB4_2.src,
            },
            {
                heading: "Dio",
                img: TAB4_3.src,
            },
            {
                heading: "Http",
                img: TAB4_4.src,
            }
        ],
    },
    {
        title: "IDEs",
        content: [
            {
                heading: "Android Studio",
                img: TAB5_1.src,
            },
            {
                heading: "IntelliJ IDEA",
                img: TAB5_2.src,
            },
            {
                heading: "Dart Plugins",
                img: TAB5_3.src,
            },
            {
                heading: "Flutter Local Notifications",
                img: TAB5_4.src,
            }
        ],
    },
    {
        title: "Utilities ",
        content: [
            {
                heading: "Shared Preferences",
                img: TAB6_1.src,
            },
            {
                heading: "Image Picker",
                img: TAB6_2.src,
            },
            {
                heading: "Url Launcher",
                img: TAB6_3.src,
            },
            {
                heading: "Git ",
                img: TAB6_4.src,
            }
        ],
    }
];


export const IndustriesContent = {
    title: "Industries We Serve",
    text: "As a top-grade Flutter development agency, we deliver solutions for a wide range of industries, addressing specific challenges and driving growth across various sectors.",
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
    formtitle: (<>Let’s Create An Amazing<br /> Flutter App Together!</>)
}

export const FaqsContent = {
    title: "Frequently Asked Questions (FAQs)",
}

export const FaqsList = [
    {
        title: "What platforms does Flutter support?",
        txt: "Flutter supports multiple platforms, including iOS, Android, web, and desktop (Windows, macOS, and Linux). Flutter app development enables developers to build cross-platform apps using a single codebase, reducing development time and ensuring consistent user experiences across devices."
    },
    {
        title: "Can existing apps integrate with Flutter?",
        txt: `Yes, Flutter can be integrated into existing apps using its "Add-to-App" feature. Flutter for mobile app development allows developers to gradually incorporate Flutter modules into native applications, enhancing functionality without needing a complete rewrite.`
    },
    {
        title: "How does Flutter ensure app performance?",
        txt: "Flutter delivers high performance by using a single codebase for all platforms and compiling directly to native code. Its rendering engine, combined with efficient architecture, ensures smooth animations and fast execution."
    },
    {
        title: "Is Flutter suitable for enterprise-level apps?",
        txt: "Yes, Flutter is suitable for enterprise-level apps. It provides robust features, excellent performance, and the ability to create scalable and secure applications, making it a popular choice for businesses of all sizes."
    },
    {
        title: "Which company does Flutter belong to?",
        txt: "Flutter is an open-source framework developed and supported by Google."
    },
    {
        title: "How much does Flutter app builder cost?",
        txt: (<>
            <p>The cost of building a Flutter app varies widely, typically ranging from $15,000 to $200,000, based on the project’s complexity and requirements.</p>
            <p>Simple Flutter apps usually cost between $15,000 and $60,000. More complex apps can range from $60,000 to $150,000, while highly advanced Flutter apps can cost anywhere from $150,000 to $300,000.</p>
            <p>As a leading Flutter application development company, BitsWits offers competitive pricing from $30,000 to $200,000 to build your game-changing app!</p>
        </>)
    },
    {
        title: "Is Flutter good for app development?",
        txt: (<>
            <p>Yes, Flutter is an excellent choice for app development. </p>
            <p>It offers numerous advantages, such as cost efficiency, rapid development, and a short time-to-market. Its ease of team organization makes it increasingly popular for new projects. </p>
            <p>Additionally, Flutter can seamlessly integrate with existing apps written in native languages, making it versatile for both new and ongoing projects.</p>
        </>)
    },
    {
        title: "How long does it take to build a Flutter app?",
        txt: (<>
            <p>The time it takes to build a Flutter app varies based on complexity. </p>
            <p>A simple Flutter app can typically be completed in about 2 months. Medium-complexity projects usually take around 4 months, while more complex apps may require 4 to 6 months of development. </p>
            <p>For example, creating a basic messaging app generally takes less time compared to more feature-rich applications.</p>
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




