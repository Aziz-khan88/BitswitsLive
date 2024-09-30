//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Mobile App Development Company in Chicago - BitsWits",
  description: "BitsWits is an elite mobile app development company in Chicago with a focus on creating high-quality apps that drive growth and success for businesses.",
  //===== OG Tags =====
  openGraph: {
    title: 'Mobile App Development Company in Chicago - BitsWits',
    description: 'BitsWits is an elite mobile app development company in Chicago with a focus on creating high-quality apps that drive growth and success for businesses.',
    url: '/app-development-chicago',
    siteName: 'BitsWits',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/app-development-chicago' },
  //===== GEO Tags =====
  other: {
    "DC.title": "Mobile App Development Company in Chicago - BitsWits",
    "geo.region": "US",
    "geo.position": "41.8780354, -87.6324002",
    "ICBM": " 41.8780354, -87.6324002",
    //==========
    "DC.title": "Mobile App Development Company in Chicago - BitsWits",
    "geo.region": "US-IL",
    "geo.position": "41.8780354, -87.6324002",
    "ICBM": "41.8780354, -87.6324002",
    //==========
    "DC.title": "Mobile App Development Company in Chicago - BitsWits",
    "geo.region": "US-IL",
    "geo.placename": "Chicago",
    "geo.position": "41.8780354, -87.6324002",
    "ICBM": "41.8780354, -87.6324002",
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