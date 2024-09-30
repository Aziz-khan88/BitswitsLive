"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "/styles/services/location.module.scss"
import Link from 'next/link'
import { ArrowIcon, EmailIcon, PhoneIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


const Location = (props) => {
    const { slides, options } = props
    const [emblaRef, embla] = useEmblaCarousel(options, [Autoplay()]);
    const prevButtonHandler = () => {
        if (embla) embla.scrollPrev();
    };

    const nextButtonHandler = () => {
        if (embla) embla.scrollNext();
    };
    return (
        <section className={`${styles.locationSection} bgBlack pt-100`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <h2>Our Global Presence </h2>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {slides.map((item, index) => (
                                        <div className={styles.embla__slide} key={index}>
                                            <div className={styles.locationBox}>
                                                <div className={styles.imgBox}>
                                                    <Image src={item.img} alt="Houston" fill />
                                                    <div className={styles.locationTitle}>
                                                        {item.state}
                                                    </div>
                                                </div>

                                                <div className={styles.locationContent}>
                                                    {/* <div className={styles.locOffice}>{item.off}</div> */}
                                                    <div className={styles.locState}>{item.state}</div>
                                                    <div className={styles.locAdd}>{item.add}</div>
                                                    <ul>{item?.phone ?
                                                        <li>
                                                            <a href={`tel:${item.phone}`}>
                                                                <PhoneIcon />
                                                                {item?.phone}
                                                            </a>
                                                        </li>
                                                        : null
                                                    }
                                                        <li>
                                                            <a href={`mailto:${item.email}`}>
                                                                <EmailIcon />
                                                                {item?.email}
                                                            </a>
                                                        </li>
                                                    </ul>
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
        </section >
    )
}

export default Location