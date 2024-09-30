import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/process.module.scss"
import { ServiceArrow } from "@/src/app/app-constants"
import Link from "next/link"


const Process = ({ data, list }) => {
    return (
        <section className={`${styles.processSec} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="mt-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.processBox}>
                            {list.map((item, index) => (
                                <div className={styles.processList} key={index}>
                                    <div className={styles.processIcon}>
                                        {item.icon}
                                    </div>
                                    <div className={styles.processContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.txt}</p>
                                    </div>
                                    <div className={styles.viewLinks}>
                                        <Link href="">View More <span className={styles.btnBox}><ServiceArrow /></span></Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Process