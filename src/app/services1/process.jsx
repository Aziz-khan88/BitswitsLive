"use client"
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/process.module.scss";
import ButtonCommon from "@/src/components/common/button1";
import Image from "next/image";
import IMG from "media/services/process/tab01.webp"
const tabs = [
    {
        title: "Planning",
        content: {
            heading: "Project Planning",
            description:
                "In project planning, our business analysts collaborate with clients to accurately translate their business needs into a comprehensive project scope. We assign the right resources and work closely with stakeholders to determine accurate cost and time estimates while exploring various cost optimization options for efficient and effective project execution.",
            imgSrc: IMG.src,
        },
    },
    {
        title: "Cost and Schedule",
        content: {
            heading: "Cost and Schedule",
            description:
                "After the project planning phase, we focus on maintaining cost and time-frame integrity. Our mobile app development services include realistic project estimations and ongoing monitoring of expenditures and deadlines, consistently collaborating with clients to stay within budget and meet agreed-upon time frames as the project moves toward completion.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Wireframes",
        content: {
            heading: "Wireframes",
            description:
                "We develop UI designs and wireframes following ISO 9241 guidelines, focusing on user journeys and intuitive workflows. Prioritizing user values, our team iterates on designs based on feedback to develop detailed mockups that capture the app’s functionality and visual appeal, shaping the final product.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Prototype ",
        content: {
            heading: "Prototype Demo",
            description:
                "In the prototype demo phase, we create a working model of the app to finalize the design and get client approval. This allows clients to experience the look and feel, provide feedback, and refine the project scope to perfect the app before moving into development.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Development",
        content: {
            heading: "Development",
            description:
                "After the prototype demo phase, we move into development, where our mobile app developers specialize in custom mobile app development using flexible modular architectures and agile methodologies. We release new builds every two weeks, provide comprehensive app documentation, and share regular progress reports, allowing the app to scale and adapt quickly to evolving project needs.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Quality Control",
        content: {
            heading: "Quality Control",
            description:
                "In the quality control phase, we implement a quality management system backed by ISO 9001 standards. Our team conducts rigorous testing, including functional, performance, usability, security, and infrastructure tests, to identify potential issues. We thoroughly document results and refine the app to deliver a flawless final product.",
            imgSrc: IMG.src,

        },
    },
    {
        title: "Deployment",
        content: {
            heading: "Deployment and Launch",
            description:
                "In the deployment and launch phase, we integrate all necessary components on a scheduled timeline for a smooth launch. We release the app on the Google Play Store or Apple App Store, monitor its performance, troubleshoot issues, and support a successful market entry with ongoing stability.",
            imgSrc: IMG.src,

        },
    },
];

const Process = ({ setModalShow }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.processSection} p-50`} id="Process">
            <Container>
                <Row>
                    <Col lg={8} md={12} className="text-center m-auto">
                        <h2>Our App Development Approach Makes It Simple, Easy, & Efficient </h2>
                        <p>Our mobile app development process uses an agile approach focused on user experience, delivering high-quality applications across multiple mobile app development platforms to meet diverse business needs.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabName}>
                            <ul>
                                {tabs.map((tab, index) => (
                                    <li
                                        key={index}
                                        className={index === activeTab ? styles.active : ""}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        {tab.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            <div className={styles.tabtxtBox}>
                                <div className={styles.txtTitle}>
                                    <h4>{tabs[activeTab].content.heading}</h4>
                                    <p>{tabs[activeTab].content.description}</p>
                                    <ButtonCommon txt="Free Consultation" setModalShow={setModalShow} />
                                </div>
                                <div className={styles.txtImg}>
                                    <Image
                                        alt="bitswits Servcies"
                                        src={tabs[activeTab].content.imgSrc}
                                        height={405}
                                        width={622}

                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Process;
