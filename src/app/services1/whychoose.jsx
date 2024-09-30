import ButtonCommon from "@/src/components/common/button1"
import styles from "@/styles/services/whychoose.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import { WhyChooseIcon01, WhyChooseIcon02, WhyChooseIcon03, WhyChooseIcon04 } from "@/src/app/app-constants"


const WhyChoose = ({ setModalShow }) => {
    return (
        <section className={`${styles.whychooseSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={5} md={12} className="my-auto">
                        <h2>App Development Company Of Choice</h2>
                        <p>BitsWits provides exceptional mobile application development services, combining quality, expertise, and efficiency. As a leading mobile app development agency, we create scalable, user-centric apps designed to drive business growth and deliver successful results. Here’s why you should partner with us.</p>
                        <ButtonCommon txt="Free Consultation" setModalShow={setModalShow} />
                    </Col>
                    <Col lg={3} md={6} className="my-auto offset-lg-1 mt-md-0 mt-4 ">
                        <div className={styles.whyBox}>
                            <div className={styles.whyItem}>
                                <div className={styles.whyTitle}>
                                    <div className={styles.whyIcon}><WhyChooseIcon03 /></div>
                                    <div className={styles.whyHeading}>
                                        End-to-End<br />Development
                                    </div>
                                </div>
                                <p>
                                    We offer complete mobile app solutions, from initial concept to final deployment, for smooth delivery and project success.
                                </p>
                            </div>
                            <div className={styles.whyItem}>
                                <div className={styles.whyTitle}>
                                    <div className={styles.whyIcon}><WhyChooseIcon01 /></div>
                                    <div className={styles.whyHeading}>
                                        100% <br />
                                        Transparency
                                    </div>
                                </div>
                                <p>
                                    As a trustworthy mobile app development firm, we keep clients fully informed throughout the development process, promoting open collaboration.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className={styles.whyBoxMargin}>
                        <div className={styles.whyBox}>
                            <div className={styles.whyItem}>
                                <div className={styles.whyTitle}>
                                    <div className={styles.whyIcon}><WhyChooseIcon04 /></div>
                                    <div className={styles.whyHeading}>
                                        High Retention<br />
                                        Rate
                                    </div>
                                </div>
                                <p>
                                    Our dedicated developers have been with us for years, providing stability and security for your mobile app projects.
                                </p>
                            </div>
                            <div className={styles.whyItem}>
                                <div className={styles.whyTitle}>
                                    <div className={styles.whyIcon}><WhyChooseIcon02 /></div>
                                    <div className={styles.whyHeading}>
                                        4.5/5 Average<br />
                                        Rating
                                    </div>
                                </div>
                                <p>
                                    Our high ratings on Google Play and the App Store highlight our credibility as a mobile app development company in USA.
                                </p>
                            </div>
                        </div>

                    </Col>
                </Row>

            </Container>
        </section>
    )
}

export default WhyChoose