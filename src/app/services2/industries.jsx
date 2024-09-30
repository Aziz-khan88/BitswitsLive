"use client"
import { ArrowIcon, Icon01, Icon02, Icon03, Icon04, Icon05, Icon06, Icon07, Icon08 } from "@/src/app/app-constants";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/industries.module.scss";
import Ecommerce from "media/services/industry/Ecommerce.webp";
import Fintech from "media/services/industry/Fintech.webp";
import Healthcare from "media/services/industry/Healthcare.webp";
import Education from "media/services/industry/Education.webp";
import SocialMarketing from "media/services/industry/SocialMarketing.webp";
import RealEstate from "media/services/industry/RealEstate.webp";
import RideHailing from "media/services/industry/RideHailing.webp";
import Travel from "media/services/industry/Travel.webp";

const data = [
    {
        icon: <Icon01 />,
        title: "Ecommerce",
        txt: "We at BitsWits create powerful e-commerce apps, transforming your business with seamless shopping experiences and robust sales platforms.",
        url: "#",
        img: Ecommerce.src,
    },
    {
        icon: <Icon02 />,
        title: "Fintech",
        txt: "We develop mobile banking, investment tracking, and finance management apps with real-time data and strong security for streamlined operations.",
        url: "#",
        img: Fintech.src,
    },
    {
        icon: <Icon03 />,
        title: "Healthcare",
        txt: "We create custom mobile apps designed to enhance healthcare delivery, patient care, and medical management efficiency.",
        url: "#",
        img: Healthcare.src,
    },
    {
        icon: <Icon04 />,
        title: "Education",
        txt: "We revolutionize education with apps for online learning, virtual classrooms, and management systems, enriching experiences for students and educators.",
        url: "#",
        img: Education.src,
    },
    {
        icon: <Icon05 />,
        title: "Social Media",
        txt: "Our team builds dynamic social media apps with real-time messaging, content sharing, and personalized feeds to boost user engagement and community growth.",
        url: "#",
        img: SocialMarketing.src,
    },
    {
        icon: <Icon06 />,
        title: "Real Estate",
        txt: "We develop apps for real estate, including property listings, virtual tours, and client management, enhancing user experience and transaction efficiency.",
        url: "#",
        img: RealEstate.src,
    },
    {
        icon: <Icon07 />,
        title: "Ride-hailing",
        txt: "Our ride-hailing apps provide seamless booking, real-time tracking, and smooth driver-passenger interactions for an efficient ride experience.",
        url: "#",
        img: RideHailing.src,
    },
    {
        icon: <Icon08 />,
        title: "Travel",
        txt: "We design user-friendly travel apps tailored to enhance booking experiences, navigation, and personalized travel itineraries.",
        url: "#",
        img: Travel.src,
    },
];

const Industries = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className={`${styles.industrySection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={8} className="text-center m-auto">
                        <h2>Industries We Serve</h2>
                        <p>As a leading mobile app development firm, we deliver specialized solutions across multiple sectors, meeting industry-specific challenges and fueling growth with advanced technology.</p>
                    </Col>
                </Row>
                <Row>
                    {data.map((item, index) => (
                        <Col lg={3} md={6} key={index}>
                            <div
                                className={styles.industryBox}
                                style={{ backgroundImage: `url(${item.img})` }}>
                                <div className={styles.industryIcon}>{item.icon}</div>
                                <div className={styles.industryTitle}>{item.title}</div>
                                <p>{item.txt}</p>
                                <div className={styles.linksBtn} onClick={handleChatOpen}>
                                    Read More <ArrowIcon />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Industries;
