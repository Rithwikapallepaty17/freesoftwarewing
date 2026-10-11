import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Community.css";
import Navbar from "./Navbar";

// =========================================================
// IMAGE IMPORTS
// Keep commented until you have the images.
// =========================================================

// Faculty Coordinator
const raviKiran = "https://files.catbox.moe/j5ksng.jpg";

// General
const harshini = "https://files.catbox.moe/1f9y3q.jpg";
const sahastra = "https://files.catbox.moe/dni4zf.jpg";
const revanth = "https://files.catbox.moe/o5ckww.jpg";
const varun = "https://files.catbox.moe/4igx6q.jpg";

// Technical
const rithwika = "https://files.catbox.moe/q26l24.jpg";
const maniteja = "https://files.catbox.moe/nkl9mu.jpg";
const Akshay = "https://files.catbox.moe/42rvgy.jpg";

// Public Relations
const raniPrasanna = "https://files.catbox.moe/q1ajc8.jpg";
const jashwanth = "https://files.catbox.moe/ofm412.jpg";
const suhreeth = "https://files.catbox.moe/rghwvz.jpg";

// Design & Social Media
const akhila = "https://files.catbox.moe/tvjk4a.jpg";
const laxmiPriya = "https://files.catbox.moe/en6c7w.jpg";
const avinash = "https://files.catbox.moe/a4wvcg.jpg";
const harshitha = "https://files.catbox.moe/6o4b56.jpg";

// Arts
const roopa = "https://files.catbox.moe/ly4800.jpg";
const abhiPreethi = "https://files.catbox.moe/wg7mwk.jpg";
const shalini = "https://files.catbox.moe/ayjdax.jpg";

// Event Management
const shivani = "https://files.catbox.moe/w4lgd3.jpg";
const hasini = "https://files.catbox.moe/hozd9d.jpg";
const siddarth = "https://files.catbox.moe/ea0n1a.jpg";

// Logistics
const jeshwanth = "https://files.catbox.moe/wnxqju.jpg";
const satwik = "https://files.catbox.moe/ncccq8.jpg";

// Publicity
const lavanya = "https://files.catbox.moe/0a7h6v.jpg";
const keerthi = "https://files.catbox.moe/pbvvcq.jpg";
const geethika = "https://files.catbox.moe/ok0dj8.jpg";

// Documentation
const vania = "https://files.catbox.moe/4nceaq.jpg";
const manideep = "https://files.catbox.moe/jipxyz.jpg";
const rithvik = "https://files.catbox.moe/k6ipjz.jpg";
// =========================================================
// ICONS
// =========================================================

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.84v1.57h.05c.54-1.02 1.84-2.1 3.8-2.1 4.06 0 4.81 2.67 4.81 6.14v5.89h-4v-5.22c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76v5.31h-4V9.75Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

//instagram links:
const instagramByName = {
    "Bommu Jashwanth Sai Sri Reddy": "https://www.instagram.com/_jashwanth_097",
    "Akinapally Avinash": "https://www.instagram.com/_avinashhhhhh_",
    "Shivani Rao Tula": "https://www.instagram.com/shivani.__.tula",
    "Akhila Kadem": "https://www.instagram.com/akhila_kadem",
    "NADIMINTI MANIDEEP CHOWDARY": "https://www.instagram.com/unknown_manideep_2007",
    "Rani Prasanna": "https://www.instagram.com/_pra_sanna_.07",
    "V. Lavanya Reddy": "https://www.instagram.com/lavanya_reddy_._",
    "Abhipreethi Thangallapally": "https://www.instagram.com/abhipreethi12",
    "E. Usha Keerthi": "https://www.instagram.com/_keerthi_16_08",
    "B. Sathwik": "https://www.instagram.com/sathwikk._7",
    "Adepu Revanth": "https://www.instagram.com/revanth.inn/",
    "Varun Gandhe": "https://www.instagram.com/gandheboy",
    "Rithwika Pallepaty": "https://www.instagram.com/rithwikapallepaty",
    "Rithvik Kesarla": "https://www.instagram.com/not_rithvik76",
    "G SAHASTRA": "https://www.instagram.com/sahastraa__.__",
    "Vania Battu": "https://www.instagram.com/vania_battu",
    "ARUR JESHWANTH": "https://www.instagram.com/_jashwanth_03",
    "Siddarth": "https://www.instagram.com/siddu__3",
    "Maniteja Miriyala": "https://www.instagram.com/money.teja._",
    "Suhreeth Bharadwaj": "https://www.instagram.com/suhreeth_",
    "N. Hasini": "https://www.instagram.com/nimmala._.hasini",
    "T. Geethika Shanmukhi": "https://www.instagram.com/geethika.here/",
    "Akshay Chandra": "https://www.instagram.com/akshaysayzz",

};


// =========================================================
// COMMUNITY DATA
// =========================================================



const communityData = [
   
    {
        name: "ADMIN",
        number: "01",
        tagline: "We plan the path, make the call, and follow through, so the work never loses its rhythm.",
        members: [
            { name: "Varun Gandhe", year: "3rd Year",image: varun, linkedin: "https://www.linkedin.com/in/varungandhe" },
            { name: "T Harshini", year: "3rd Year", image: harshini, linkedin: "https://www.linkedin.com/in/t-harshini-0b8b79336" },
            { name: "Adepu Revanth", year: "3rd Year",image: revanth, linkedin: "https://www.linkedin.com/in/revanthadepu/" },
            { name: "G SAHASTRA", year: "3rd Year", image: sahastra, linkedin: "https://www.linkedin.com/in/sahastra-g" },
        ],
    },
     {
        name: "TECHNICAL",
        number: "02",
        tagline: "We build what's seen, mend what breaks, and sharpen each other's craft.",
        members: [
            { name: "Akshay Chandra", year: "3rd Year", image: Akshay, linkedin: "https://www.linkedin.com/in/akshay-chandra2816" ,instagram:"https://www.instagram.com/akshaysayzz/?hl=en"},
            { name: "Rithwika Pallepaty", year: "2nd Year", image: rithwika, linkedin: "https://www.linkedin.com/in/rithwika-pallepaty-7a41403a0", instagram: "https://www.instagram.com/rithwikapallepaty?stkn=dTRhanZqYmVtZmt6"},
            { name: "Maniteja Miriyala", year: "2nd Year", image: maniteja, linkedin: "https://www.linkedin.com/in/maniteja-miriyala-1355a1432" },
        ],
    },

    {
        name: "PUBLIC RELATIONS",
        number: "03",
        tagline: "We carry FSW's voice to colleges, speakers, and communities, and bring their ideas home.",


        members: [
            
            {
                name: "Bommu Jashwanth Sai Sri Reddy",
                year: "2nd Year",
                image: jashwanth,
                linkedin:
                    "https://www.linkedin.com/in/jashwanth-bommu-b642b43b9",
            },
            {
                name: "Rani Prasanna",
                year: "2nd Year",
                image: raniPrasanna,
                linkedin:
                    "https://www.linkedin.com/in/sriram-rani-prasanna-07687a400",
            },
        ],
    },

    {
        name: "DESIGN & SOCIAL MEDIA",
        number: "04",
      tagline: "We shape how FSW looks, from every poster to every reel, so the message is felt before it's read.",
        members: [
            {
                name: "Akhila Kadem",
                year: "3rd Year",
                image: akhila,
                linkedin:
                    "https://www.linkedin.com/in/akhila-kadem-401997327",
            },
            {
                name: "Bingi Laxmi Priya",
                year: "3rd Year",
                image: laxmiPriya,
                linkedin:
                    "https://www.linkedin.com/in/laxmipriyabingi",
            },
            {
                name: "Akinapally Avinash",
                year: "2nd Year",
                image: avinash,
                linkedin:
                    "https://www.linkedin.com/in/avinash-akinapally-a58918433",
            },
            {
                name: "Harshitha P",
                year: "2nd Year",
                image: harshitha,
                linkedin:
                    "https://www.linkedin.com/in/𝓗𝓪𝓻𝓼𝓱𝓲𝓽𝓱𝓪-p-433630385",
            },
        ],
    },

    {
        name: "ARTS",
        number: "05",
        tagline: "We give FSW its hand-drawn soul, from quiet sketches to walls that speak.",

        members: [
            {
                name: "P Roopa",
                year: "3rd Year",
                image: roopa,
                linkedin:
                    "https://www.linkedin.com/in/p-roopa-36a020328/",
            },
            {
                name: "Poojari Shalini",
                year: "3rd Year",
                image: shalini,
                linkedin:
                    "https://www.linkedin.com/in/shalini-poojari-b14908380",
            },
            {
                name: "Abhipreethi Thangallapally",
                year: "2nd Year",
                image: abhiPreethi,
                linkedin:
                    "https://www.linkedin.com/in/abhipreethi-thangallapally-a8a9a2395",
            },
        ],
    },

    {
        name: "EVENT MANAGEMENT",
        number: "06",
       tagline: "From the first spark of a plan to the last light switched off, we hold the whole evening together.",

        members: [
            {
                name: "Siddarth",
                year: "3rd Year",
                image: siddarth,
                linkedin:"https://www.linkedin.com/in/siddarth-007",
            },
            {
                name: "Shivani Rao Tula",
                year: "3rd Year",
                image: shivani,
                linkedin:
                    "https://www.linkedin.com/in/shivani-rao-tula-97966a341",
            },
            {
                name: "N. Hasini",
                year: "2nd Year",
                image: hasini,
                linkedin:
                    "https://www.linkedin.com/in/nimmala-hasini-410997433",
            },
        ],
    },

    {
        name: "LOGISTICS",
        number: "07",
        tagline: "We prepare the stage before the curtain rises: venue, supplies, setup, all in place.",

        members: [
            {
                name: "ARUR JESHWANTH",
                year: "3rd Year",
                image: jeshwanth,
                linkedin:
                    "https://www.linkedin.com/in/arur-jeshvanth-79b284335",
            },
            {
                name: "B. Sathwik",
                year: "2nd Year",
                image: satwik,
            },
        ],
    },

    {
        name: "PUBLICITY",
        number: "08",
        tagline: "We carry the word far and wide, so the room fills with people who came because they heard.",

        members: [
            {
                name: "Suhreeth Bharadwaj",
                year: "3rd Year",
                image: suhreeth,
                linkedin:
                    "https://www.linkedin.com/in/suhreeth-bharadwaj-korrapati-33329a369/",
            },
            {
                name: "V. Lavanya Reddy",
                year: "3rd Year",
                image: lavanya,
                linkedin:
                    "https://www.linkedin.com/in/lavanyareddyvadala",
            },
            {
                name: "E. Usha Keerthi",
                year: "2nd Year",
                image: keerthi,
                linkedin:
                    "https://www.linkedin.com/in/usha-keerthi-3484493a1",
            },
            {
                name: "T. Geethika Shanmukhi",
                year: "2nd Year",
                image: geethika,
                linkedin:
                    "https://www.linkedin.com/in/tummuri-geethika-shanmukhi-979652400",
            },
        ],
    },

    {
        name: "DOCUMENTATION",
        number: "09",
        tagline: "We gather the reports, the records, and the photographs, so every moment outlives the day it happened.",

        members: [
            {
                name: "Vania Battu",
                year: "3rd Year",
                image: vania,
                linkedin:
                    "https://www.linkedin.com/in/vania-battu-902323",
            },
            {
                name: "NADIMINTI MANIDEEP CHOWDARY",
                year: "3rd Year",
                image: manideep,
                linkedin:
                    "https://www.linkedin.com/in/nadiminti-manideep-chowdary-a2a986327",
            },
            {
                name: "Rithvik Kesarla",
                year: "2nd Year",
                image: rithvik,
                linkedin:
                    "https://www.linkedin.com/in/rithvikkesarla/",



            },
        ],
    },

    
];

communityData.forEach((domain) => {
    domain.members.forEach((member) => {
        member.instagram = member.instagram || instagramByName[member.name];
    });
});

const socialsByName = Object.fromEntries(
    communityData.flatMap((domain) =>
        domain.members.map((m) => [
            m.name,
            { linkedin: m.linkedin, instagram: m.instagram },
        ])
    )
);


// =========================================================
// LEADERSHIP / SLIDER DATA
//
// IMPORTANT:
// This is NOT one person per domain.
// Every individual member is included.
// =========================================================

// =========================================================
// LEADERSHIP / SLIDER DATA
// =========================================================

const leadershipData = [
    // =========================
    // CORE LEADERSHIP
    // =========================

    {
        name: "Varun Gandhe",
        role: "PRESIDENT",
        year: "3RD YEAR",
        image: varun,
    },

    {
        name: "T Harshini",
        role: "VICE PRESIDENT",
        year: "3RD YEAR",
        image: harshini,
    },

    {
        name: "Adepu Revanth",
        role: "GENERAL SECRETARY",
        year: "3RD YEAR",
        image: revanth,
    },

    {
        name: "G SAHASTRA",
        role: "JOINT SECRETARY",
        year: "3RD YEAR",
        image: sahastra,
    },


    // =========================
    // TECHNICAL
    // =========================

    {
        name: "Akshay Chandra",
        role: "TECHNICAL",
        year: "3RD YEAR",
        image: Akshay,
    },

    {
        name: "Rithwika Pallepaty",
        role: "TECHNICAL",
        year: "2ND YEAR",
        image: rithwika,
    },

    {
        name: "Maniteja Miriyala",
        role: "TECHNICAL",
        year: "2ND YEAR",
        image: maniteja,
    },


    // =========================
    // PUBLIC RELATIONS
    // =========================

    

    {
        name: "Bommu Jashwanth Sai Sri Reddy",
        role: "PUBLIC RELATIONS",
        year: "2ND YEAR",
        image: jashwanth,
    },

    {
        name: "Rani Prasanna",
        role: "PUBLIC RELATIONS",
        year: "2ND YEAR",
        image: raniPrasanna,
    },


    // =========================
    // DESIGN & SOCIAL MEDIA
    // =========================

    {
        name: "Akhila Kadem",
        role: "DESIGN & SOCIAL MEDIA",
        year: "3RD YEAR",
        image: akhila,
    },

    {
        name: "Bingi Laxmi Priya",
        role: "DESIGN & SOCIAL MEDIA",
        year: "3RD YEAR",
        image: laxmiPriya,
    },

    {
        name: "Akinapally Avinash",
        role: "DESIGN & SOCIAL MEDIA",
        year: "2ND YEAR",
        image: avinash,
    },

    {
        name: "Harshitha P",
        role: "DESIGN & SOCIAL MEDIA",
        year: "2ND YEAR",
        image: harshitha,
    },


    // =========================
    // ARTS
    // =========================

    {
        name: "P Roopa",
        role: "ARTS",
        year: "3RD YEAR",
        image: roopa,
    },

    {
        name: "Poojari Shalini",
        role: "ARTS",
        year: "3RD YEAR",
        image: shalini,
    },

    {
        name: "Abhipreethi Thangallapally",
        role: "ARTS",
        year: "2ND YEAR",
        image: abhiPreethi,
    },


    // =========================
    // EVENT MANAGEMENT
    // =========================

    {
        name: "Siddarth",
        role: "EVENT MANAGEMENT",
        year: "3RD YEAR",
        image: siddarth,
    },

    {
        name: "Shivani Rao Tula",
        role: "EVENT MANAGEMENT",
        year: "3RD YEAR",
        image: shivani,
    },

    {
        name: "N. Hasini",
        role: "EVENT MANAGEMENT",
        year: "2ND YEAR",
        image: hasini,
    },


    // =========================
    // LOGISTICS
    // =========================

    {
        name: "ARUR JESHWANTH",
        role: "LOGISTICS",
        year: "3RD YEAR",
        image: jeshwanth,
    },

    {
        name: "B. Sathwik",
        role: "LOGISTICS",
        year: "2ND YEAR",
        image: satwik,
    },


    // =========================
    // PUBLICITY
    // =========================

    {
        name: "Suhreeth Bharadwaj",
        role: "PUBLICITY",
        year: "3RD YEAR",
        image: suhreeth,
    },

    {
        name: "V. Lavanya Reddy",
        role: "PUBLICITY",
        year: "3RD YEAR",
        image: lavanya,
    },

    {
        name: "E. Usha Keerthi",
        role: "PUBLICITY",
        year: "2ND YEAR",
        image: keerthi,
    },

    {
        name: "T. Geethika Shanmukhi",
        role: "PUBLICITY",
        year: "2ND YEAR",
        image: geethika,
    },


    // =========================
    // DOCUMENTATION
    // =========================

    {
        name: "Vania Battu",
        role: "DOCUMENTATION",
        year: "3RD YEAR",
        image: vania,
    },

    {
        name: "NADIMINTI MANIDEEP CHOWDARY",
        role: "DOCUMENTATION",
        year: "3RD YEAR",
        image: manideep,
    },

    {
        name: "Rithvik Kesarla",
        role: "DOCUMENTATION",
        year: "2ND YEAR",
        image: rithvik,
    },

     

  
];

 // Role lookup — matches a member's name to their leadership role
    const roleByName = Object.fromEntries(
    leadershipData.map((person) => [person.name, person.role])
);

// =========================================================
// LEADERSHIP SLIDER
// =========================================================

function LeadershipSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const totalProfiles = leadershipData.length;

    const getPosition = (index) => {
        let position = index - activeIndex;

        if (position > Math.floor(totalProfiles / 2)) {
            position -= totalProfiles;
        }

        if (position < -Math.floor(totalProfiles / 2)) {
            position += totalProfiles;
        }

        return position;
    };

    const handleProfileClick = (index) => {
        setActiveIndex(index);
    };

    const goPrevious = () => {
        setActiveIndex(
            (activeIndex - 1 + totalProfiles) %
                totalProfiles
        );
    };

    const goNext = () => {
        setActiveIndex(
            (activeIndex + 1) % totalProfiles
        );
    };

    return (
        <section className="community-leadership">

            {/* HEADING */}

            <div className="community-leadership-heading">

                <div className="community-leadership-label">
                    08 — OUR PEOPLE
                </div>

                <h2>
                    The people
                    <br />
                    behind <em>FSW.</em>
                </h2>

                <p>
                    The people who lead, organise and keep
                    the Free Software Wing moving forward.
                </p>

            </div>


            {/* SLIDER */}

            <div className="community-leadership-slider">

                <div className="community-slider-track">

                    {leadershipData.map((person, index) => {

                        const position =
                            getPosition(index);

                        const distance =
                            Math.min(
                                Math.abs(position),
                                3
                            );

                        const links = socialsByName[person.name] || {};

                        let scale = 0.82;
                        let opacity = 0.35;

                        if (
                            position === -1 ||
                            position === 1
                        ) {
                            scale = 0.92;
                            opacity = 0.65;
                        }

                        if (position === 0) {
                            scale = 1;
                            opacity = 1;
                        }

                        return (
                            <div
                                key={person.name}
                                className={`community-slide ${
                                    index === activeIndex
                                        ? "is-active"
                                        : ""
                                }`}
                                style={{
                                    transform: `
                                        translateX(
                                            calc(
                                                -50% +
                                                ${
                                                    position *
                                                    250
                                                }px
                                            )
                                        )
                                        translateY(-50%)
                                        scale(${scale})
                                    `,
                                    opacity,
                                    zIndex:
                                        30 - distance,
                                }}
                                onClick={() =>
                                    handleProfileClick(index)
                                }
                            >

                                {/* IMAGE */}

                                <div className="community-slide-image">

                                    {person.image ? (
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                        />
                                    ) : (
                                        <div className="community-slide-placeholder">
                                            <span>
                                                FSW
                                            </span>
                                        </div>
                                    )}


                                    {/* GLASS DETAILS */}
<div className="community-slide-info">

    <span className="community-slide-role">
        {person.role}
    </span>

    <h3>{person.name}</h3>

    <span className="community-slide-year">
        {person.year}
    </span>

    {(links.instagram || links.linkedin) && (
        <div className="community-member-socials">

            {links.instagram && (
                <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${person.name} on Instagram`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <InstagramIcon />
                </a>
            )}

            {links.linkedin && (
                <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <LinkedInIcon />
                </a>
            )}

        </div>
    )}

</div>

                                </div>

                            </div>
                        );
                    })}

                </div>


                {/* CONTROLS */}

                <div className="community-slider-controls">

                    <button
                        type="button"
                        className="community-slider-arrow"
                        onClick={goPrevious}
                        aria-label="Previous profile"
                    >
                        ←
                    </button>

                    <div className="community-slider-counter">

                        <span>
                            {String(
                                activeIndex + 1
                            ).padStart(2, "0")}
                        </span>

                        <span>/</span>

                        <span>
                            {String(
                                totalProfiles
                            ).padStart(2, "0")}
                        </span>

                    </div>

                    <button
                        type="button"
                        className="community-slider-arrow"
                        onClick={goNext}
                        aria-label="Next profile"
                    >
                        →
                    </button>

                </div>

            </div>

        </section>
    );
}



// =========================================================
// SORT MEMBERS
// =========================================================

function sortMembers(members) {
    return [...members].sort((a, b) => {
        if (
            a.year === "3rd Year" &&
            b.year === "2nd Year"
        ) {
            return -1;
        }

        if (
            a.year === "2nd Year" &&
            b.year === "3rd Year"
        ) {
            return 1;
        }

        return 0;
    });
}


// =========================================================
// MEMBER CARD
// =========================================================

// =========================================================
// MEMBER CARD 
// =========================================================

function Member({ member, index }) {
    return (
        <article className="community-member">
            <div className="community-member-image">
                {/* Number at top-left */}
                <span className="community-member-number">
                    {String(index + 1).padStart(2, "0")}
                </span>

                {member.image ? (
                    <img src={member.image} alt={member.name} />
                ) : (
                    <div className="community-member-placeholder">
                        <span>FSW</span>
                    </div>
                )}

                {/* Glass detail card matching the slider */}
                <div className="community-member-details">
                    <div className="community-member-text">
                        <span className="community-member-role">
                            {roleByName[member.name] || "FSW MEMBER"}
                        </span>
                        <h3>{member.name}</h3>
                        <span className="community-member-year">
                            {member.year}
                        </span>
                    </div>

                    {(member.instagram || member.linkedin) && (
                        <div className="community-member-socials">
                            {member.instagram && (
                                <a
                                    href={member.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${member.name} on Instagram`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <InstagramIcon />
                                </a>
                            )}

                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`${member.name} on LinkedIn`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <LinkedInIcon />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

// =========================================================
// COMMUNITY PAGE
// =========================================================

export default function Community() {

    return (
        <main className="community-page">

            <Navbar />
            {/* =================================================
                HERO
            ================================================= */}

            <section className="community-hero">


                <div className="community-hero-label">
                    07 — COMMUNITY
                </div>

                <h1>
                    Meet the <em>community.</em>
                </h1>

                <p>
                    The people behind FSW — builders,
                    designers, organisers and open-source
                    enthusiasts working together at GRIET.
                </p>

                <div className="community-hero-meta">
                    25+ MEMBERS · 9 DOMAINS
                </div>

            </section>


            {/* =================================================
                FACULTY COORDINATOR
            ================================================= */}

            <section className="community-faculty">

                {/* <div className="community-faculty-label">
                    FACULTY COORDINATOR
                </div> */}

                <div className="community-faculty-card">

                    <div className="community-faculty-image">
                        <img
                        src={raviKiran}
                        alt="K. Ravikiran"
                        />
                    </div>

                    <div className="community-faculty-info">

                        <div className="community-faculty-role">
                            FACULTY COORDINATOR · FSW
                        </div>

                        <h2>
                            K. Ravikiran
                        </h2>

                        <p>
                            Guiding the Free Software Wing
                            at GRIET and encouraging students
                            to explore, build and contribute
                            to the open-source ecosystem.
                        </p>

                        <span className="community-faculty-location">
                            GRIET · HYDERABAD
                        </span>

                    </div>

                </div>

            </section>


            {/* =================================================
                OUR PEOPLE SLIDER
            ================================================= */}

            <LeadershipSlider />

                {/* =================================================
                DOMAINS
            ================================================= */}

            <section className="community-domains">
                <div className="community-domains-heading">
                    <div className="community-domains-label">
                        09 — DOMAINS
                    </div>
                    <h2>
                        Everyone has <em>a part to play.</em>
                    </h2>
                </div>

                {communityData.map((domain) => (
                    <section
                        className="community-domain"
                        key={domain.number}
                    >
                        {/* DOMAIN HEADER */}
                        <div className="community-domain-header">
                            <div className="community-domain-title">
                                <span className="community-domain-number">
                                    {domain.number}
                                </span>
                                <h3>{domain.name}</h3>
                            </div>
                            <span className="community-domain-line" />
                        </div>

                        {/* TAGLINE */}
                        {domain.tagline && (
                            <p className="community-domain-tagline">
                                {domain.tagline}
                            </p>
                        )}

                        {/* ALL MEMBERS IN A SINGLE HORIZONTAL LINE */}
                        <div className="community-members-grid">
                            {domain.members.map((member, index) => (
                                <Member
                                    key={member.name}
                                    member={member}
                                    index={index}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </section>
            
            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="community-final">

                <div className="community-final-label">
                    BE PART OF FSW
                </div>

                <h2>
                    Build something
                    <br />
                    <em>more open.</em>
                </h2>

                <p>
                    Learn. Build. Contribute.
                    <br />
                    There is always room for another builder.
                </p>

                <Link
                    to="/"
                    className="community-final-button"
                >
                    Explore FSW
                    <span>↗</span>
                </Link>

            </section>

        </main>
    );
}