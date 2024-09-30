"use client"
import { useState } from 'react';
import styles from "@/styles/game/services.module.scss";
import Link from "next/link";
import { Col, Container, Row } from 'react-bootstrap'
import { ReadArrow } from "@/src/app/app-constants"
import Image from "next/image";




const Services = ({ data, list }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleServiceClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <section className={`${styles.servicesSection} p-100`}>
            <Container>
                <Row className={styles.serviceMargin}>
                    <Col lg={6} md={6}>
                        <h2>{data?.title}</h2>
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} md={7}>
                        <div className={styles.servicesBox}>
                            {list.map((item, index) => (
                                <div
                                    className={`${styles.servicesItem} ${activeIndex === index ? styles.active : ''}`}
                                    key={index}
                                    onClick={() => handleServiceClick(index)}
                                >
                                    <h5>{item.title}</h5>
                                    <p>{item.txt}</p>
                                    <div className={styles.arrowBtn}>
                                        <Link href={item.links}>
                                            <ReadArrow />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>
                    <Col lg={5} md={5}>
                        <div className={`${styles.gameBG} ${styles.active}`}>
                            <Image src={list[activeIndex].Img} alt={list[activeIndex].title} width={1356} height={1852} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services