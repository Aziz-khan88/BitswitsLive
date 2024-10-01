import Banner from "@/src/app/services2/banner";
import Achieved from "@/src/app/services2/achieved";
import Cuttingedge from "@/src/app/services2/cuttingedge";
import AppIdea from "@/src/app/services2/appidea";
import WhyChoose from "@/src/app/services2/whychoose";
import Technologies from "@/src/app/services2/technologies";
import Risks from "@/src/app/services2/risks";
import Process from "@/src/app/services2/process";
import Testimonial from "@/src/app/services2/testimonial";
import Offers from "@/src/app/services2/offers";
import Fueling from "@/src/app/services2/fueling";
import CtaEstimated from "@/src/app/services2/cat";
import TechStack from "@/src/app/services2/techstack";
import Industries from "@/src/app/services2/industries";
import IdeaCta from "@/src/app/services2/ideacta";
import Faqs from "@/src/app/services2/faqs";
import Blogs from "@/src/app/services2/blogs";
import Location from "@/src/app/services2/location";
import CaseStudySection from "@/src/app/services2/casestudy";
// Location Images
import Dubai from "media/locations/Dubai.webp"
import Chicago from "media/locations/Chicago.webp"
import Houston from "media/locations/Houston.webp"
import LosAngeles from "media/locations/LosAngeles.webp"
import Miami from "media/locations/Miami.webp"
import NewYork from "media/locations/NewYork.webp"
import SanFrancisco from "media/locations/SanFrancisco.webp"
import Toronto from "media/locations/Toronto.webp"
import Dallas from "media/locations/Dallas.webp"
import Qatar from "media/locations/Qatar.webp"
import Bahrain from "media/locations/Bahrain.webp"
import Pierre from "media/locations/Pierre.webp"
import Sharjah from "media/locations/Sharjah.webp"



const OPTIONS = { align: 'start', loop: "true" }

const LOC = [
  {
    state: "Houston",
    add: "2800 Post Oak Blvd STE 4100, Houston, TX 77056, United States",
    phone: "+1 833 500 6007",
    email: "info@bitswits.co",
    img: Houston.src,
    off: "Head Office"
  },
  {
    state: "Chicago",
    add: "141 W Jackson Blvd STE 300 A, Chicago, IL 60604, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: Chicago.src,
    off: "Head Office"
  },
  {
    state: "Dubai",
    add: "Offaaaaaa 1402, JBC 3 Cluster Y, Jumeirah Lake Towers Dubai UAE",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Dubai.src,
    off: "Head Office"
  },
  {
    state: "Los Angeles",
    add: "1425 Flower St, Los Angeles, CA 90015, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: LosAngeles.src,
    off: "Head Office"
  },
  {
    state: "Miami",
    add: "601 Brickell Key Dr #700, Miami, FL 33131, United States",
    phone: "+1 302 216 8231",
    email: "info@bitswits.co",
    img: Miami.src,
    off: "Head Office"
  },
  {
    state: "New York",
    add: "26 Broadway Suite 934, New York, NY 10004, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: NewYork.src,
    off: "Head Office"
  },
  {
    state: "San Francisco",
    add: "488 Folsom St, San Francisco, CA 94105, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: SanFrancisco.src,
    off: "Head Office"
  },
  {
    state: "Toronto",
    add: "512 Wellington St W, Toronto, ON M5V 1E3, Canada",
    phone: "+1 302 216 8231",
    email: "info@bitswits.co",
    img: Toronto.src,
    off: "Head Office"
  },
  {
    state: "Dallas",
    add: "1341 W Mockingbird Ln, Dallas, TX 75247, United States",
    phone: "+1 210 294 9230",
    email: "info@bitswits.co",
    img: Dallas.src,
    off: "Head Office"
  },
  {
    state: "Qatar",
    add: "51 Al Miqdad St, Doha, Qatar",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Qatar.src,
    off: "Head Office"
  },
  {
    state: "Bahrain",
    add: "2139 Hoora Ave, Manama 973, Bahrain",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Bahrain.src,
    off: "Head Office"
  },
  {
    state: "Pierre",
    add: "124 W Dakota Ave, Pierre, SD 57501, United States",
    phone: "+1 312 379 5987",
    email: "info@bitswits.co",
    img: Pierre.src,
    off: "Head Office"
  },
  {
    state: "Sharjah",
    add: "office #101 32 St Al Majarra Mughaidir Suburb Sharjah UAE",
    phone: "+971 55 503 1266",
    email: "info@bitswits.co",
    img: Sharjah.src,
    off: "Head Office"
  },
]


export default function Home() {
  return (
    <>
      <Banner />
      <Achieved />
      <Cuttingedge />
      <CaseStudySection />
      <AppIdea />
      <WhyChoose />
      <Process />
      <Technologies />
      <Testimonial />
      <Risks />
      <Offers />
      <Fueling />
      {/* <CtaEstimated /> */}
      <TechStack />
      <Industries />
      <IdeaCta />
      <Faqs />
      {/* <Blogs /> */}
      <Location slides={LOC} options={OPTIONS} />
    </>
  );
}
