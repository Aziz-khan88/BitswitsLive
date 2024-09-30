import styles from "@/styles/services/blogs.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowIcon } from '@/src/app/app-constants'
import IMG01 from "media/services/blogs/post-1.webp"
import IMG02 from "media/services/blogs/post-2.webp"
import IMG03 from "media/services/blogs/post-3.webp"
import Image from "next/image"
import Link from "next/link"

const Data = [
    {
        title: "How Much Does It Cost to Develop an App in 2024?",
        txt: "Ever noticed how there’s an app for almost everything? To be precise, there are over four million apps available across iOS and Android platforms, extending to a wide range of sub-genres and niches.",
        cat: "Mobile App Development",
        img: IMG01.src,
        links: "https://www.bitswits.co/blog/mobile-app-development-cost",
        date: "August 29,2024"
    }, {
        title: "Most Popular Mobile App Development Frameworks",
        txt: "You know how people are glued to their phones these days? Apps are like, everywhere. From booking a cab to buying movie tickets, chatting with friends, and nearly everything else in between, we just can’t do without apps.",
        cat: "Mobile App Development",
        img: IMG02.src,
        links: "https://www.bitswits.co/blog/mobile-app-development-frameworks",
        date: "August 13,2024"
    }
    , {
        title: "Everything You Need to Know About Application Development Life Cycle",
        txt: "Frustration with clunky interfaces is a thing of the past. The seamless apps that you are using today for food delivery, banking, or even socializing are created after a well-worked-up development process.",
        cat: "Mobile App Development",
        img: IMG03.src,
        links: "https://www.bitswits.co/blog/application-development-life-cycle",
        date: "July 10,2024"
    }
]



const Blogs = () => {
    return (
        <section className={`${styles.blogsSection} pb-100`}>
            <Container>
                <Row>
                    <Col lg={8} md={12} className='m-auto'>
                        <h2 className='text-center'>Our Related Blog Posts</h2>
                    </Col>
                </Row>
                <Row>
                    {Data.map((item, index) => (
                        <Col lg={4} md={6} className='m-auto' key={index}>
                            <div className={styles.blogBox}>
                                <div className={styles.imgBox}>
                                    <Image src={item.img} alt="Blogs Image" fill />
                                </div>
                                <div className={styles.contentBox}>
                                    <div className={styles.category}>{item.cat}</div>
                                    <h6><Link href={item.links} target="_blank">{item.title}</Link></h6>
                                    <p>{item.txt}</p>
                                    <div className={styles.btnBox}>
                                        <div className={styles.data}>{item.date}</div>
                                        <div className={styles.links}>
                                            <Link href={item.links} target="_blank">Read More <ArrowIcon /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section >
    )
}

export default Blogs