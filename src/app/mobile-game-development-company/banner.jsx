import styles from "@/styles/game/banner.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import Image from "next/image"
import ButtonCommon from "@/src/components/common/button"


const Banner = ({ data }) => {
    return (
        <section className={styles.gamebanenrSection}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} md={8} className="my-auto">
                        <div className={styles.subTitle}>{data?.subtitle}</div>
                        <h1>{data?.title}</h1>
                        <p>{data?.content}</p>
                        <div className={styles.bannerLogos}>
                            <Image src={data?.BannerLogos} alt="Bitswits Services" width={757} height={82} />
                        </div>
                        <div className={styles.btnFlex}>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <video autoPlay muted loop preload="auto" aria-label="Background video" className={styles.bannerVideo}>
                <source src='/videos/gameBannerVideo.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    )
}

export default Banner 