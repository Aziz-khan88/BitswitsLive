"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from "@/src/app/layout/header";
import Footer from "@/src/app/layout/footer";

const styleChange = [
    "/",
    "/about-us",
    "/flutter-app-development",
    "/android-app-development-company",
    "/react-native-app-development",
    "/ios-app-development-company",
    "/cross-platform-app-development-services",
    "/nft-game-development-company",
    "/ai-development-company",
    "/blockchain-game-development-company",
    "/mobile-game-development-company",
    "/hybrid-app-development-company",
    "/healthcare-app-development-services",
    "/ecommerce-app-development",
    "/education-app-development",
    "/real-estate-app-development-company",
    "/music-app-development-company",
    "/automotive-software-development",
    "/social-media-app-development-company",
    "/logistics-software-development",
    "/fintech-app-development",
    "/portfolio",
    "/case-studies/singles-up",
    "/case-studies/vifty",
    "/case-studies/soul-scribe",
    "/case-studies/nutri-snap",
    "/case-studies/home-pro-connect",
    "/contact-us",
]

const isLightHeader = [
    '/',
    '/mobile-game-development-company',
    '/logistics-software-development',
    '/healthcare-app-development-services',
    '/education-app-development',
    '/music-app-development-company',
    '/social-media-app-development-company',
    '/ecommerce-app-development',
    '/music-app-development-company',
    '/social-media-app-development-company',
    '/real-estate-app-development-company',
    '/automotive-software-development',
    '/fintech-app-development',
    "/case-studies/singles-up",
    "/case-studies/vifty",
    "/case-studies/soul-scribe",
    "/case-studies/nutri-snap",
    "/case-studies/home-pro-connect",
]
const isDarkHeader = [
    "/about-us",
    "/flutter-app-development",
    "/android-app-development-company",
    "/react-native-app-development",
    "/ios-app-development-company",
    "/cross-platform-app-development-services",
    "/nft-game-development-company",
    "/ai-development-company",
    "/blockchain-game-development-company",
    "/mobile-application-development-services",
    "/lp/mobile-application-development-services",
    "/portfolio",
    "/contact-us",
    "/bitswits-services-page-1",
    "/mobile-application-development-services",
    "lp/mobile-app-development-services"
]
const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(true);
    const [isLight, setIsLight] = useState(true);
    const [useAltStyle, setUseAltStyle] = useState(false);

    useEffect(() => {
        setIsLight(isLightHeader.includes(pathname) || pathname.startsWith('/case-studies/'));
        setIsDark(isDarkHeader.includes(pathname));
        setUseAltStyle(styleChange.includes(pathname));
    }, [pathname]);

    if (pathname !== useAltStyle) {
        require('@/styles/globals.css');
    } else {
        require('@/src/app/globals.scss');
    }
    return (
        <>
            <Header isLightHeader={isDark} isDarkHeader={isLight} />
            {children}
            <Footer />
        </>
    )
}

export default ConditionalLayout;
