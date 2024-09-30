import styles from "@/styles/layout/footer.module.scss"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import CopyRight from "@/src/app/layout/copyright"
import Location from "@/src/app/services/location";

const About = [
    {
        title: "Our Company",
        Links: "#"
    },
    {
        title: "Core Team",
        Links: "#"
    },
    {
        title: "How we work",
        Links: "#"
    },
    {
        title: "Success story",
        Links: "#"
    }

]
const Services = [
    {
        title: "Ios App Development",
        Links: "#"
    },
    {
        title: "Mobile App Development",
        Links: "#"
    },
    {
        title: "Android App Development",
        Links: "#"
    },
    {
        title: "Flutter App Development",
        Links: "#"
    },
    {
        title: "React Native App Development",
        Links: "#"
    },
    {
        title: "Hybrid Mobile Apps Development",
        Links: "#"
    },
    {
        title: "Cross Platform App Development",
        Links: "#"
    },
    {
        title: "Web App Development",
        Links: "#"
    }

]
const Technologies = [
    {
        title: "Game App Development",
        Links: "#"
    },
    {
        title: "2D Game Development",
        Links: "#"
    },
    {
        title: "3D Game Development",
        Links: "#"
    },

    {
        title: "NFT Game Development",
        Links: "#"
    },

    {
        title: "Blockchain Game Development",
        Links: "#"
    },
    {
        title: "Blockchain Development",
        Links: "#"
    },

    {
        title: "Artificial Intelligence",
        Links: "#"
    },
    {
        title: "Social Media App Development",
        Links: "#"
    },
    {
        title: "",
        Links: "#"
    },
    {
        title: "",
        Links: "#"
    }
]
const Industries = [
    {
        title: "Healthcare",
        Links: "#"
    },
    {
        title: "E-Commerce",
        Links: "#"
    },
    {
        title: "Education",
        Links: "#"
    },
    {
        title: "Banking",
        Links: "#"
    },
    {
        title: "Lifestyle",
        Links: "#"
    },
    {
        title: "Sports",
        Links: "#"
    },
    {
        title: "Restaurants",
        Links: "#"
    },
    {
        title: "Travel",
        Links: "#"
    }
]
const MainLinks = [

    {
        title: "Contact Us",
        Links: "#"
    },
    {
        title: "About Us",
        Links: "#"
    },
    {
        title: "Works",
        Links: "#"
    },
    {
        title: "Privacy Policy",
        Links: "#"
    },
    {
        title: "Terms & Conditions",
        Links: "#"
    },
    {
        title: "Blogs",
        Links: "#"
    }
]


const Footer = () => {
    return (
        <>
            {/* <section className={`${styles.footerSection} bgBlack pb-50`}>
                <Container>
                    <Row>
                        <Col lg={12} md={12}>
                            <div className={styles.footerMainBox}>
                                <div className={styles.linksItem}>
                                    <h6>About</h6>
                                    <ul>
                                        {About.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.Links}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.linksItem}>
                                    <h6>Services</h6>
                                    <ul>
                                        {Services.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.Links}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.linksItem}>
                                    <h6>Technologies</h6>
                                    <ul>
                                        {Technologies.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.Links}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.linksItem}>
                                    <h6>Industries</h6>
                                    <ul>
                                        {Industries.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.Links}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.linksItem}>
                                    <h6>MainLinks</h6>
                                    <ul>
                                        {MainLinks.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.Links}>{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <Location />
            <CopyRight />
        </>
    )
}

export default Footer