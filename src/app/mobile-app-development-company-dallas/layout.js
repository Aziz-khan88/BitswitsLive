//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Dallas - BitsWits",
  description: "Trust our leading mobile app development company in Dallas to deliver expert solutions meeting your business needs with top-notch app development services.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Dallas - BitsWits',
    description: 'Trust our leading mobile app development company in Dallas to deliver expert solutions meeting your business needs with top-notch app development services.',
    url: '/mobile-app-development-company-dallas',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-dallas' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Mobile App Development Company in Dallas - BitsWits",
    "geo.region": "US",
    "geo.position": "32.8219006, -96.8662865",
    "ICBM": " 32.8219006, -96.8662865",
    //==========
    "DC.title": "Mobile App Development Company in Dallas - BitsWits",
    "geo.region": "US-TX",
    "geo.position": "32.8219006, -96.8662865",
    "ICBM": "32.8219006, -96.8662865",
    //==========
    "DC.title": "Mobile App Development Company in Dallas - BitsWits",
    "geo.region": "US-TX",
    "geo.placename": "Dallas",
    "geo.position": "32.8219006, -96.8662865",
    "ICBM": "32.8219006, -96.8662865",
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