import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalLayout from "@/src/app/ConditionalLayout";
import Scripts from "@/src/app/Scripts";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://www.bitswits.co/"),
  //===== Meta Tags =====
  title: "Expert Mobile App Development Company | BitsWits",
  description: "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
  //===== OG Tags =====
  openGraph: {
    title: "Expert Mobile App Development Company | BitsWits",
    description: "BitsWits empowers SMBs and entrepreneurs with mobile app development, delivering solutions across 10+ industries to drive business success and growth.",
    url: '/',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
    images: "/public/images/icons/footerlogo.png",
  },
  //===== Canonical =====
  alternates: { canonical: '/' },

  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Scripts />
      <body className={poppins.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
