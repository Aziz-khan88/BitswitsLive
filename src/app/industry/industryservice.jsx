
"use client"
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/industry/industryservices.module.scss"
import PopUp from "@/src/app/services/popup";
import { useState } from 'react';

const IndustryService = ({ data, list }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(true);
    };
    return (
        <section className={`p-100 ${styles.industryServices}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={10} md={10} className="m-auto text-center">
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                    <Col lg={12} md={12}>
                        <div className={styles.servicesBox}>
                            {list.map((item, index) => (
                                <div className={styles.servicesItem} key={index}>
                                    <h4>{item.title}</h4>
                                    <p>{item.txt}</p>
                                    <div className={styles.normalButton} onClick={() => handleClick()}>
                                        <div className={styles.linksBtn}>Let’s Do This!</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={modalShow} onHide={() => setModalShow(false)} />
        </section>
    )
}

export default IndustryService