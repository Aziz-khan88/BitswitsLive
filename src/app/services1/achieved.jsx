"use client"
import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/services/achieved.module.scss"
import { ArrowIcon } from '@/src/app/app-constants'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Achieved = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);

    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.achievedSection} pt-100`}>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <h2>Awards That Validate Our Impactful App Solutions</h2>
                        <p>We have earned awards and recognition for our quality-first approach, successfully delivering advanced, complex projects with a talented team of developers, designers, and project managers.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>

                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.achievedCard} key={index}>
                                                <div className={styles.achievedImg}>
                                                    <Image src={item.img} alt="Achieved Logo" width={120} height={120} />
                                                </div>
                                                <div className={styles.achievedContent}>
                                                    <div className={styles.data}>
                                                        {item.year}
                                                        <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.embla_container}>
                                <div className={styles.embla_prev} onClick={prevButtonHandler}>
                                    <ArrowIcon direction="prev" />
                                </div>
                                <div className={styles.embla_next} onClick={nextButtonHandler}>
                                    <ArrowIcon direction="next" />
                                </div>
                            </div>
                        </section>

                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default Achieved