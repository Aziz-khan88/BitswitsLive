
import {
  BannerData, CuttingedgeContent, CuttingedgeList,
  AppIdeaContent, caseStudiesList,
  caseStudiesContent, ProcessContent,
  WhyChooseContent, WhyChooseList1,
  WhyChooseList2, ProcessTabs, TechnologiesContent,
  TechnologiesIcons, TestimonialContent,
  TestimonialSLIDES, RisksContent,
  OffersContent, OffersTabs, FuelingContent, FuelingList,
  CtaEstimatedContent, TechStackTabs,
  TechStackContent, IndustriesContent,
  IndustriesList, IdeaCtaContent,
  FaqsContent, FaqsList, BlogsContent,
  BlogsList
} from "@/src/app/nft-game-development-company/data/data";

import Achieved from "@/src/app/services/achieved";
import Banner from "@/src/app/services/banner";
import Cuttingedge from "@/src/app/services/cuttingedge";
import CaseStudySection from "@/src/app/services/casestudy";
import AppIdea from "@/src/app/services/appidea";
import Process from "@/src/app/services/process";
import Technologies from "@/src/app/services/technologies";
import Testimonial from "@/src/app/services/testimonial";
import WhyChoose from "@/src/app/services/whychoose";
import Risks from "@/src/app/services/risks";
import Offers from "@/src/app/services/offers";
import Fueling from "@/src/app/services/fueling";
import CtaEstimated from "@/src/app/services/cat";
import TechStack from "@/src/app/services/techstack";
import Industries from "@/src/app/services/industries";
import IdeaCta from "@/src/app/services/ideacta";
import Faqs from "@/src/app/services/faqs";
import Blogs from "@/src/app/services/blogs";



export default function Page() {

  return (
    <>
      <Banner data={BannerData} />
      <Achieved />
      <Cuttingedge data={CuttingedgeContent} list={CuttingedgeList} />
      <CaseStudySection data={caseStudiesContent} caseStudies={caseStudiesList} />
      <AppIdea data={AppIdeaContent} />
      <WhyChoose data={WhyChooseContent} list1={WhyChooseList1} list2={WhyChooseList2} />
      <Process data={ProcessContent} tabs={ProcessTabs} />
      <Technologies data={TechnologiesContent} list={TechnologiesIcons} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Risks data={RisksContent} />
      <Offers bg={true} data={OffersContent} tabs={OffersTabs} />
      <Fueling data={FuelingContent} list={FuelingList} />
      <CtaEstimated data={CtaEstimatedContent} />
      {/* <TechStack data={TechStackContent} tabs={TechStackTabs}/> */}
      <Industries data={IndustriesContent} list={IndustriesList} />
      <IdeaCta data={IdeaCtaContent} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <Blogs data={BlogsContent} list={BlogsList} />

    </>
  );
}

