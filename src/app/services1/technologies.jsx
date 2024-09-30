import styles from "@/styles/services/technologies.module.scss"
import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import Icon01 from "media/services/tech/1.webp"
import Icon02 from "media/services/tech/2.webp"
import Icon03 from "media/services/tech/3.webp"
import Icon04 from "media/services/tech/4.webp"
import Icon05 from "media/services/tech/5.webp"
import Icon06 from "media/services/tech/6.webp"
import Icon07 from "media/services/tech/7.webp"
import Icon08 from "media/services/tech/8.webp"
import TechImg from "media/services/techImg.webp"
import ButtonCommon from "@/src/components/common/button1"

const Icons = [
    {
        title: "iOS",
        icons: Icon01.src,
    },
    {
        title: "Android",
        icons: Icon02.src,
    },
    {
        title: "Flutter",
        icons: Icon03.src,
    },
    {
        title: "Kotlin",
        icons: Icon04.src,
    },
    {
        title: "Objective C",
        icons: Icon05.src,
    },
    {
        title: "ionic",
        icons: Icon06.src,
    },
    {
        title: "React Native",
        icons: Icon07.src,
    },
    {
        title: "Swift",
        icons: Icon08.src,
    },
]
const Technologies = ({ setModalShow }) => {
    return (
        <section className={`${styles.technologiesSection} p-100`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={7} md={12} className="my-auto">
                        <h2>Hire BitsWits Mobile App Developers To Stay Ahead of The Technology Curve</h2>
                        <p>With over <strong>150+ successful projects</strong> delivered, our experienced team achieves a <strong>30% faster time to market</strong> while maintaining cost efficiency.
                            We have a <strong>95% client satisfaction rate,</strong> reflecting our commitment to delivering high-quality solutions. </p>
                        <p>Focusing on robust security, our approach safeguards your valuable data. Our high-performance apps are built to <strong>handle heavy traffic,</strong> providing the scalability needed for business growth.Choosing us means opting for a trusted partner dedicated to meeting your mobile app development needs effectively.</p>
                        <div className={styles.techSec}>

                            {Icons.map((item, index) => (
                                <div className={styles.techIcon} key={index}>
                                    <div className={styles.iconBox}>
                                        <Image src={item.icons} alt="Icon Box" width={50} height={50} />
                                    </div>
                                    <div className={styles.iconTitle}>
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ButtonCommon txt="Free Consultation" setModalShow={setModalShow} />
                    </Col>
                    <Col lg={4} md={12} className="my-auto offset-lg-1">
                        <Image src={TechImg} alt="TechImg Box" width={500} height={743} className={styles.ImgPhone} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Technologies