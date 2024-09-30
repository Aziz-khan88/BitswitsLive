"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/services/casestudy.module.scss"
//========= Images 
import store from "media/newmobileapp/store.png"
import slider1 from "media/newmobileapp/slider-2.png"
import slider2 from "media/newmobileapp/slider-3.png"
import slider3 from "media/newmobileapp/slider-5.png"
import slider4 from "media/newmobileapp/slider-4.png"
import slider5 from "media/newmobileapp/slider-1.png"
import arrow from "media/newmobileapp/arrow.png"

const CaseStudySection = ({ setModalShow }) => {
    const handleClick = () => {
        setModalShow(true);
    };

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    const handleBtnLeftClick = () => {
        setActiveTab((prevTab) => (prevTab > 0 ? prevTab - 1 : 4));
    };

    const handleBtnRightClick = () => {
        setActiveTab((prevTab) => (prevTab < 4 ? prevTab + 1 : 0));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTab((prevTab) => (prevTab < 4 ? prevTab + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className={styles.appStyles} id="Casestudies">
                <div className="container">
                    <Row>
                        <Col lg={8} md={12} className='text-center m-auto'>
                            <h2>Our Results-Driven Mobile Application Development Portfolio!</h2>
                            <p>Drive business growth and enhance user engagement with our top-tier apps! As a trusted mobile application development company, our portfolio reflects our commitment to delivering high-impact solutions and showcases the success of our clients.</p>
                        </Col>
                    </Row>
                    <div className="tabs">
                        <Row className={styles.tabList}>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 0 ? styles.active : ''}`} onClick={() => handleTabChange(0)}>The Practice Pen</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 1 ? styles.active : ''}`} onClick={() => handleTabChange(1)}>Soul Scribe</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 2 ? styles.active : ''}`} onClick={() => handleTabChange(2)}>Crave Cuisine</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 3 ? styles.active : ''}`} onClick={() => handleTabChange(3)}>Fitnow</Col>
                            <Col sm={4} lg={2} className={`${styles.lists} ${activeTab === 4 ? styles.active : ''}`} onClick={() => handleTabChange(4)}>Route Rover</Col>
                        </Row>
                    </div>
                    <div className="tabsContent">
                        {activeTab == 0 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <h3>The Practice Pen</h3>
                                            <p>We designed Practice Pen as a skill development app that uses video-based learning and gamification. Users can upload practice videos, receive feedback, and compete in interactive challenges to win prizes, making learning fun and engaging.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={handleClick}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                {/* <div className={styles.counter}>
                                                    <h5>
                                                        <span>280</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>85</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>69</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div> */}
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">01</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider1} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 1 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Soul Scribe</h3>
                                            <p>We created Soul Scribe as a social networking app that serves as a digital diary, allowing users to invite friends and family to contribute to an online journal. Featuring a freemium subscription model with a complimentary family room option.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={handleClick}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                {/* <div className={styles.counter}>
                                                    <h5>
                                                        <span>350</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>75</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>75</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div> */}
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">02</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider2} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 2 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Crave Cuisine</h3>
                                            <p>We developed Crave Cuisine, a food delivery app that streamlines the process of selecting local eateries and placing orders. Enjoy convenient dining with a wide range of meal choices, all in one easy-to-use app.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={handleClick}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                {/* <div className={styles.counter}>
                                                    <h5>
                                                        <span>290</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>70</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>65</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div> */}
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">03</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider3} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 3 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Fitnow</h3>
                                            <p>We developed Fitnow as a user-friendly fitness app that allows users to select workouts, set goals, and customize routines with expert guidance. With a simple interface, Fitnow makes tracking progress and achieving fitness goals easy.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={handleClick}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                {/* <div className={styles.counter}>
                                                    <h5>
                                                        <span>200</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>50</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>65</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div> */}
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">04</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider4} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                        {activeTab == 4 && (
                            <Row className={styles.caseRow}>
                                <Col md={6} className='p-0'>
                                    <div className={styles.featured}>
                                        <div className={styles.contentBox}>
                                            <div className={styles.arrows}>
                                                <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                                <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                    <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                                </button>
                                            </div>
                                            <h3>Route Rover</h3>
                                            <p>We created Route Rover, a navigation and route-planning app designed to optimize travel. Whether for daily commutes or road trips, users can discover efficient routes, avoid traffic, and explore new destinations with ease.</p>
                                            <div className={styles.blackBtn}>
                                                <Image src={store} alt='Bitswits' className='img-fluid' />
                                                <div className={styles.linksBtn} onClick={handleClick}>
                                                    Let’s Talk
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.bottomBox}>
                                            <div className={styles.counterBox}>
                                                {/* <div className={styles.counter}>
                                                    <h5>
                                                        <span>250</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>Installs</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>85</span>
                                                        <span>+</span>
                                                    </h5>
                                                    <p>MAU</p>
                                                </div>
                                                <div className={styles.counter}>
                                                    <h5>
                                                        <span>69</span>
                                                        <span>%</span>
                                                    </h5>
                                                    <p>ROI</p>
                                                </div> */}
                                            </div>
                                            <div className={styles.tabsNumber}>
                                                <span className="text-white">05</span>
                                                <span className='text-white'>/</span>
                                                <span>05</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} className='p-0'>
                                    <div className={styles.caseImg}>
                                        <div className={styles.arrows}>
                                            <button className={styles.btnLeft} onClick={handleBtnLeftClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                            <button className={styles.btnRight} onClick={handleBtnRightClick}>
                                                <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                            </button>
                                        </div>
                                        <Image src={slider5} alt='Bitswits' fill={true} className='img-fluid' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CaseStudySection
