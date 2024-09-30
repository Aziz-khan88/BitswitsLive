import React from 'react'
import Acheived from '@/src/components/servicePage/Acheived/Acheived'
import Banner from '@/src/components/servicePage/Banner/Banner'
import CaseStudies from '@/src/components/servicePage/casestudies/CaseStudies'
import CuttingEdge from '@/src/components/servicePage/CuttingEdge/CuttingEdge' 
import AppIdea from '@/src/components/servicePage/AppIdea/AppIdea'
import WhyChoose from '@/src/components/servicePage/WhyChoose/WhyChoose'
import DevelopmentProcess from '@/src/components/servicePage/DevelopmentProcess/DevelopmentProcess'
import MobileTechnologies from '@/src/components/servicePage/MobileTechnologies/MobileTechnologies'
import Testimonials from '@/src/components/servicePage/Testimonials/Testimonials'
import SmallBanner from '@/src/components/servicePage/SmallBanner/SmallBanner'
import ApplicationOffer from '@/src/components/servicePage/ApplicationOffer/ApplicationOffer'
import EstimatedCost from '@/src/components/servicePage/EstimatedCost/EstimatedCost'
import Fueling from '@/src/components/servicePage/Fueling/Fueling'
import YourTech from '@/src/components/servicePage/YourTech/YourTech'
import Industries from '@/src/components/servicePage/Industires/Industries'
import JournyForm from '@/src/components/servicePage/JourneyForm/JourneyForm'
import Faqs from '@/src/components/servicePage/Faqs/Faqs'
import BlogPosts from '@/src/components/servicePage/BlogPosts/BlogPosts'
import GlobalPresence from '@/src/components/servicePage/GlobalPresence/GlobalPresence'
import CaseStudySection from '@/src/components/CaseStudySection'

const page = () => {
    // Sample content data
    const menus = [
        { label: "PC", index: 0 },
        { label: "Console", index: 1 },
        { label: "Mobile", index: 2 },
        { label: "AR/VR", index: 3 },
        { label: "Cross-Platform", index: 4 },
    ];
    const sections = [
        [
            {
                num: "",
                title: "PC",
                content: `<p class='font-medium manrope'>
                We offer end-to-end game development for personal computers, covering both Windows and macOS. Our expertise includes porting games to different PC environments, optimizing graphics for larger screens and higher resolutions. We provide smooth gameplay and feature-rich experiences on desktops and laptops using cutting-edge technologies like Unity, Unreal Engine, and CryEngine 3.
                </p>`
            },
        ],
        [
            {
                num: "",
                title: "Console",
                content: `<p class='font-medium'>Our development creates immersive 3D games for all major consoles, including Nintendo, Xbox, and PS4/PS5. We handle everything from initial concept to final porting, ensuring compatibility and performance. Utilizing Unity and Unreal Engine, we optimize graphics and gameplay for console standards, delivering interactive games that take full advantage of the console's capabilities.</p>`
            },
        ],
        [
            {
                num: "03",
                title: "Mobile",
                content: `<p class='font-medium'>We specialize in cross-platform iOS and Android 3D game development, providing a seamless experience across both smartphones and tablets. Our mobile game development process consists of optimizing graphics and gameplay for smaller screens without compromising on quality. As a top-tier 3D game development company, we use cutting-edge tech to create engaging and immersive 3D games that run smoothly on all mobile devices.</p>`
            },
        ],
        [
            {
                num: "",
                title: "AR/VR",
                content: `<p class='font-medium'>Our AR/VR game development services focus on creating immersive experiences for virtual reality and augmented reality platforms. We develop interactive games for HTC Vive Pro, Valve Index VR Kit, Sony PlayStation VR, Meta Quest, and Apple Vision Pro. Utilizing the power of Unreal Engine and Unity, we craft games that transport players into new worlds with seamless, lifelike interactions.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Cross-Platform",
                content: `<p class='font-medium'> As a bespoke 3D games development company, we excel in cross-platform game development, making sure your game reaches a wider audience by running smoothly on multiple platforms. 
We develop games that are easily ported across PC, consoles, mobile, and AR/VR using advanced engines like Unity, Unreal Engine, and Godot.
</p>`
            },
        ],
    ];
    const HoustonContent = {
        menus: menus,
        sections: sections,
    };
    return (
        <>
            <Banner />
            <CaseStudies />
            <Acheived />
            <CuttingEdge /> 
            <CaseStudySection />
            <AppIdea />
            <WhyChoose />
            <DevelopmentProcess />
            <MobileTechnologies />
            <Testimonials />
            <SmallBanner />
            <ApplicationOffer content={HoustonContent} />
            <EstimatedCost />
            <Fueling />
            <YourTech />
            <Industries />
            <JournyForm />
            <Faqs
                classes="align-items-center"
                faqsData={[
                    {
                        question: "How much does it cost to make a 3D game?",
                        answer: "The cost of developing a 3D game varies widely. Basic 2D mobile games range from $5,000 to $30,000, while complex 3D games for mobile development can cost between $100,000 and $500,000 or more. Understanding the project scope and budget beforehand helps avoid unexpected costs."
                    },
                    {
                        question: "What does a 3D game developer do?",
                        answer: "A 3D game developer combines graphic design, technology, art, and storytelling to create interactive games. They design new games or enhance existing ones by writing code to improve features and functionality, providing comprehensive 3D game development services."
                    },
                    {
                        question: "Which is cheaper, Unity or Unreal?",
                        answer: "Generally, Unity is cheaper because it caps fees at 2.5% of gross revenue, making it more affordable than Unreal. However, for gross revenues between $200,000 and $1,000,000, Unity's subscription costs can make it more expensive than Unreal."
                    },
                    {
                        question: "Is Unreal or Unity better for 3D?",
                        answer: "For superior graphics, Unreal is better suited to your needs. While Unity is versatile and user-friendly, Unreal provides high-quality, realistic visuals, making it the preferred choice for graphically intensive 3D games."
                    },
                    {
                        question: "How much does AAA game development cost?",
                        answer: "The average cost to develop AAA games by a top-grade 3D game development company with entry-level to mid-level features ranges from $60 million to $80 million. However, incorporating cutting-edge and superior features and visuals can drive the cost up to $100 million or more."
                    },
                    {
                        question: "What coding language is used for 3D games?",
                        answer: "For graphically rich, expansive 3D games, C++ is commonly used. It offers speed, direct hardware access, and fine-grained control over memory management, maximizing performance by efficiently using GPU capabilities and memory budgets."
                    }
                ]}
            />
            <BlogPosts />
            <GlobalPresence /> 
        </>
    )
}

export default page
