export type TimelineIconKey =
  | "start"
  | "prompt"
  | "books"
  | "trophy"
  | "code"
  | "video"
  | "certificate"
  | "music";

export interface TimelineEntry {
  icon: TimelineIconKey;
  title: string;
  description: string;
  date: string;
}

export interface TimelineSection {
  company: string;
  role?: string;
  active: number;
  entries: TimelineEntry[];
}

export interface QuoteEntry {
  quote: string;
  citation: string;
}

export const aboutQuotes: QuoteEntry[] = [
  {
    quote:
      "Saving the company approximately $800,000 annually is a remarkable achievement, and it's great to see us utilize a system we already have in place. Reducing complexity is great for all of us.",
    citation: "Sean Neal, Director of Cryptography, PayPal",
  },
  {
    quote:
      "Vault OKR: You've made excellent strides toward Vault expertise this year. Led the strategy to migrate keys and secrets from KeyMaker to Vault. Demonstrated good understanding of Vault's security model and best practices. HashiCorp Certified: Vault Associate is a big win to become an expert of Vault.",
    citation: "Gaurav Singh, Sr. Staff Cybersecurity Engineer, PayPal",
  },
  {
    quote:
      "Thank you for being such an exceptional buddy and making my onboarding experience comfortable. Your proactive support and Day One resources were incredibly helpful, and I still rely on them. I am also very grateful for the dedicated session you held to walk me through KeyMaker and the Cloud Modernization plans for GCP and Vault.",
    citation: "Mukal Tope, Staff Cybersecurity Engineer, PayPal",
  },
  {
    quote:
      "HashiCorp Certified: Vault Associate is a big win. You demonstrated the ability to work on production-grade solutions aligned with best security practice.",
    citation: "Gaurav Singh, Sr. Staff Cybersecurity Engineer, PayPal",
  },
  {
    quote:
      "I've seen Hunter make a strong impact by establishing a visible presence across the organization. His self-motivation, eagerness to learn, and strong ownership demonstrate his drive toward becoming a high-impact emerging leader.",
    citation: "Pugal, Staff Cybersecurity Engineer, PayPal",
  },
  {
    quote:
      "I want to extend a heartfelt thank you for the incredible work you put into PayPal Impact Day. Your efforts made a meaningful difference for our people and our communities. You helped strengthen our culture and bring our customer obsession to life.",
    citation: "Alex Chriss, CEO, PayPal",
  },
  {
    quote:
      "I personally have been stunned at how quickly Hunter has picked up the purpose of our tools and articulates his work using the domain terminology.",
    citation: "Charles Bouvette, Director, Software Engineering, Dell Technologies",
  },
  {
    quote:
      "He has the initiative to read technical books, watch training videos, create sample projects, and make probing inquiries for tasks assigned to him. Such qualities are rare for entry level engineers that I have met.",
    citation: "Angelo Diamante, Software Development Engineer 3, Core10",
  },
  {
    quote:
      "Hunter would be an asset to any employer and I recommend him for any endeavor he chooses to pursue.",
    citation: "Ryan Kelley, Software Engineer 2, Lone Star UAS",
  },
];

export const timelineSections: TimelineSection[] = [
  {
    company: "PayPal",
    role: "Software Engineer 2",
    active: 12,
    entries: [
      {
        icon: "start",
        title: "Start",
        description:
          "I joined PayPal's Secret Management team as a Software Engineer 2, focusing on our enterprise-wide key management system and internal cryptography libraries.",
        date: "September 2024",
      },
      {
        icon: "prompt",
        title: "L1/L2 Support & Incident Response",
        description:
          "I provided L1 rotational on-call support for critical incidents on PayPal's legacy key management and class 2 encryption systems, while also supporting developers at L2 with legacy KMS integrations.",
        date: "Ongoing",
      },
      {
        icon: "code",
        title: "Fortanix Migration Impact",
        description:
          "I drove the Fortanix HSM -> GCP CMEK migration to completion across 22K+ disks and 400+ teams, helping save the company around $800K annually.",
        date: "2025",
      },
      {
        icon: "books",
        title: "Vault Design Forum",
        description:
          "I drove weekly design forums within the Secret Management team and critical architects in the organization to solve some of the most complex issues with the KeyMaker to Vault migration such as enterprise-wide key sharing and key drift, and translating outcomes into actionable deliverables.",
        date: "2025",
      },
      {
        icon: "code",
        title: "Vault Migration Scripts",
        description:
          "I designed and implemented the scripts necessary to migrate applications and their associated keys from our on-premise key management system, KeyMaker, to HashiCorp Vault. These consisted of an application registration script that programmatically wrote Terraform code and created a PR based on the application, and a key migration script that migrated the keys from KeyMaker to Vault.",
        date: "2025",
      },
      {
        icon: "trophy",
        title: "Team Building",
        description:
          "I have assisted in the growth of the Secret Management team by conducting numerous full-time and contract position interviews, as well as onboarding new employees and contractors.",
        date: "2025",
      },
      {
        icon: "code",
        title: "Raptor 5 Library Upgrades",
        description:
          "I released the latest major version of our five internal Java encryption and key management libraries, including fixes for 100+ broken legacy tests, builds, and pipeline jobs.",
        date: "2025 - 2026",
      },
      {
        icon: "trophy",
        title: "Cryptography 2026 OKRs | Cloud Modernization Lead",
        description:
          "I continue to drive weekly organization-wide multi-team design forums for PayPal's GCP cryptography migration, partnering with senior technical leaders to architect enterprise-wide solutions and translate these discussions into actionable deliverables that I and other engineers implement.",
        date: "2025 - 2026",
      },
      {
        icon: "code",
        title: "Enterprise-Wide Class 2 Data Encryption Solution",
        description:
          "I implemented the enterprise-wide class 2 envelope-encryption solution, the \"CryptoSDK\", with GCP Tink and Caffeine caching, and I completed 100k-envelope load testing which resulted in (~0.1ms) warm-cache latency.",
        date: "2025 - 2026",
      },
      {
        icon: "video",
        title: "Cloud Playbacks Forum",
        description:
          "I presented the enterprise-wide class 2 data encryption solution, the \"CryptoSDK\", to the company-wide audience of 50+ key managers, directors, distinguished engineers, and SVPs in the Cloud Playbacks forum.",
        date: "2025 - 2026",
      },
      {
        icon: "code",
        title: "Pub/Sub-driven Key Provisioning Cloud Function",
        description:
          "Implemented a Pub/Sub-driven Cloud Function for automated key provisioning based on a schema-driven message structure.",
        date: "2026",
      },
      {
        icon: "code",
        title: "Data Interoperability",
        description:
          "Implemented a solution to enable data interoperability between cloud applications consuming the CryptoSDK and on-premise applications using the on-premise key management system class 2 encryption service via public key cryptography re-encryption.",
        date: "2026",
      },
      {
        icon: "prompt",
        title: "Team Management",
        description:
          "We have recently onboarded a number of Deloitte contractors and I am going through the process of ramping them up on our various Cryptographic Cloud Modernization initiatives and allocating them where needed.",
        date: "2026",
      },
    ],
  },
  {
    company: "Dell Technologies",
    role: "Software Engineer 1",
    active: 6,
    entries: [
      {
        icon: "start",
        title: "Start",
        description:
          "I started on the Customer Data Marketplace team as primarily a back-end Software Engineer. I was able to quickly learn our tech stack and start contributing to the team.",
        date: "August 2023",
      },
      {
        icon: "code",
        title: "Remediate Vulnerabilities",
        description:
          "I was tasked with remediating vulnerabilities in our application. I was able to remediate over 100 vulnerabilities bringing our reported vulnerabilities down to 0.",
        date: "2023",
      },
      {
        icon: "code",
        title: "Code Coverage",
        description:
          "I was tasked with increasing the code coverage of our primary repository from 66% to 90%. I was able to achieve this by writing 100+ unit tests.",
        date: "2023",
      },
      {
        icon: "code",
        title: "DevOps",
        description:
          "Implemented multiple new DevOps jobs to our CI/CD pipeline with capabilities such as vulnerability detection, branch retrofit automation, and inclusive language detection",
        date: "2024",
      },
      {
        icon: "code",
        title: "Repository Version Upgrades",
        description:
          "Enhanced the performance, security, and maintainability of my team’s repositories by upgrading from .NET 6 to .NET 8",
        date: "2024",
      },
      {
        icon: "code",
        title: "Customer Innovation Council",
        description:
          "Implemented the CI/CD pipeline for the AI application that the Customer Innovation Council is developing.",
        date: "2024",
      },
      {
        icon: "code",
        title: "Malaysia E-Invoice",
        description:
          "Added the required logic to some endpoints of our internal APIs to support the addition of Malaysia E-Invoice capabilities.",
        date: "2024",
      },
    ],
  },
  {
    company: "Lone Star UAS",
    role: "Software Engineer (Intern)",
    active: 3,
    entries: [
      {
        icon: "code",
        title: "MOM Logger Sharp & MOM Log Replayer Sharp",
        description:
          "The logger was C# project that I created for Lone Star UAS. In this program, it subscribed to all topics published to the Message Oriented Middleware MQTT broker. It then stored the messages in files on the local machine. The log replayer was a C# program that parsed the files created by the logger and published them to the Message Oriented Middleware MQTT broker. Both programs utilizes multi-threading.",
        date: "Fall 2021",
      },
      {
        icon: "code",
        title: "Lone Star Web & API",
        description:
          "Throughout my time at Lone Star I have made many additions to the organizations internal web application, API, and database. I have added new features, fixed bugs, and improved the overall performance of the application. These include database calls, internal API calls, upgrades to the internal RESTful API, stored procedures, data visualization, authentication and authorization, and UI changes.",
        date: "Spring 2021",
      },
      {
        icon: "code",
        title: "Force Follower",
        description:
          "Force Follower is a .NET MAUI project that I created and led for Lone Star UAS. The upper management of the organization wanted a way to track the location of their employees on a mission in real time and I was tasked with creating a solution. Even though I have never used .NET MAUI before I chose MAUI so that the project could be easily cross platform and I was able to create a working prototype in a matter of days. After the MVP was created and approved, I refactored the project to be more maintainable, added new features, and fixed bugs and created a production ready application.",
        date: "Fall 2022",
      },
      {
        icon: "code",
        title: "UAS Status Page",
        description:
          "This was a project idea of mine that I thought LSUASC might get some use out of while running a mission. I proposed the project, and it was approved. This page could be displayed on a screen in the Mission Control Center to visualize all Lone Star UAS aircrafts critical data and post alerts if a specific filter is hit. There is a Global filter set to target all aircraft’s critical data and individual filter sets to target specific aircraft’s data. Threshold settings are able to be saved to a cookie for persistence.",
        date: "Fall 2022",
      },
    ],
  },
  {
    company: "Texas A&M University - Corpus Christi",
    active: 3,
    entries: [
      {
        icon: "start",
        title: "Start",
        description:
          "I transferred from Del Mar College to Texas A&M University - Corpus Christi in the spring of 2021 to get an early start on my upper level computer science courses.",
        date: "Spring 2021",
      },
      {
        icon: "start",
        title: "Lone Star UAS",
        description:
          "Just freshly transferred to Texas A&M University - Corpus Christi, I landed a job as a Software Engineering Intern at Lone Star UAS.",
        date: "Fall 2021",
      },
      {
        icon: "books",
        title: "Upper level courses",
        description:
          "The upper-level computer science courses I've taken at Texas A&M Corpus Christi include: Object-Oriented-Programming: A, Internet Programming: A, Systems Programming: A, Capstone: A, Introduction into Artificial Intelligence: B, Algorithms: A, Software Engineering: B, Numerical Methods: B, Image Processing: B, Theory of Programming Languages: B, Intro to Database Systems: B, Operating Systems: B, Computer Networks: B, Software Project Management: A, Survey of Programming Languages: B, Cyber Security: C, Cryptography: B, Technical and professional writing for Computer Science: B, Applied Probability and Statistics: A, and Skills for Computing Professionals 1: B and 2: B.",
        date: "2021-2023",
      },
      {
        icon: "certificate",
        title: "Graduation",
        description:
          "I graduated from the Texas A&M University - Corpus Christi college of Engineering in the spring of 2023 with a Bachelor of Science in Computer Science with a concentration in Systems Programming. (ABET Accredited)",
        date: "Spring 2023",
      },
    ],
  },
  {
    company: "Del Mar College",
    active: 6,
    entries: [
      {
        icon: "start",
        title: "Start",
        description:
          "Fresh out of high school, I took my first college course that summer.",
        date: "Summer 2018",
      },
      {
        icon: "prompt",
        title: "Computer Science Club",
        description:
          "In the latter half of my time at Del Mar College, I founded Del Mar's Computer Science Club with a few colleagues from class. I presided over the club until graduation.",
        date: "Spring 2020",
      },
      {
        icon: "books",
        title: "Student Government",
        description:
          "The Del Mar College Student Government Association was a another student organization that I was a part of. I was the communications officer then secretary of the organization until graduation.",
        date: "Spring 2020",
      },
      {
        icon: "music",
        title: "Phi Mu Alpha",
        description:
          "Phi Mu Alpha is a music fraternity that I joined in my second year at Del Mar College. I became the Vice President then President of the chapter. I presided over the chapter until graduation.",
        date: "Fall 2021",
      },
      {
        icon: "trophy",
        title: "Hall of Fame",
        description:
          "I was inducted into the Del Mar College Hall of Fame in spring of 2021 for my leadership and contributions to the college.",
        date: "Spring 2021",
      },
      {
        icon: "certificate",
        title: "Graduation",
        description:
          "In the summer 2021 semester I graduated with my Associate of Science degree in Computer Programming.",
        date: "Summer 2021",
      },
      {
        icon: "video",
        title: "Ad campaign",
        description:
          "After graduation I was approached by Del Mar College staff to star in a new ad campaign for the college. This ad campaign had a $1 million budget and was featured on TV, radio, social media, billboards, and the mall.",
        date: "Fall 2021",
      },
    ],
  },
];
