"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "@/styles/industry/industryslider.module.scss"
import { ServiceArrow } from "@/src/app/app-constants";
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const OPTIONS = { align: 'start', loop: "true" }

const IndustrySlider = ({ data, list }) => {
    const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };
    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.industrySlider} commonSlider pt-100 pb-50 `}>
            <Container>
                <Row>
                    <Col lg={6} md={7}>
                        <div className="subTitle txtColor">{data?.subtitle}</div>
                        <h2>{data?.title}</h2>
                    </Col>
                    <Col lg={5} md={5} className="my-auto offset-lg-1">
                        <p>{data?.text}</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {list.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.sliderBox}>
                                                <div className={styles.sliderImg}>
                                                    <Image src={item.img} alt={item.title} fill />
                                                </div>
                                                <div className={styles.sliderTxt}>
                                                    <h5>{item.title}</h5>
                                                    <p>{item.txt}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="embla_container">
                                <div className="embla_prev" onClick={prevButtonHandler}>
                                    <ServiceArrow direction="prev" />
                                </div>
                                <div className="embla_next" onClick={nextButtonHandler}>
                                    <ServiceArrow direction="next" />
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default IndustrySlider
