// =========================================================
// LOCAL EVENT IMAGES (served directly from public/events/)
// =========================================================

const sih = "/events/sih.jpg";
const vivitsu2026Stage = "/events/vivitsu-2026-stage.jpg";
const vivitsu2024Stage = "/events/vivitsu-2024-stage.jpg";
const vivitsu25 = "/events/vivitsu-25-crowd.jpg";
const vivitsu23 = "/events/vivitsu-23.png";
const fossFest24 = "/events/foss-fest-24.jpeg";
const fossFestStage = "/events/foss-fest-stage.jpeg";
const fusionTech2025 = "/events/fusion-tech-2025.jpg";
const photoFiesta2022 = "/events/photo-fiesta-2022.png";
const techBola2022 = "/events/tech-bola-2022.png";
const techbola = "/events/tech-bola.jpg";
const dbms = "/events/dbms-crowd.jpg";
const pyhub = "/events/pyhub.jpeg";
const cyberbloom = "/events/cyberbloom.webp";
const lexeme = "/events/lexeme.jpeg";

// Archive & Sessions
const img01FutureGuidance = "/events/01_seminar_on_future_guidance.png";
const img02CyberSecurity = "/events/02_seminar_on_cyber_security.png";
const img03WebTalk = "/events/03_introduction_to_free_software_web_talk.png";
const img04QuizEma = "/events/04_quiz_ema_talkies.png";
const img05EQuizFoss = "/events/05_e_quiz_foss_awareness.png";
const img06Picturize = "/events/06_picturize_the_fact.png";
const img07SciComputing = "/events/07_introduction_to_scientific_computing_using_python.png";
const img08Chatbot = "/events/08_machine_learning_on_chatbot_design.png";
const img09WebScraping = "/events/09_hands_on_web_scraping.png";
const img10Orientation = "/events/10_orientation_on_free_software.png";
const img11Quiz = "/events/11_quiz.png";
const img12GuestOrient = "/events/12_guest_talk_orientation_on_free_software.png";
const img13IBM = "/events/13_ibm_expert_session_big_data_analytics.png";
const img14SciComputing2018 = "/events/14_workshop_introductory_scientific_computing_with_python.png";
const img15GuestFreeSW = "/events/15_guest_talk_on_free_software.png";
const img16GuestML = "/events/16_guest_talk_on_introduction_to_machine_learning.png";

const events = [
  // 2026
  {
    slug: "sih-2026",
    year: 2026,
    title: "Smart India Hackathon (SIH)",
    date: "3 & 11 September 2026",
    category: "HACKATHON",
    description:
      "A nationwide initiative by the Ministry of Education to give students a platform to solve real-world problems and foster a culture of innovation and problem-solving.",
    image: sih,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202025-2026.pdf",
  },
  {
    slug: "future-guidance-2026",
    year: 2026,
    title: "Seminar on Future Guidance",
    date: "11 February 2026",
    category: "SEMINAR",
    description:
      "A session focused on guiding students towards higher education, international opportunities, admissions, and future career pathways.",
    image: img01FutureGuidance,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202025-2026.pdf",
  },
  {
    slug: "vivitsu-26",
    year: 2026,
    title: "VIVITSU'26",
    date: "30 – 31 January 2026",
    category: "HACKATHON",
    description:
      "A 24-hour hackathon bringing students together to build innovative solutions across multiple technology domains.",
    image: vivitsu2026Stage,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202025-2026.pdf",
  },
  {
    slug: "cyber-security-seminar-2026",
    year: 2026,
    title: "Seminar on Cyber Security",
    date: "20 January 2026",
    category: "CYBER SECURITY",
    description:
      "A session exploring cybersecurity awareness, ethics, industry trends, career opportunities, and digital security.",
    image: img02CyberSecurity,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202025-2026.pdf",
  },

  // 2025
  {
    slug: "fusion-tech-2025",
    year: 2025,
    title: "Fusion Tech",
    date: "22 August 2025",
    category: "WORKSHOP",
    description:
      "A hands-on event covering open-source tools including system administration, version control, containerization, and LLM/API integration.",
    image: fusionTech2025,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202024-2025.pdf",
  },
  {
    slug: "vivitsu-25",
    year: 2025,
    title: "VIVITSU'25",
    date: "9 – 10 April 2025",
    category: "HACKATHON",
    description:
      "A national-level hackathon where students worked together to create solutions for real-world problem statements.",
    image: vivitsu25,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202024-2025.pdf",
  },

  // 2024
  {
    slug: "foss-fest-2024",
    year: 2024,
    title: "FOSS FEST",
    date: "30 November 2024",
    category: "WORKSHOP",
    description:
      "A hands-on technical event covering Git, system administration, version control, and containerization.",
    image: fossFest24,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202024-2025.pdf",
  },
  {
    slug: "vivitsu-24",
    year: 2024,
    title: "VIVITSU'24",
    date: "19 – 20 April 2024",
    category: "HACKATHON",
    description:
      "The second round of the hackathon franchise, bringing together teams to work on real-world problems and develop innovative solutions during a 24-hour challenge.",
    image: vivitsu2024Stage,
    report: "https://www.griet.ac.in/2026/FSW%20Report%202024-2025.pdf",
  },

  // 2023
  {
    slug: "cyber-bloom",
    year: 2023,
    title: "Cyber Bloom",
    date: "5 December 2023",
    category: "CYBER SECURITY",
    description:
      "A cybersecurity-focused event introducing participants to digital security concepts, awareness, and practical security practices.",
    image: cyberbloom,
    report: "https://www.griet.ac.in/2024/FSW%20Report%202023-2024.pdf",
  },
  {
    slug: "vivitsu-23",
    year: 2023,
    title: "VIVITSU'23",
    date: "28 – 29 April 2023",
    category: "HACKATHON",
    description:
      "A 24-hour hackathon where students collaborated to develop solutions for real-world problem statements.",
    image: vivitsu23,
    report: "https://www.griet.ac.in/2024/FSW%20Report%202023-2024.pdf",
  },

  // 2022
  {
    slug: "tech-bola-2",
    year: 2022,
    title: "Tech-Bola 2.0",
    date: "17 November 2022",
    category: "TECHNICAL EVENT",
    description:
      "The second edition of Tech-Bola, a technical game that combined technology, questions, and interactive challenges.",
    image: techBola2022,
    report: "https://www.griet.ac.in/2023/FSW%20Report%202022-2023.pdf",
  },
  {
    slug: "photo-fiesta-gimp-it-up",
    year: 2022,
    title: "Photo Fiesta – GIMP IT UP",
    date: "19 August 2022",
    category: "FOSS",
    description:
      "A creative event centred around GIMP, encouraging participants to explore image editing and digital creativity using free and open-source software.",
    image: photoFiesta2022,
    report: "https://www.griet.ac.in/2023/FSW%20Report%202022-2023.pdf",
  },
  {
    slug: "lexeme-quest",
    year: 2022,
    title: "The Lexeme Quest",
    date: "29 January 2022",
    category: "QUIZ",
    description:
      "A technical conjuncture of FOSS, presented as a multi-level quiz designed to test participants' technical knowledge.",
    image: lexeme,
    report: "https://www.griet.ac.in/2022/FSW%20REPORT%202021-2022.pdf",
  },

  // 2021
  {
    slug: "tech-bola",
    year: 2021,
    title: "Tech-Bola",
    date: "19 November 2021",
    category: "TECHNICAL EVENT",
    description:
      "A technical event combining technology, quizzes, and interactive challenges in an engaging format.",
    image: techbola,
    report: "https://www.griet.ac.in/2022/FSW%20REPORT%202021-2022.pdf",
  },
  {
    slug: "database-management",
    year: 2021,
    title: "Database Management and Application Development",
    date: "30 September 2021",
    category: "WORKSHOP",
    description:
      "A session focused on database management and application development, introducing participants to practical tools and concepts.",
    image: dbms,
    report: "https://www.griet.ac.in/2022/FSW%20REPORT%202021-2022.pdf",
  },
  {
    slug: "pyhub-workshop",
    year: 2021,
    title: "PyHub Workshop",
    date: "23 May 2021",
    category: "PYTHON",
    description:
      "A beginner-friendly Python workshop covering programming fundamentals, GitHub, and hands-on activities.",
    image: pyhub,
    report: "https://www.griet.ac.in/2022/FSW%20REPORT%202021-2022.pdf",
  },
  {
    slug: "free-software-webtalk-2021",
    year: 2021,
    title: "Introduction to Free Software — Web-Talk",
    date: "27 March 2021",
    category: "FOSS",
    description:
      "An online web-talk introducing students to free software, licensing, and open-source alternatives to proprietary tools.",
    image: img03WebTalk,
    report: "https://www.griet.ac.in/images/FSWReport%202020-21.pdf",
  },

  // 2020
  {
    slug: "quiz-ema-talkies",
    year: 2020,
    title: "QUIZ EMA-TALKIES",
    date: "21 August 2020",
    category: "QUIZ",
    description:
      "An online quiz event built around coding, decoding, and cinema-themed challenges.",
    image: img04QuizEma,
    report: "https://www.griet.ac.in/images/FSWReport%202020-21.pdf",
  },
  {
    slug: "e-quiz-foss-awareness",
    year: 2020,
    title: "E-Quiz: FOSS Awareness",
    date: "2020",
    category: "QUIZ",
    description:
      "An online quiz designed to test participants' awareness and understanding of free and open-source software.",
    image: img05EQuizFoss,
    report: "https://www.griet.ac.in/images/FSWReport%202020-21.pdf",
  },
  {
    slug: "picturize-the-fact",
    year: 2020,
    title: "Picturize the Fact",
    date: "28 March – 4 April 2020",
    category: "CREATIVE",
    description:
      "A creative contest encouraging participants to communicate ideas through digital artwork using FOSS tools.",
    image: img06Picturize,
    report: "https://www.griet.ac.in/images/FSWReport%202020-21.pdf",
  },

  // 2019
  {
    slug: "scientific-computing-python",
    year: 2019,
    title: "Introduction to Scientific Computing using Python",
    date: "2019",
    category: "PYTHON",
    description:
      "An introductory session exploring scientific computing using Python and introducing participants to computational approaches.",
    image: img07SciComputing,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "machine-learning-chatbot",
    year: 2019,
    title: "Machine Learning on Chatbot Design",
    date: "2019",
    category: "MACHINE LEARNING",
    description:
      "A technical session introducing machine learning concepts and their application in chatbot design.",
    image: img08Chatbot,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "hands-on-web-scraping",
    year: 2019,
    title: "Hands-on Web Scraping",
    date: "2019",
    category: "WORKSHOP",
    description:
      "A practical session introducing students to web scraping concepts and techniques.",
    image: img09WebScraping,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "orientation-free-software",
    year: 2019,
    title: "Orientation on Free Software",
    date: "2019",
    category: "FOSS",
    description:
      "An orientation introducing students to free and open-source software, its possibilities, and the community surrounding it.",
    image: img10Orientation,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "quiz",
    year: 2019,
    title: "QUIZ",
    date: "2019",
    category: "QUIZ",
    description:
      "An event featuring quiz-based activities designed to engage students through technical and general-interest challenges.",
    image: img11Quiz,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },

  // 2018
  {
    slug: "orientation-free-software-2018",
    year: 2018,
    title: "Guest Talk: Orientation on Free Software's",
    date: "2018",
    category: "FOSS",
    description:
      "A guest session introducing students to free software, its philosophy, possibilities, and role within the open-source community.",
    image: img12GuestOrient,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "ibm-big-data-analytics",
    year: 2018,
    title: "IBM Expert Session — Learning Essentials of Big Data Analytics using InfoSphere BigInsights",
    date: "2018",
    category: "TECHNICAL SESSION",
    description:
      "An expert session introducing students to the essentials of Big Data Analytics using IBM InfoSphere BigInsights.",
    image: img13IBM,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "scientific-computing-python-2018",
    year: 2018,
    title: "Workshop: Introductory Scientific Computing With Python",
    date: "2018",
    category: "PYTHON",
    description:
      "A workshop introducing participants to scientific computing concepts and Python-based computational techniques.",
    image: img14SciComputing2018,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },

  // 2017
  {
    slug: "guest-talk-free-software",
    year: 2017,
    title: "Guest Talk on Free Software",
    date: "2017",
    category: "FOSS",
    description:
      "A guest talk introducing students to free software and the ideas and possibilities surrounding open-source technology.",
    image: img15GuestFreeSW,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
  {
    slug: "guest-talk-machine-learning",
    year: 2017,
    title: "Guest Talk on Introduction to Machine Learning",
    date: "2017",
    category: "MACHINE LEARNING",
    description:
      "A guest session introducing students to the fundamentals and applications of machine learning.",
    image: img16GuestML,
    report: "https://www.griet.ac.in/images2/FREE%20SOFWARE%20WING.pdf",
  },
];

export default events;