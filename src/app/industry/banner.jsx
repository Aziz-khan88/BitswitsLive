import styles from "@/styles/industry/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import ButtonCommon from "@/src/components/common/button"


const Banner = ({ data }) => {
    return (
        <section className={styles.industryBanner}
            style={{ backgroundImage: `url(${data.BanngBg})` }}
        >
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={10} md={10} className="m-auto text-center">
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <div className={styles.btnFlex}>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <iframe
                src="https://www.youtube.com/embed/3M7slkY8emI?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=3M7slkY8emI"
                title="Background video"
                className={styles.bannerVideo}
                frameBorder="0"
                allow="autoplay; fullscreen"
                aria-label="Background video"
            /> */}

        </section>
    )
}

export default Banner