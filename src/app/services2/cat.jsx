import styles from "@/styles/services/cat.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import ButtonCommon from "@/src/components/common/button";
import IMG from "media/services/ctaImg.webp"
import Image from "next/image";


const CtaEstimated = () => {
    return (
        <section className={`${styles.catSection} pb-100 bgBlack`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={12} className="my-auto">
                        <div className={styles.catVertical}>
                            <div className={styles.ctaContent}>
                                <div className={styles.subTitle}>
                                    App Development Costs: From Simple to Complex
                                </div>
                                <div className={styles.mainTitle}>
                                    Your App’s Cost, Simplified
                                </div>
                                <p>Get an instant estimate for your app’s development based on its complexity. Mobile apps typically range from <span>$10k to $100k+</span>. Ready for a precise quote? Contact us today! </p>
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                            <div className={styles.ctaImg}>
                                <Image src={IMG.src} alt="Bitswits Services" fill />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CtaEstimated