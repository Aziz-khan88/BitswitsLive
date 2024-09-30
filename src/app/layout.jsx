import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import ConditionalLayout from "./ConditionalLayout";

// import { usePathname } from 'next/navigation';
// const pathname = usePathname();
// if (pathname === '/') {
//   require('@/src/app/globals.scss');
// } else {
//   require('@/styles/globals.css');
// }


// import Header from "@/src/app/layout/header";
// import Footer from "@/src/app/layout/footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

//===== Meta Data =====
export const metadata = {
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
      <body className={poppins.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
