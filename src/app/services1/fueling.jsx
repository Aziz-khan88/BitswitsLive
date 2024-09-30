import IMG from "media/services/cuttingEdge.webp"
import styles from "@/styles/services/fueling.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button1"

const Fueling = ({ setModalShow }) => {
    return (
        <section className={`${styles.fuelingSection} p-100 bgBlack`}>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className={styles.fuelingSickty}>
                            <h2>In-App Features That Your Users Are Looking For!</h2>
                            <p>As a leading mobile development agency, we deliver all the must-have features, from user-friendly interfaces to advanced security, creating apps that meet modern user needs and support business growth.</p>
                            <div className={styles.fuelingBox}>
                                <div className={styles.boxContent}>
                                    <h5>Reduce Risk and Validate Your Idea With a Fast MVP Launch!</h5>
                                    <p>BitsWits takes a hands-on approach to guide your project, providing expertise and support at every stage!</p>
                                </div>
                                <div className={styles.boxImg}>
                                    <Image src={IMG.src} alt="Bitswits Services" width={350} height={290} />
                                </div>
                            </div>
                            <ButtonCommon txt="Free Consultation" setModalShow={setModalShow} />
                        </div>
                    </Col>
                    <Col lg={5} md={6} className="offset-lg-1">
                        <div className={styles.fuelingSidebar}>
                            <div className={styles.sicktyItem}>
                                <h5>Geolocation Management</h5>
                                <p>We integrate geolocation features to enhance user experience with real-time tracking, location-based services, and navigation. Our expert-vetted developers create apps that provide personalized content, route optimization, and proximity alerts to boost engagement and functionality.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Payments</h5>
                                <p>As one of the trusted mobile app development companies, we implement secure payment solutions that support methods like credit cards, digital wallets, and in-app purchases. We also use reliable payment gateways, such as Stripe and PayPal, to create seamless, user-friendly transactions that enhance conversion rates.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Messaging and Calling</h5>
                                <p>We build robust messaging and voice/video calling features into apps, enabling real-time communication. Our team utilizes WebRTC, Twilio, and other APIs to deliver reliable, high-quality chat and calling experiences across all devices.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Multi-device Synchronization</h5>
                                <p>Hire mobile app developers from BitsWits to implement multi-device synchronization, allowing users to access data and continue activities seamlessly across devices. This approach enhances user convenience and engagement by providing a consistent experience across all platforms.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Chatbots</h5>
                                <p>We design and integrate intelligent chatbots to provide instant customer support and engagement. Utilizing AI and NLP, our chatbots enhance user interaction, automate responses, and handle queries efficiently, improving overall customer satisfaction and retention.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Immersive Experience</h5>
                                <p>We create immersive app experiences using AR, VR, and 3D graphics to engage users deeply. Our expertise includes developing interactive, visually appealing elements that captivate audiences and provide memorable, innovative experiences across various app categories.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Push Notifications</h5>
                                <p>Our team integrates push notifications to keep users informed and engaged. We develop customizable notification systems for personalized updates, promotional offers, and reminders, which drive user retention and enhance overall app engagement effectively.</p>
                            </div>
                            <div className={styles.sicktyItem}>
                                <h5>Scheduling and Booking</h5>
                                <p>We build efficient scheduling and booking features, catering to various business needs such as appointments, reservations, and service bookings. As a leading mobile app agency, our expertise includes integrating calendar sync, reminders, and real-time availability, offering a seamless and user-friendly experience.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Fueling