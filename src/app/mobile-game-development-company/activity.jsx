import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/game/activity.module.scss"


const Activity = () => {
    return (
        <section className={styles.activitySection}>
            <Container>
                <Row>
                    <Col lg={10} md={12} className="m-auto">
                        <div className={`${styles.activityBox} commongradientBG`}>
                            <div className={styles.activityitem}>
                                60K
                                <span>Our Active User</span>
                            </div>
                            <div className={styles.activityitem}>
                                67K
                                <span>Our Active User</span>
                            </div>
                            <div className={styles.activityitem}>
                                47K
                                <span>Our Active User</span>
                            </div>
                            <div className={styles.activityitem}>
                                42K
                                <span>Our Active User</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Activity