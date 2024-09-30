import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/engagement.module.scss"
import Link from "next/link"


const Engagement = ({ data, listDetail, list }) => {
    return (
        <section className={`${styles.engagementSolution} p-100`}>
            <Container>
                <Row>
                    <Col lg={7} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="my-auto">
                        <p>{data?.content}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.engagementBox}>
                            <div className={styles.engagementItem}>
                                <div className={styles.mainTitle}>

                                </div>
                                <div className={styles.mainItemList}>
                                    {listDetail.map((item, index) => (
                                        <div key={index}>{item}</div>
                                    ))}
                                </div>
                                <div className={styles.mainButtton}>

                                </div>
                            </div>
                            {list.map((item, index) => (
                                <div className={styles.engagementItem} key={index}>
                                    <div className={styles.mainTitle}>
                                        {item?.logo}
                                        <h6>{item?.title}</h6>
                                    </div>
                                    <div className={styles.mainItemList}>
                                        {item.detail.map((item, index) => (
                                            <div key={index}>{item}</div>
                                        ))}
                                    </div>
                                    <div className={styles.mainButtton}>
                                        <Link href="">Read More</Link>
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

export default Engagement