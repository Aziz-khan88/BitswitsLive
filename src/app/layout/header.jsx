
"use client"
import Link from "next/link"
import { Col, Container, Row } from "react-bootstrap"
import { MainLogo, WhiteLogo } from "@/src/app/app-constants"
import Navigation from "@/src/app/layout/navigation"
import styles from "@/styles/layout/header.module.scss"
import { useState, useEffect } from "react";


const Header = ({ isDarkHeader, isLightHeader }) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className={`${styles.headerSection} ${scrolled ? styles.active : ''}`} >
            < Container className="h-100" >
                <Row className="h-100">
                    <Col md={3} xs={6} sm={6} className="m-auto">
                        <Link href="/">
                            {!scrolled ? (
                                isLightHeader ? <MainLogo /> : <WhiteLogo />
                            ) : (
                                <MainLogo />
                            )}



                        </Link>
                    </Col>
                    <Col md={9} xs={6} sm={6} className="m-auto">
                        <Navigation scrolled={scrolled} isLightHeader={isLightHeader} isDarkHeader={isDarkHeader} />
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Header