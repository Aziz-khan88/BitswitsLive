import ContactFrom from '@/src/components/common/contactfrom'
import styles from '@/styles/services/ideacta.module.scss'
import { Col, Container, Row } from "react-bootstrap"


const IdeaCta = () => {
    return (
        <section className={`${styles.appideaSection} p-50`} id="Contact">
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col lg={6} md={6} className='m-auto'>
                        <div className={styles.boxItem}>
                            <h2>Let’s Change The World With Your</h2>
                            <div className={styles.custumTitle}>
                                App <span>Idea!</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={6}>
                        <div className={styles.ideaBox}>
                            <h5>Get Free Consultation</h5>
                            <ContactFrom appidea={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IdeaCta