import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/solutions.module.scss"
import Link from "next/link"
import { ServiceArrow } from "@/src/app/app-constants"

 
const Solutions = ({ data, list }) => {
    return (
        <section className={`${styles.solutionsSection} p-100`}>
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
                <Row className={styles.solutoinmainBox}>
                    {list.map((item, index) => (
                        <Col lg={3} md={4} key={index}>
                            <div className={styles.solutoinBox}>
                                <div className={styles.title}>{item.title}</div>
                                <Link href="" className={styles.Link}>
                                    <span className={styles.btnBox}><ServiceArrow /></span>
                                </Link>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default Solutions