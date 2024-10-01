import Blogs from "@/src/app/services/blogs";
import Faqs from "@/src/app/services/faqs";
import Fueling from "@/src/app/services/fueling";
import IdeaCta from "@/src/app/services/ideacta";

import Offers from "@/src/app/services/offers";
import Process from "@/src/app/services/process";
import TechStack from "@/src/app/services/techstack";
import Testimonial from "@/src/app/services/testimonial";
import WhyChoose from "@/src/app/services/whychoose";
import Activity from "@/src/app/mobile-game-development-company/activity";
import Banner from "@/src/app/mobile-game-development-company/banner";
import ContentSec from "@/src/app/mobile-game-development-company/contentsec";
import GameCta from "@/src/app/mobile-game-development-company/gamecta";
import ContentSecLG from "@/src/app/mobile-game-development-company/largecontent";
import Projectdiscuss from "@/src/app/mobile-game-development-company/projectdiscuss";
import Services from "@/src/app/mobile-game-development-company/services";

import {
    BannerData, ProjectdiscussContent, ServicesContent,
    ServicesList, GameCtaContent, ContentSecContent,
    ContentSecLGContent, ProcessContent,
    WhyChooseContent, WhyChooseList1,
    WhyChooseList2, ProcessTabs, TestimonialContent,
    TestimonialSLIDES, OffersContent,
    OffersTabs, FuelingContent, FuelingList,
    TechStackTabs, TechStackContent, IdeaCtaContent,
    FaqsContent, FaqsList, BlogsContent,
    BlogsList
} from "@/src/app/mobile-game-development-company/data/data";

export default function Home() {
    return (
        <>
            <Banner data={BannerData} />
            <Activity />
            <Projectdiscuss data={ProjectdiscussContent} />
            <Services data={ServicesContent} list={ServicesList} />
            <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
            <GameCta data={GameCtaContent} />
            <ContentSec data={ContentSecContent} />
            <Process data={ProcessContent} tabs={ProcessTabs} />
            <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
            <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
            <ContentSecLG data={ContentSecLGContent} />
            <IdeaCta data={IdeaCtaContent} />
            {/* <TechStack data={TechStackContent} tabs={TechStackTabs} /> */}
            <Fueling data={FuelingContent} list={FuelingList} />
            <Faqs data={FaqsContent} list={FaqsList} />
            <Blogs data={BlogsContent} list={BlogsList} />

        </>
    );
}
