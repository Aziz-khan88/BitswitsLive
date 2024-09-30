
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/largesection.module.scss"
import ButtonCommon from '@/src/components/common/button'

import Image from 'next/image'

const ContentSecLG = ({ data }) => {
    return (
        <section className={`${styles.largecContentSec} p-50 bgBlack`}>
            <Container>
                <Row>

                    <Col xl={6} lg={7} md={6} className='my-auto'>
                        <div className={styles.contentBox}>
                            <h2>{data?.title}</h2>
                            <div className={styles.contentscrollBox}>
                                {data?.text}
                            </div>
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                    <Col xl={5} lg={5} md={6} className='m-auto text-center' >
                        <Image src={data?.BGIMG} alt="Bitswits Services" width={989} height={1100} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSecLG