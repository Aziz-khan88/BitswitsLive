"use client";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/services/techstack.module.scss";
import Image from "next/image";
import D1 from "media/services/tech/Design/01.webp";
import D2 from "media/services/tech/Design/02.webp";
import D3 from "media/services/tech/Design/03.webp";
import D4 from "media/services/tech/Design/04.webp";
import D5 from "media/services/tech/Design/05.webp";
import D6 from "media/services/tech/Design/06.webp";
import FE1 from "media/services/tech/FrontEnd/01.webp";
import FE2 from "media/services/tech/FrontEnd/02.webp";
import FE3 from "media/services/tech/FrontEnd/03.webp";
import FE4 from "media/services/tech/FrontEnd/04.webp";
import FE5 from "media/services/tech/FrontEnd/05.webp";
import FE6 from "media/services/tech/FrontEnd/06.webp";
import FE7 from "media/services/tech/FrontEnd/07.webp";
import FE8 from "media/services/tech/FrontEnd/08.webp";
import BE1 from "media/services/tech/BackEnd/01.webp";
import BE2 from "media/services/tech/BackEnd/02.webp";
import BE3 from "media/services/tech/BackEnd/03.webp";
import BE4 from "media/services/tech/BackEnd/04.webp";
import BE5 from "media/services/tech/BackEnd/05.webp";
import BD1 from "media/services/tech/Database/01.webp";
import BD2 from "media/services/tech/Database/02.webp";
import BD3 from "media/services/tech/Database/03.webp";
import BD4 from "media/services/tech/Database/04.webp";
import BD5 from "media/services/tech/Database/05.webp";
import BD6 from "media/services/tech/Database/06.webp";
import CD1 from "media/services/tech/Cloud/01.webp";
import CD2 from "media/services/tech/Cloud/02.webp";
import CD3 from "media/services/tech/Cloud/03.webp";
import CD4 from "media/services/tech/Cloud/04.webp";
import CD5 from "media/services/tech/Cloud/05.webp";
import CD6 from "media/services/tech/Cloud/06.webp";
import CD7 from "media/services/tech/Cloud/07.webp";
import FW1 from "media/services/tech/Framework/01.webp";
import FW2 from "media/services/tech/Framework/02.webp";
import FW3 from "media/services/tech/Framework/03.webp";
import FW4 from "media/services/tech/Framework/04.webp";
import FW5 from "media/services/tech/Framework/05.webp";
import FW6 from "media/services/tech/Framework/06.webp";
import FW7 from "media/services/tech/Framework/07.webp";
import FW8 from "media/services/tech/Framework/08.webp";
import PM1 from "media/services/tech/PM/01.webp";
import PM2 from "media/services/tech/PM/02.webp";
import PM3 from "media/services/tech/PM/03.webp";
import PM4 from "media/services/tech/PM/04.webp";
import PM5 from "media/services/tech/PM/05.webp";
import PM6 from "media/services/tech/PM/06.webp";


const tabs = [
    {
        title: "Design",
        content: [
            {
                heading: "Adobe XD",
                img: D1.src,
            },
            {
                heading: "Adobe Illustrator",
                img: D2.src,
            },
            {
                heading: "Balsamiq",
                img: D3.src,
            },
            {
                heading: "InVision",
                img: D4.src,
            },
            {
                heading: "Figma",
                img: D5.src,
            },
            {
                heading: "Adobe Photoshop",
                img: D6.src,
            },
        ],
    },
    {
        title: "Front-end",
        content: [
            {
                heading: "Flutter",
                img: FE1.src,
            },
            {
                heading: "React Native",
                img: FE2.src,
            },
            {
                heading: "Ionic",
                img: FE3.src,
            },
            {
                heading: "Swift",
                img: FE4.src,
            },
            {
                heading: "TypeScript",
                img: FE5.src,
            },
            {
                heading: "Xamarin",
                img: FE6.src,
            },
            {
                heading: "HTML5",
                img: FE7.src,
            },
            {
                heading: "Kotlin",
                img: FE8.src,
            },


        ],
    },
    {
        title: "Back-end",
        content: [
            {
                heading: "Laravel",
                img: BE1.src,
            },
            {
                heading: "Node.js",
                img: BE2.src,
            },
            {
                heading: ".NET Core",
                img: BE3.src,
            },
            {
                heading: "Ruby on Rails",
                img: BE4.src,
            },
            {
                heading: "Django",
                img: BE5.src,
            },
        ],
    },
    {
        title: "Database",
        content: [
            {
                heading: "Firebase",
                img: BD1.src,
            },
            {
                heading: "MongoDB",
                img: BD2.src,
            },
            {
                heading: "MySQL",
                img: BD3.src,
            },
            {
                heading: "Swift",
                img: BD4.src,
            },
            {
                heading: "Oracle",
                img: BD5.src,
            },
            {
                heading: "PostgreSQL",
                img: BD6.src,
            },
        ],
    },
    {
        title: "Cloud",
        content: [
            {
                heading: "Google Cloud Platform",
                img: CD1.src,
            },
            {
                heading: "AWS",
                img: CD2.src,
            },
            {
                heading: "Linode",
                img: CD3.src,
            },
            {
                heading: "IBM Cloud",
                img: CD4.src,
            }, {
                heading: "Vercel",
                img: CD5.src,
            },
            {
                heading: "Microsoft Azure",
                img: CD6.src,
            },
            {
                heading: "Firebase",
                img: CD7.src,
            },

        ],
    },
    {
        title: "Framework",
        content: [
            {
                heading: "React Native",
                img: FW1.src,
            },
            {
                heading: "Flutter",
                img: FW2.src,
            },
            {
                heading: "Ionic",
                img: FW3.src,
            },
            {
                heading: "Xamarin",
                img: FW4.src,
            },
            {
                heading: "Apache Cordova",
                img: FW5.src,
            },
            {
                heading: "Android Studio",
                img: FW6.src,
            },
            {
                heading: "Visual Studio",
                img: FW7.src,
            },
            {
                heading: "Xcode",
                img: FW8.src,
            },

        ],
    },
    {
        title: "Project Management",
        content: [
            {
                heading: "Teamwork",
                img: PM1.src,
            },
            {
                heading: "Basecamp",
                img: PM2.src,
            },
            {
                heading: "Jira",
                img: PM3.src,
            },
            {
                heading: "Asana",
                img: PM4.src,
            },
            {
                heading: "Trello",
                img: PM5.src,
            },
            {
                heading: "PM Tools",
                img: PM6.src,
            },

        ],
    },
];



const TechStack = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={`${styles.stackSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={12} className="text-center m-auto">
                        <h2>Our Tech Stack For Mobile App Development</h2>
                        <p>We use the latest tools and technologies to deliver secure and resilient mobile apps!</p>
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
                            {tabs[activeTab].content.map((item, index) => (
                                <div className={styles.tabtxtBox} key={index}>
                                    <div className={styles.txtImg}>
                                        <Image
                                            src={item.img}
                                            alt={item.heading}
                                            height={80}
                                            width={80}
                                        />
                                    </div>
                                    <div className={styles.txtTitle}>
                                        {item.heading}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TechStack;
