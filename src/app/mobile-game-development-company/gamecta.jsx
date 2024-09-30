import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/gamecat.module.scss"
import ButtonCommon from '@/src/components/common/button'
import BGIMG from "media/mobile-game-development-company/gamecta.webp"

const GameCta = ({data}) => {
    return (
        <section className={`${styles.ctaSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={12} className='m-auto text-center'>
                        <div className={styles.ctaBG} style={{ backgroundImage: `url(${BGIMG.src})` }}>
                            <div className={styles.catConntent}>
                                {data?.title}
                                <ButtonCommon txt="Free Consultation" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GameCta