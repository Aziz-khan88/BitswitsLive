//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Denver - BitsWits",
  description: "BitsWits is a leading mobile app development company in Denver offering innovative solutions customized to your business needs for unparalleled success!",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Denver - BitsWits',
    description: 'BitsWits is a leading mobile app development company in Denver offering innovative solutions customized to your business needs for unparalleled success!',
    url: '/mobile-app-development-company-denver',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-denver' },
  //===== GEO Tags =====
  other: {
    "DC.title": "",
    "geo.region": "",
    "geo.position": "",
    "ICBM": " ",
    //==========
    "DC.title": "",
    "geo.region": "",
    "geo.position": "",
    "ICBM": "",
    //==========
    "DC.title": "",
    "geo.region": "",
    "geo.placename": "",
    "geo.position": "",
    "ICBM": "",
  },
  //===== No-Index =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }) {
  return (children);
}