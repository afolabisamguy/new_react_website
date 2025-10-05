import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "How It Works",
    url: "#howitworks",
  },
  {
    id: "1",
    title: "For Tenants",
    url: "#features",
  },
  {
    id: "2",
    title: "For Landlords",
    url: "#features2",
  },
  {
    id: "3",
    title: "About",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Download",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Verified Listings",
  "Easy Property Management",
  "Seamless Tenant–Landlord Connection",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Our Mission",
    text: "To eliminate the stress and inefficiencies of finding rental accommodation in Nigeria by connecting tenants directly with verified landlords.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Our Values",
    text: "Transparency, trust, and fairness in everything we do. We believe everyone deserves access to honest rental opportunities.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Our Impact",
    text: "Over 50,000 successful rentals facilitated, ₦4 billion saved in agent fees, and thousands of satisfied users across Nigeria.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Our Future",
    text: "Expanding across Africa to make transparent, stress-free renting a reality for millions. one home at a time.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Skip the stress of high agent fees. With trust, security, and transparency, MyAgent connects you directly to verified landlords and tenants.";

export const collabContent = [
  {
    id: "0",
    title: "Zero Agent Fees",
    text: collabText,
  },
  {
    id: "1",
    title: "Verified Listings",
  },
  {
    id: "2",
    title: "Secure Transactions",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Adaora Okafor",
    description: "Tenant • Port Harcourt",
    price: "0",
    features: [
      "Found my dream apartment in Lekki without paying a single naira in agent fees. The landlord was genuine and the process was so smooth!",
    ],
  },
  {
    id: "1",
    title: "Chinedu Okoro",
    description: "Landlord • Abuja",
    price: "9.99",
    features: [
      "MyAgent helped me find quality tenants for my properties. The verification process gives me peace of mind about who I'm renting to.",
    ],
  },
  {
    id: "2",
    title: "Fatima Hassan",
    description: "Tenant • Lagos",
    price: null,
    features: [
      "As a student, I couldn't afford agent fees. MyAgent made it possible for me to find affordable housing close to my university.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "No Agent Commission",
    text: "Save thousands in agent fees. Connect directly with landlords and keep your money.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Verified Listings Only",
    text: "Every property is verified by our team. No fake listings, no fraudulent landlords.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Secure Communication",
    text: "Chat safely with landlords through our platform with in-built call features.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Payment Protection",
    text: "Secure escrow system ensures your money is safe until you move in.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Fast Support",
    text: "Get help when you need it with our responsive customer support team.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Community Verified",
    text: "Real reviews from tenants and landlords help you make informed decisions.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];
export const benefits2 = [
  {
    id: "0",
    title: "Quality Tenants",
    text: "Connect with verified tenants who have gone through our screening process.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Fraud Protection",
    text: "Our verification system protects you from fraudulent applications and fake documents.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Market Insights",
    text: "Get real-time data on rental prices and market trends in your area.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Faster Rentals",
    text: "List your property and connect with interested tenants within days, not months.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Easy Management",
    text: "Simple tools to manage applications, communications, and rental agreements.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Portfolio Growth",
    text: "Scale your rental business with our landlord dashboard and analytics.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/myagentafrica",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/myagentafrica/",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://wa.me/2348107426551",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://web.facebook.com/people/My-Agent/61573958222503/?mibextid=ZbWKwL/",
  },
];
