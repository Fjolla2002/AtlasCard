import homeBannerImg from '../images/atlas-card-poster-end.webp';
import tasteMaker1 from '../images/tastemaker1.jpg';
import tasteMaker2 from '../images/tastemaker2.jpg';
import tasteMaker3 from '../images/tastemaker3.jpg';
import tasteMaker4 from '../images/tastemaker4.jpg';
import highFlyerImage from '../images/travel-desktop.webp';
import headTurnerVideo from '../videos/atlas-woman.mp4';
import headTurner1 from '../images/headTurner1.png';
import headTurner2 from '../images/headTurner2.png';
import powerCoupleImg from '../images/phone-in-hand-desktop.webp';
import powerCouple1 from '../images/powerCouple1.jpg';
import powerCouple2 from '../images/powerCouple2.jpg';
import powerCouple3 from '../images/powerCouple3.jpg';
import trulyPersonal1 from '../images/trulyPersonal1.jpg';
import trulyPersonal2 from '../images/trulyPersonal2.jpg';
import tasteMakerRes1 from '../images/tasteMakerRes1.jpg';
import tasteMakerRes2 from '../images/tasteMakerRes2.jpg';
import tasteMakerRes3 from '../images/tasteMakerRes3.jpg';
import powerCoupleRes1 from '../images/powerCoupleRes1.jpg';
import powerCoupleRes2 from '../images/powerCoupleRes2.jpg';
import powerCoupleRes3 from '../images/powerCoupleRes3.jpg';
import highFlyerResponsive from '../images/highFlyerResponsive.webp';
import powerCoupleResponsive from '../images/powerCoupleResponsive.webp';
import trulyPersonalResponsive from '../images/trulyPersonalResponsive.jpg';

const homeBannerData = {
        title: "No Limits",
        image: homeBannerImg,
        desc: "This is your friend who scores the hottest tables in town, your passport to weekend getaways, and your guest pass to must-see events. All brilliantly brought together in a card and app of uncompromising beauty and utility. This is the beginning of a journey to a world with no limits.",
        span: "This is Atlas."
}

const tableContentTasteMaker = {
    rows: [
        {
            id: 1,
            title: "Dedicated reservations¹",
            desc: "Access exclusive inventory at our restaurant partners including – Horses, Felix Trattoria, Cucina Alba, and more."
        },
        {
            id: 2,
            title: "Last-minute bookings²",
            desc: "With bookings available at short notice, you won't find yourself on a waitlist."
        },
        {
            id: 3,
            title: "Access during peak hours",
            desc: "Members get seated at prime time, when availability is typically the hardest to get."
        },
    ]
}

const tasteMakerData = {
    title: "Taste Maker",
    subTitle : "Meet Atlas Supper Club.",
    desc: "Skip past the endless waitlists and concierge calls that turn up empty handed. With Atlas, you have a seat at the table at today's most desirable restaurants.",
    bannerImg: tasteMaker1,
    bannerImgDesc:  "SUPPER CLUB RESERVATIONS, INSIDE ATLAS APP.",
    images: [
        tasteMaker2,
        tasteMaker3,
        tasteMaker4,
    ],
    imagesDesc: [
        "HORSES, LA, ON ATLAS SUPPER CLUB.",
        "FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB.",
        "CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.",
    ],
    responsiveImages: [
        tasteMakerRes1,
        tasteMakerRes2,
        tasteMakerRes3
    ]
}

const highFlyerData = {
    title: "High Flyer",
    subTitle : "Built for (spontaneous) travel.",
    desc: "No matter where your next grand tour takes you, Atlas is there as your co-pilot, with bespoke flight benefits for when you're ready to go on the spur of the moment.",
    image: highFlyerImage,
    imageDesc: "BESPOKE FLIGHT BENEFITS, INSIDE ATLAS APP.",
    responsiveImage: highFlyerResponsive,
    visa: {
        icon: "+",
        title: "Visa Infinite Benefits⁶",
        desc: "Priority Pass, Luxury Hotel Collection,no foreign transaction fees, and more.",
        btnDesc: "Discover",
        btnUrl : 'https://atlascard.com/visa-infinite'
    }
}

const tableContentHighFlyer = {
    rows: [
        {
            id: 1,
            title: "5x points with BLADE³",
            desc: "Exclusive reward for Atlas cardholders on all BLADE helicopter rides and flights."
        },
        {
            id: 2,
            title: "CLEAR Plus membership⁴",
            desc: "Fast forward through airport security with included CLEAR Plus annual membership."
        },
        {
            id: 3,
            title: "Cancel flights without fees⁵",
            desc: "Change or cancel any flight, at any time, for any reason and get fees reimbursed up to $600 a year."
        },
    ]
}

const headTurnerData = {
    title : "Head Turner",
    subTitle: "Designed to shatter the norm.",
    desc: "Atlas is crafted to mirror our uncommon obsession with every single detail, always in pursuit of elevating you above the crowd, while also enhancing your privacy.",
    video: headTurnerVideo,
    videoDesc: "THE WORLD IN YOUR HAND, WITH ATLAS CARD.",
    images: [
        headTurner1,
        headTurner2
    ],
    imagesDesc: "DESIGNED AND ENGINEERED, FRONT TO BACK."
}

const tableContentHeadTurner = {
    rows: [
        {
            id: 1,
            title: "Advanced construction",
            desc: "Made from 21 grams of high density steel, CNC-milled and engraved, then polished to a brilliant mirror finish that is unlike any card."
        },
        {
            id: 2,
            title: "Enhanced privacy",
            desc: "With no visible card number on its surface, Atlas keeps your privacy where it belongs, in your own hands.⁷"
        },
        {
            id: 3,
            title: "Personalized for you",
            desc: "Designed front to back, Atlas card features tone-on-tone graphics and a personal icon of your choice by your name."
        },
    ]
}

const powerCoupleData = {
    title: "Power Couple",
    subTitle: "A dynamic duo of card + app.",
    desc: "Each conceived from the same first principles, Atlas shines with a true native app that raises the bar, from magical rewards to unlimited cards, and everything in between.",
    image: powerCoupleImg,
    imageDesc: "FAR ABOVE THE TYPICAL APP EXPERIENCE.",
    responsiveImage: powerCoupleResponsive,
    images: [
        powerCouple1,
        powerCouple2,
        powerCouple3
    ],
    imagesDesc: [
        "YOUR PURCHASES, REIMAGINED AS MOMENTS.",
        "CREATE AND MANAGE VIRTUAL CARDS.",
        "POINTS UPGRADES, WITH DYNAMIC REWARDS."
    ],
    responsiveImages: [
        powerCoupleRes1,
        powerCoupleRes2,
        powerCoupleRes3
    ]

}

const tableContentPowerCoupleData = {
    rows: [
        {
            id: 1,
            title: "Dynamic rewards⁸",
            desc: "Get automatically upgraded to 3x points where you spend the most, plus 1x points on every purchase. Because there's more to a rewarding life than chasing points."
        },
        {
            id: 2,
            title: "Unlimited virtual cards⁹",
            desc: "Create a unique card for your next trip, or one to share with your assistant, or to go online shopping, or ... you get the idea."
        },
        {
            id: 3,
            title: "Intuitively powerful",
            desc: "Buttery-smooth performance, support for features like Dark Mode, and endless details make an app that's a pleasure to use, day in, night out."
        },
    ]
}

const trulyPersonalData = {
    title: "Truly Personal",
    subTitle: "At your beck and call (or text).",
    desc: "Experience handcrafted support, with your own dedicated personal advisor who is on hand to fulfill any request, from last-minute dinner plans to deep dive sessions.",
    image: trulyPersonal1,
    imageDesc: "YOUR PERSONAL ADVISOR, NOW IN IMESSAGE.",
    responsiveImage: trulyPersonalResponsive,
    cardImage: trulyPersonal2,
    cardImageDesc: "YOUR COMPANION THROUGH EVERY ADVENTURE.",
}

const tableContentTrulyPersonal = {
    rows: [
        {
            id: 1,
            title: "Personal advisor",
            desc: "Going to exceptional lengths to know your preferences and tastes, your advisor is here to provide truly personal support."
        },
        {
            id: 2,
            title: "1 on 1 sessions",
            desc: "For those times when it takes more than a text or a phone call, your personal advisor is just a quick booking away for a video call."
        },
        {
            id: 3,
            title: "Experiences concierge¹⁰",
            desc: "From last-minute table reservations, to sold out events, your personal advisor is on hand to help you have a lifetime experience."
        },
    ]
}

const executiveBriefData = {
    title: "Executive, brief.",
    subTitle: "Your next journey begins here.",
    desc: "With all the essentials you need out in the world, and nothing to limit your possibilities, here is everything Atlas has to offer.",
    member: {
        btnDesc: "Become a founding member",
        btnUrl: "https://atlascard.com/request-invite",
        price: "$999/yr."
    }
}

const tableContentExecutiveBrief = {
    tables: [
        {
            id: 1,
            title: "Dining",
            desc: [
                "Exclusive reservations with Atlas Supper Club",
                "Dedicated tables at partner restaurants",
                "Last-minute bookings",
                "Peak hours access",
            ]
        },
        {
            id: 2,
            title: "Travel",
            desc: [
                "5x points with BLADE on helicopter rides and flights",
                "CLEAR Plus membership",
                "Cancel flights without fees",
            ]
        },
        {
            id: 3,
            title: "Rewards & Benefits",
            desc: [
                "3x upgrade on top spending category",
                "1x points on every purchase",
                "One Medical membership¹¹",
                "Erewhon Cafe membership¹²",
                "FUTURE fitness training membership¹³"
            ]
        },
        {
            id: 4,
            title: "Personal Advisor",
            desc: [
                "Advisor dedicated to your account",
                "1 on 1 sessions with available video calls",
                "Personalized dining and experiences concierge",
            ]
        },
        {
            id: 5,
            title: "Card",
            desc: [
                "Charge card with no pre-set spending limits¹⁴",
                "21 gram steel alloy, milled, engraved, and polished to a brilliant mirror shine",
                "Tone-on-tone card back, with your personal icon, and no card number",
                "Visa Infinite",
                "Handle with care, clean with a microfiber cloth"
            ]
        },
        {
            id: 6,
            title: "App",
            desc: [
                "True native iOS app with buttery-smooth performance",
                "Dark Mode support",
                "Instant purchase notifications",
                "Unlimited virtual cards",
                "Apple Pay"
            ]
        },
    ]
}

const footerTopData = {
    categories: [
        {
            id: 1,
            title: "ATLAS",
            items: [
                {
                    id: 1,
                    title: "DINING",
                    path: "dining"
                },
                {
                    id: 2,
                    title: "TRAVEL",
                    path: "travel"
                },
                {
                    id: 3,
                    title: "CARD",
                    path: "card"
                },
                {
                    id: 4,
                    title: "APP",
                    path: "app"
                },
                {
                    id: 5,
                    title: "CONCIERGE",
                    path: "concierge"
                },
            ],
        },
        {
            id: 2,
            title: "BENEFITS",
            items: [
                {
                    id: 1,
                    title: "ATLAS BENEFITS",
                    path: "benefits"
                },
                {
                    id: 2,
                    title: "VISA INFINTE",
                    path: "https://atlascard.com/visa-infinite"
                },
            ]
        },
        {
            id: 3,
            title: "CONTACT",
            items: [
                {
                    id: 1,
                    title: "EMAIL",
                    path: "mailto:hello@atlascard.com"
                },
                {
                    id: 2,
                    title: "TWITTER",
                    path: "https://twitter.com/atlascardhq"
                },
                {
                    id: 3,
                    title: "INSTAGRAM",
                    path: "https://www.instagram.com/atlascardhq/"
                }
            ]
        },
        {
            id: 4,
            title: "LEGAL",
            items: [
                {
                    id: 1,
                    title: "PRIVACY POLICY",
                    path: "https://atlascard.com/legal/privacy"
                },
                {
                    id: 2,
                    title: "TERMS OF USE",
                    path: "https://atlascard.com/legal/terms"
                },
                {
                    id: 3,
                    title: "STATEMENT DISCLOSURE",
                    path: "https://atlascard.com/legal/statement-disclosure"
                },
            ]
        },
        {
            id: 5,
            title: "ABOUT",
            items: [
                {
                    id: 1,
                    title: "MEDIA KIT",
                    path: ""
                }
            ]
        },
    ],
    btnUrl: "https://atlascard.com/request-invite",
}

const footerBottomData = {
    items: [
        {
            id: 1,
            desc: "ATLAS SUPPER CLUB RESERVATIONS ARE AVAILABLE ON A FIRST COME, FIRST SERVE BASIS EXCLUSIVELY TO ATLAS CARDHOLDERS FROM WITHIN ATLAS APP. THE ATLAS SUPPER CLUB CODE OF CONDUCT (ATLASCARD.COM/CODE-OF-CONDUCT) AND THE CANCELLATION POLICY OF THE APPLICABLE RESTAURANT APPLY FOR EACH RESERVATION. LISTED RESTAURANTS ARE SUBJECT TO CHANGE AT ANY TIME WITHOUT PRIOR NOTICE.",
        },
        {
            id: 2,
            desc: "LAST-MINUTE RESERVATIONS SUBJECT TO AVAILABILITY."
        },
        {
            id: 3,
            desc: "5X POINTS WITH BLADE APPLIES TO ALL ELIGIBLE BLADE SERVICES. 5X POINTS IS CALCULATED AND APPLIED AT THE END OF STATEMENT PERIODS THAT INCLUDE SETTLED BLADE TRANSACTIONS."
        },
        {
            id: 4,
            desc: "PROVIDED AS A $189 STATEMENT CREDIT TO YOUR ATLAS ACCOUNT UPON PURCHASE OF CLEAR PLUS ANNUAL MEMBERSHIP WITH YOUR ATLAS CARD. VISIT ENROLL.CLEARME.COM/ENROLL/ TO LEARN MORE."
        },
        {
            id: 5,
            desc: "ATLAS CARDHOLDERS ARE ELIGIBLE TO RECEIVE REIMBURSEMENT FOR UP TO $600 PER YEAR OF CANCELLATION/CHANGE FEE INCURRED WITH RESPECT TO ELIGIBLE AIRFARE PURCHASES THAT ARE CANCELED FOR ANY REASON, FOR WHICH REIMBURSEMENT IS SOUGHT BEFORE THE BENEFIT END DATE, AND IF THE ELIGIBLE CARDHOLDER IS NOT ELIGIBLE TO RECEIVE A REIMBURSEMENT FROM ANOTHER SOURCE."
        },
        {
            id: 6,
            desc: "VISIT HTTPS://ATLASCARD.COM/VISA-INFINITE TO LEARN MORE."
        },
        {
            id: 7,
            desc: "YOUR PHYSICAL CARD DETAILS ARE AVAILABLE TO ACCESS ANY TIME WITHIN ATLAS APP."
        },
        {
            id: 8,
            desc: "REWARDED CATEGORIES ELIGIBLE FOR 3X POINTS UPGRADE INCLUDE DINING, FLIGHTS, HOTELS, RIDESHARES, NIGHTLIFE, FASHION, GROCERIES, WELLNESS, HEALTH, HOME, AND AUTO SERVICES. 3X POINTS UPGRADE IS CALCULATED AND APPLIED AT THE END OF EACH STATEMENT PERIOD ON SETTLED TRANSACTIONS WITHIN YOUR TOP REWARDED CATEGORY BY DOLLAR AMOUNT. OUTSIDE OF THE TOP SPEND CATEGORY, SETTLED TRANSACTIONS FOR PRODUCTS AND SERVICES PROVIDED BY MERCHANTS AND/OR CATEGORIES NOT SUBJECT TO ANOTHER POINTS MULTIPLIER, WILL ACCRUE 1 POINT FOR EVERY DOLLAR SPENT (1X POINTS) AFTER THE APPLICABLE BILLING CYCLE. SUBJECT TO RESTRICTIONS AND THE REWARDS & BENEFIT TERMS."
        },
        {
            id: 9,
            desc: "CREATE UNLIMITED NEW CARDS WITHIN ATLAS APP, WITH UP TO FIVE ACTIVE CARDS AT ANY ONE TIME."
        },
        {
            id: 10,
            desc: "CARDHOLDER IS RESPONSIBLE FOR THE COST OF PURCHASES OF GOODS AND SERVICES AND/OR THIRD PARTY EXPENSES AND SERVICES INCURRED IN RELATION TO ANY FULFILLED REQUESTS."
        },
        {
            id: 11,
            desc: "PROVIDED AS A $199 STATEMENT CREDIT TO YOUR ATLAS ACCOUNT UPON PURCHASE OF ONE MEDICAL ANNUAL MEMBERSHIP WITH YOUR ATLAS CARD. VISIT ONEMEDICAL.COM/ATLAS/ TO LEARN MORE."
        },
        {
            id: 12,
            desc: "COMPLIMENTARY $100 ANNUAL EREWHON CAFE MEMBERSHIP. BENEFIT ENROLLMENT INSTRUCTIONS PROVIDED IN APP."
        },
        {
            id: 13,
            desc: "UP TO $300 IN ANNUAL STATEMENT CREDITS ($25/MONTH). GET YOUR FIRST MONTH FREE BY USING THE FUTURE FITNESS ATLAS CARDHOLDER ENROLLMENT PAGE. VISIT FUTURE.CO/ATLASCARD TO LEARN MORE."
        },
        {
            id: 14,
            desc: "ATLAS IS A TRUE CHARGE CARD WITH NO PRE-SET SPENDING LIMITS. THIS MEANS YOUR SPENDING LIMIT IS FLEXIBLE. UNLIKE TRADITIONAL CARDS WITH SET LIMITS, THE AMOUNT YOU CAN SPEND FLEXIBLY ADAPTS BASED ON A RANGE OF FACTORS SUCH AS YOUR PURCHASES, STATEMENT BALANCE PAYMENTS, AND CREDIT HISTORY."
        }
    ],
    copyright: "ISSUED BY LEAD BANK | 2023 © ATLAS EXPLORATION, INC.",
    footerDesc: 'ATLAS EXPLORATION, INC IS A TECHNOLOGY COMPANY, NOT A BANK. ATLAS CARD IS ISSUED BY LEAD BANK ("ISSUER"). AN APPLICATION IS REQUIRED. CARDHOLDERS MUST BE AT LEAST 18 YEARS OLD AND A CITIZEN OF THE UNITED STATES, OR A PERMANENT RESIDENT WITH A VALID SOCIAL SECURITY NUMBER (SSN) OR ITIN. FINANCING IS SUBJECT TO ISSUERS APPROVAL. PAYMENT OF ACCOUNT BALANCE DUE IN FULL MONTHLY. FEES MAY BE ASSESSED ON OVERDUE AMOUNTS. AN ANNUAL MEMBERSHIP FEE APPLIES.'
}

export {
    homeBannerData, tableContentTasteMaker, tasteMakerData, highFlyerData, 
    tableContentHighFlyer, headTurnerData, tableContentHeadTurner, powerCoupleData, tableContentPowerCoupleData,
    trulyPersonalData, tableContentTrulyPersonal, executiveBriefData, tableContentExecutiveBrief, footerTopData,
    footerBottomData
};
