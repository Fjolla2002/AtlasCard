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
}

const highFlyerData = {
    title: "High Flyer",
    subTitle : "Built for (spontaneous) travel.",
    desc: "No matter where your next grand tour takes you, Atlas is there as your co-pilot, with bespoke flight benefits for when you're ready to go on the spur of the moment.",
    image: highFlyerImage,
    imageDesc: "BESPOKE FLIGHT BENEFITS, INSIDE ATLAS APP.",
    visa: {
        icon: "+",
        title: "Visa Infinite Benefits⁶",
        desc: "Priority Pass, Luxury Hotel Collection,no foreign transaction fees, and more.",
        btnDesc: "Discover"
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
    bannerImg: powerCoupleImg,
    bannerImgDesc: "FAR ABOVE THE TYPICAL APP EXPERIENCE.",
    images: [
        powerCouple1,
        powerCouple2,
        powerCouple3
    ],
    imagesDesc: [
        "YOUR PURCHASES, REIMAGINED AS MOMENTS.",
        "CREATE AND MANAGE VIRTUAL CARDS.",
        "POINTS UPGRADES, WITH DYNAMIC REWARDS."
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
    images: [
        trulyPersonal1,
        trulyPersonal2
    ],
    imagesDesc: [
        "YOUR PERSONAL ADVISOR, NOW IN IMESSAGE.",
        "YOUR COMPANION THROUGH EVERY ADVENTURE."
    ]

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

export {
    homeBannerData, tableContentTasteMaker, tasteMakerData, highFlyerData, 
    tableContentHighFlyer, headTurnerData, tableContentHeadTurner, powerCoupleData, tableContentPowerCoupleData,
    trulyPersonalData, tableContentTrulyPersonal
};
