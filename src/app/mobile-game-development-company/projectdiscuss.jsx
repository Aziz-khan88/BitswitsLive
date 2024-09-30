import ContactFrom from "@/src/components/common/contactfrom";
import styles from "@/styles/game/projectdiscuss.module.scss";
import { Col, Container, Row } from 'react-bootstrap'

const Projectdiscuss = ({ data }) => {
    return (
        <section className={`${styles.discussionSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={9} className="m-auto text-center">
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.fromSection}>
                            <ContactFrom discussion={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projectdiscuss