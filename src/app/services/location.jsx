"use client"
import { Col, Container, Row } from 'react-bootstrap'
import useEmblaCarousel from 'embla-carousel-react'
import styles from "/styles/services/location.module.scss"
import Link from 'next/link'
import { ArrowIcon, EmailIcon, PhoneIcon } from '@/src/app/app-constants'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

// Location Images
import Dubai from "media/locations/Dubai.webp"
import Chicago from "media/locations/Chicago.webp"
import Houston from "media/locations/Houston.webp"
import LosAngeles from "media/locations/LosAngeles.webp"
import Miami from "media/locations/Miami.webp"
import NewYork from "media/locations/NewYork.webp"
import SanFrancisco from "media/locations/SanFrancisco.webp"
import Toronto from "media/locations/Toronto.webp"
import Dallas from "media/locations/Dallas.webp"
import Qatar from "media/locations/Qatar.webp"
import Bahrain from "media/locations/Bahrain.webp"
import Pierre from "media/locations/Pierre.webp"
import Sharjah from "media/locations/Sharjah.webp"


const OPTIONS = { align: 'start', loop: "true" }

const LocationList = [
    {
        state: "Houston",
        add: "2800 Post Oak Blvd STE 4100, Houston, TX 77056, United States",
        phone: "+1 833 500 6007",
        email: "info@bitswits.co",
        img: Houston.src,
        off: "Head Office"
    },
    {
        state: "Chicago",
        add: "141 W Jackson Blvd STE 300 A, Chicago, IL 60604, United States",
        phone: "+1 210 294 9230",
        email: "info@bitswits.co",
        img: Chicago.src,
        off: "Head Office"
    },
    {
        state: "Dubai",
        add: "Offaaaaaa 1402, JBC 3 Cluster Y, Jumeirah Lake Towers Dubai UAE",
        phone: "+971 55 503 1266",
        email: "info@bitswits.co",
        img: Dubai.src,
        off: "Head Office"
    },
    {
        state: "Los Angeles",
        add: "1425 Flower St, Los Angeles, CA 90015, United States",
        phone: "+1 210 294 9230",
        email: "info@bitswits.co",
        img: LosAngeles.src,
        off: "Head Office"
    },
    {
        state: "Miami",
        add: "601 Brickell Key Dr #700, Miami, FL 33131, United States",
        phone: "+1 302 216 8231",
        email: "info@bitswits.co",
        img: Miami.src,
        off: "Head Office"
    },
    {
        state: "New York",
        add: "26 Broadway Suite 934, New York, NY 10004, United States",
        phone: "+1 210 294 9230",
        email: "info@bitswits.co",
        img: NewYork.src,
        off: "Head Office"
    },
    {
        state: "San Francisco",
        add: "488 Folsom St, San Francisco, CA 94105, United States",
        phone: "+1 210 294 9230",
        email: "info@bitswits.co",
        img: SanFrancisco.src,
        off: "Head Office"
    },
    {
        state: "Toronto",
        add: "512 Wellington St W, Toronto, ON M5V 1E3, Canada",
        phone: "+1 302 216 8231",
        email: "info@bitswits.co",
        img: Toronto.src,
        off: "Head Office"
    },
    {
        state: "Dallas",
        add: "1341 W Mockingbird Ln, Dallas, TX 75247, United States",
        phone: "+1 210 294 9230",
        email: "info@bitswits.co",
        img: Dallas.src,
        off: "Head Office"
    },
    {
        state: "Qatar",
        add: "51 Al Miqdad St, Doha, Qatar",
        phone: "+971 55 503 1266",
        email: "info@bitswits.co",
        img: Qatar.src,
        off: "Head Office"
    },
    {
        state: "Bahrain",
        add: "2139 Hoora Ave, Manama 973, Bahrain",
        phone: "+971 55 503 1266",
        email: "info@bitswits.co",
        img: Bahrain.src,
        off: "Head Office"
    },
    {
        state: "Pierre",
        add: "124 W Dakota Ave, Pierre, SD 57501, United States",
        phone: "+1 312 379 5987",
        email: "info@bitswits.co",
        img: Pierre.src,
        off: "Head Office"
    },
    {
        state: "Sharjah",
        add: "office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE",
        phone: "+971 55 503 1266",
        email: "info@bitswits.co",
        img: Sharjah.src,
        off: "Head Office"
    },
]

const Location = () => {
    const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [Autoplay()]);
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
                        <h2>Our Global Presence</h2>
                        <section className={styles.embla}>
                            <div className={styles.embla__viewport} ref={emblaRef}>
                                <div className={styles.embla__container}>
                                    {LocationList.map((item, index) => (
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
                                                    <ul>
                                                        <li>
                                                            <Link href={`tel:${item.phone}`}>
                                                                <PhoneIcon />
                                                                {item.phone}
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href={`mailto:${item.email}`}>
                                                                <EmailIcon />
                                                                {item.email}
                                                            </Link>
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