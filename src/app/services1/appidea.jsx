import styles from "@/styles/services/appidea.module.scss"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import IMG from "media/services/BitsWitsImg.webp"
import ContactFrom from "@/src/components/common/contactfrom"


const AppIdea = () => {
    return (
        <section className={`${styles.appideaSection} p-50`} id="GetFreeConsultation">
            <Container>
                <Row>
                    <Col lg={6} md={6} className="order-md-1 order-2">
                        <div className={styles.imgBox}>
                            <Image src={IMG.src} alt="Bitswits Services" width={680} height={744} />
                        </div>
                    </Col>
                    <Col lg={6} md={6} className="order-md-2 order-1">
                        <h2>Build Your MVP with a Winning Strategy!</h2>
                        <p>Take the first step toward creating a cost-effective MVP. Ready to dominate? Book a free session and see how we build powerful apps!</p>
                        <div className={styles.appIdeaFrom}>
                            <ContactFrom idea={true} />
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </section>
    )
}

export default AppIdea