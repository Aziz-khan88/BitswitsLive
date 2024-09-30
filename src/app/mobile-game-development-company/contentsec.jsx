
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/game/contentsection.module.scss"
import ButtonCommon from '@/src/components/common/button'
import Image from 'next/image'

const ContentSec = ({data}) => {
    return (
        <section className={`${styles.contentSection} p-50`}>
            <Container>
                <Row>
                    <Col lg={6} md={5} className='my-auto order-2 order-md-1' >
                        <Image src={data.ContentSecIMG} alt="Bitswits Services" width={1340} height={1006} />
                    </Col>
                    <Col lg={6} md={7} className='my-auto order-1 order-md-2'>
                        <div className={styles.contentBox}>
                            <h2>{data?.title}</h2>
                            {data?.text}
                            <ButtonCommon txt="Free Consultation" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContentSec