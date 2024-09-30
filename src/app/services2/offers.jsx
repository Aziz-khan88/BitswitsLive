"use client"
import { useState } from "react";
import styles from "@/styles/services/offers.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ButtonCommon from "@/src/components/common/button";

const tabs = [

    {
        title: "MVP Development",
        content: {
            heading: "MVP Development",
            description:
                "We create MVPs (Minimum Viable Products) with core features to validate your idea while minimizing costs. Focusing on the fundamental aspects of your app allows for a quick launch. We utilize tools like Sketch, Figma, Adobe XD, and frameworks such as React Native, Flutter, Swift, and Kotlin to develop cost-effective MVPs efficiently.",
        },
    },

    {
        title: "Mobile App Consulting",
        content: {
            heading: "Mobile App Consulting",
            description:
                "Our mobile app consulting services guide you from idea validation to launch, making us the best mobile app development company by providing market analysis, developing a solid mobile strategy, identifying the target audience, and offering continuous support to maximize your app’s success in a competitive market.",
        },
    },

    {
        title: "Mobile UI/UX Design",
        content: {
            heading: "Mobile UI/UX Design",
            description:
                "As a leading mobile app design company, we focus on creating attractive visuals and intuitive interfaces by using tools like Sketch, Figma, and Adobe XD. Our expertise in combining design principles with user psychology makes us a top-grade mobile app design agency over other competitors, delivering unique and compelling user experiences that truly stand out in the market.",

        },
    },
    {
        title: "Mobile Backend Development",
        content: {
            heading: "Mobile Backend Development",
            description:
                "We create robust server-side solutions and manage databases to enhance app performance. With the top 3% of mobile app developers in USA, we use tools and languages like Node.js, Python, AWS, and Firebase to build scalable, secure backends, supporting all app functionalities and delivering a seamless user experience across various platforms.",

        },
    },
    {
        title: "Testing and QA",
        content: {
            heading: "Testing and QA",
            description:
                "Our ISTQB-certified test engineers perform extensive testing for functionality, UX, performance, accessibility, and security, using tools like Appium, Selenium, and JUnit. This comprehensive approach to quality assurance makes us a top mobile apps development agency, delivering reliable and high-performing apps with a seamless user experience across all devices and platforms.",

        },
    },


];

const Offers = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <section className={`${styles.offerSection} pt-100 bgBlack`}>
            <Container>
                <Row>
                    <Col xxl={8} xl={7} lg={10} md={12}>
                        <h2>End-to-End Mobile App Development For Every Stage</h2>
                        <p>As a leading mobile development company, we provide full-cycle services for all stages, with tech expertise to handle simple, medium-complexity, and advanced apps, addressing specific needs throughout each development stage for optimal results.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.tabVertical}>
                            <div className={styles.tabTitle}>
                                <ul>
                                    {tabs.map((tab, index) => (
                                        <li
                                            key={index}
                                            className={index === activeTab ? styles.active : ""}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            <span className={styles.count}>0{index + 1}</span><span className={styles.title}>{tab.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.tabContent}>
                                <h4>{tabs[activeTab].content.heading}</h4>
                                <p>{tabs[activeTab].content.description}</p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Offers