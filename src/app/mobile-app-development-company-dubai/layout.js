//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Dubai - BitsWits",
  description: "Partner with BitsWits, your reliable mobile app development company in Dubai, for exceptional app development services perfectly suited to your needs.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Dubai - BitsWits',
    description: 'Partner with BitsWits, your reliable mobile app development company in Dubai, for exceptional app development services perfectly suited to your needs.',
    url: '/mobile-app-development-company-dubai',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/mobile-app-development-company-dubai' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Mobile App Development Company in Dubai - BitsWits",
    "geo.region": "AE",
    "geo.position": "25.0782658, -55.1537371",
    "ICBM": " 25.0782658, -55.1537371",
    //==========
    "DC.title": "Mobile App Development Company in Dubai - BitsWits",
    "geo.region": "AE-DU",
    "geo.position": "25.0782658, -55.1537371",
    "ICBM": "25.0782658, -55.1537371",
    //==========
    "DC.title": "Mobile App Development Company in Dubai - BitsWits",
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.0782658, -55.1537371",
    "ICBM": "25.0782658, -55.1537371",
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