"use client";
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/services/cuttingEdge.webp"
import styles from "@/styles/services/cuttingedge.module.scss"
import Link from "next/link"
import Image from "next/image"
import NormalBtn from "@/src/components/common/normalbtn"

const data = [
    {
        title: (<>Android App <br />Development Services</>),
        txt: "As a leading mobile app development agency, we use Kotlin, Java, and Jetpack Compose to build lightweight Android apps. Our applications enhance UX and functionality across smartphones, wearable devices, and TVs, providing exceptional design, look, and feel for diverse industries.",
        links: "",
    },
    {
        title: (<>iOS Application<br />Development Services</>),
        txt: "Our iOS mobile development services utilize Swift and Xcode to build human-centered, easy-to-navigate apps for iPhone, iPad, Mac, Apple TV, and Apple Watch, delivering exceptional functionality and user experience across all Apple devices.",
        links: "",
    },
    {
        title: (<>Cross-Platform<br />Development Services</>),
        txt: "Make your app accessible on iOS and Android with a write-once, deploy-anywhere cross-platform framework! Reduce development costs by 50% with our Flutter and React Native development models, delivering apps with a native-like experience.",
        links: "",
    },
    {
        title: (<>Mobile Web Apps<br />Development Services</>),
        txt: "BitsWits helps businesses achieve 2X conversion rates with high-performance web solutions. We deliver scalable web portals, enterprise apps for better management, and customer-facing applications, including analytics apps and B2B eCommerce solutions, to enhance business growth and efficiency.",
        links: "",
    },
    {
        title: (<>Mobile Game<br />Development Services</>),
        txt: "As a top-grade mobile game development company, we use technologies like Unity and Unreal Engine to create adrenaline-pumping games in action, RPG, and sports! We offer flexible options, including full-cycle, co-development, and game porting services to meet the diverse needs of our clients",
        links: "",
    }
    , {
        title: (<>Blockchain Mobile<br />App Services</>),
        txt: "We are a top mobile app development company specializing in apps powered by blockchain technology, including decentralized networks, NFTs, and smart contracts. Our solutions enhance transparency, immutability, and automation for DeFi, ICOs, tokens, crypto exchanges, and gamification.",
        links: "",
    }
    , {
        title: (<>AR/VR App<br />App Services</>),
        txt: "We build immersive AR/VR apps using tools like ARToolKit, Apple ARKit, Google ARCore, Unity, and Vuforia, covering sensor-based, location-based, and visual recognition solutions. With expertise in C# and Java, our developers create scalable applications to deliver exceptional results across various platforms!",
        links: "",
    }
]
const Cuttingedge = () => {
    // Chat Code
    const handleChatOpen = (e) => {
        e.preventDefault();
        if (typeof $zopim !== 'undefined' && $zopim.livechat && $zopim.livechat.window) {
            $zopim.livechat.window.show();
        }
    };
    return (
        <section className={`${styles.cuttingedgeSection} pt-100`} id="Services">
            <Container>
                <Row>
                    <Col lg={7} md={9}>
                        <h2>Mobile App Development Services for Maximum Business Impact!</h2>
                        <p>Our custom mobile app development services are designed to give startups and SMEs a first-mover advantage to quickly scale in their market!</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.ServicesBox}>
                            <div className={styles.ServicesContent}>

                                {data.map((item, index) => (
                                    <div className={styles.ServicesItem} key={index}>
                                        <div className={styles.titleBox}>
                                            <h5>{item.title}</h5>
                                            <div className={styles.normalButton}>
                                                <div className={styles.linksBtn} onClick={handleChatOpen}>Let’s Do This!</div>
                                            </div>
                                        </div>
                                        <div className={styles.contentBox}>
                                            <p>{item.txt}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.ServicesSticky}>
                                <div className={styles.stickyBox}>
                                    <Image src={IMG.src} alt="Btiswits Services" width={355} height={294} />
                                    <h5>Estimate Your App Project’s Cost Now!</h5>
                                    <NormalBtn text="Let’s Talk !" link="" bgcolor="#fff" txtcolor="#4D77EE" />
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Cuttingedge