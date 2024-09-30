import {
  BannerData, CompanyInfoContent, HomeServicesContent,
  HomeServicesList, CaseStudyContent, ExtendedServicesContent,
  ExtendedServicesList, ProcessContent, ProcessList,
  TestimonialContent, TestimonialSLIDES, SolutionsContent,
  SolutionsList, EngagementContent, EngagementDetailList, EngagementList,
  IndustriesContent, IndustriesSLIDES, FaqsContent,
  FaqsList, IdeaCtaContent, DigitalCtaContent
} from "@/src/app/home/data/data";
import Process from "@/src/app/home/process";
import Banner from "@/src/app/home/banner";
import CaseStudy from "@/src/app/home/casestudy";
import CompanyInfo from "@/src/app/home/companyinfo";
import DigitalCta from "@/src/app/home/digitalcta";
import ExtendedServices from "@/src/app/home/extendedservices";
import HomeServices from "@/src/app/home/homeservices";
import Testimonial from "@/src/app/home/testimonial";
import Solutions from "@/src/app/home/solutions";
import Engagement from "@/src/app/home/engagement";
import Faqs from "@/src/app/home/faqs";
import IdeaCta from "@/src/app/services/ideacta";
import Industries from "@/src/app/home/industries";


const OPTIONS = { loop: true, align: 'center' }

export default function Page() {
  return (
    <>
      <Banner data={BannerData} />
      <CompanyInfo data={CompanyInfoContent} />
      <HomeServices data={HomeServicesContent} list={HomeServicesList} />
      <CaseStudy data={CaseStudyContent} />
      <ExtendedServices data={ExtendedServicesContent} list={ExtendedServicesList} />
      <DigitalCta data={DigitalCtaContent} />
      <Process data={ProcessContent} list={ProcessList} />
      <Testimonial data={TestimonialContent} list={TestimonialSLIDES} />
      <Solutions data={SolutionsContent} list={SolutionsList} />
      <Engagement data={EngagementContent} listDetail={EngagementDetailList} list={EngagementList} />
      <Industries data={IndustriesContent} slides={IndustriesSLIDES} options={OPTIONS} />
      <Faqs data={FaqsContent} list={FaqsList} />
      <IdeaCta data={IdeaCtaContent} />
    </>
  );
}

