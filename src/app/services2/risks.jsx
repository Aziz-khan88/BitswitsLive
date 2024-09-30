import ButtonCommon from "@/src/components/common/button"
import IMG01 from "media/services/customImg01.webp"
import IMG02 from "media/services/customImg02.webp"
import Link from "next/link"
import styles from "@/styles/services/risks.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"


const Risks = () => {
    return (
        <section className={`${styles.riskSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={12} md={12} className="my-auto text-center">
                        {/* <div className={styles.customTitle}>
                            No risks<Image src={IMG01} alt="Bitswits Services" width={228} height={85} />with an MVP!
                            launch your idea to see
                            how they<Image src={IMG02} alt="Bitswits Services" width={228} height={85} />like it!
                        </div>
                        <p>Start your project with a trusted partner today.</p> */}
                        <div className={styles.customTitle}>
                            Take No Risks <Image src={IMG01} alt="Bitswits Services" width={228} height={85} /> Create An MVP & Be Confident On <Image src={IMG02} alt="Bitswits Services" width={228} height={85} />  Your App!
                        </div>
                        <p>Validate your app concept with minimal risk before launching a full-scale app!</p>

                        <ButtonCommon txt="Free Consultation" />
                        <div className={styles.flexBtn}>
                            <div className={styles.telNumber}>
                                <a href="tel:+18335006007">+1 833 500 6007</a>
                            </div>
                            <div className={styles.emailAddress}>
                                <a href="mailto:info@bitswits.co">info@bitswits.co</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Risks