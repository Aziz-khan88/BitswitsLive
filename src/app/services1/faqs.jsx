"use client"
import { useState } from 'react';
import styles from '@/styles/services/faqs.module.scss';
import { Col, Container, Row } from "react-bootstrap";
import { FaqsArrows } from '../app-constants';

const faqs = [
    {
        title: "How long does it typically take to develop a mobile app?",
        txt: "Development time varies by complexity. Simple apps can take 1-3 months, while complex ones may require 6-12 months or longer, depending on features, design, and testing requirements."
    },
    {
        title: "How can I monitor the progress of my outsourced project with BitsWits?",
        txt: "We provide regular updates, progress reports, and access to project management tools. You'll have a dedicated project manager for clear communication and visibility throughout the development process."
    },
    {
        title: "Can you integrate existing systems with a new mobile app?",
        txt: "Yes, mobile apps can be integrated with existing systems like CRM, ERP, and databases to ensure seamless data flow and functionality, enhancing overall business operations."
    },
    {
        title: "What is your policy on intellectual property and app ownership?",
        txt: "We transfer full intellectual property rights and app ownership to you upon project completion. All code, designs, and assets belong to you, ensuring full control and security."
    }
    ,
    {
        title: "What is the cost range for developing a custom mobile app?",
        txt: "Costs vary widely based on complexity, features, and development time. Basic apps may cost $10,000-$50,000, while more complex apps with advanced features can range from $50,000 to over $200,000."
    },
    {
        title: "Do you handle development for security-sensitive applications?",
        txt: "Yes, we specialize in developing security-sensitive apps with robust encryption, secure data storage, and compliance with industry standards to protect your sensitive information."
    },
    {
        title: "Can I request changes during the development process?",
        txt: "Absolutely! Our mobile app development services include flexible, client-centric practices. We encourage client feedback at every stage, allowing you to request changes or updates as needed. Our goal is to ensure the final product aligns perfectly with your vision."
    }
    ,
    {
        title: "Do you offer post-launch support and maintenance?",
        txt: "Yes, post-launch support and maintenance are provided to address bugs, updates, and performance improvements, ensuring your app remains functional and up-to-date after its initial release."
    }
]


const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className={`${styles.faqsSection} p-100`}>
            <Container>
                <Row>
                    <Col lg={8} md={12} className='m-auto'>
                        <h2 className='text-center'>Frequently Asked Questions</h2>
                        {faqs.map((item, index) => (
                            <div
                                className={`${styles.faqsBox} ${openIndex === index ? styles.active : ''}`}
                                key={index}
                            >
                                <div
                                    className={styles.faqsItem}
                                    onClick={() => handleToggle(index)}
                                >
                                    <div className={styles.faqstitle}>
                                        <span> 0{index + 1}.</span>{item.title} <span className={styles.arrowStyle}><FaqsArrows /></span>
                                    </div>
                                    {openIndex === index && (
                                        <div className={styles.faqsContent}>
                                            {item.txt}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faqs;
