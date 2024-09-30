import ButtonCommon from "@/src/components/common/button"
import styles from "@/styles/industry/Industrycta.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import CTABG from "media/industry/ctaImage.webp"

const IndustryCta = ({ data }) => {
    return (
        <section className={styles.industryCta} >
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={styles.industrySec} style={{ backgroundImage: `url(${data?.image || CTABG.src})` }}>
                            <div className={styles.industryContent}>
                                <h2>{data?.title}</h2>
                                <p>{data?.text}</p>
                                <ButtonCommon txt="Free Consultation" color={true} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IndustryCta