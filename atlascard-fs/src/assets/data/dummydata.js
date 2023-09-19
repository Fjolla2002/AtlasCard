import homeBannerImg from '../images/atlas-card-poster-end.webp';
import tasteMaker1 from '../images/tastemaker1.jpg';
import tasteMaker2 from '../images/tastemaker2.jpg';
import tasteMaker3 from '../images/tastemaker3.jpg';
import tasteMaker4 from '../images/tastemaker4.jpg';

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
    images: [
        tasteMaker1,
        tasteMaker2,
        tasteMaker3,
        tasteMaker4,
    ],
    imagesDesc: [
        "SUPPER CLUB RESERVATIONS, INSIDE ATLAS APP.",
        "HORSES, LA, ON ATLAS SUPPER CLUB.",
        "FELIX TRATTORIA, LA, ON ATLAS SUPPER CLUB.",
        "CUCINA ALBA, NYC, ON ATLAS SUPPER CLUB.",
    ],
}

export {
    homeBannerData, tableContentTasteMaker, tasteMakerData
};
