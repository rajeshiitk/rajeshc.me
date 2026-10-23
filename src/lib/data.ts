// Plain public/ paths need the GitHub Pages base path; next/image does not add it.
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const PROJECT_IMAGE_SIZE = {
  width: 1440,
  height: 900,
};

export const experience = {
  role: "Full-Stack App Developer",
  company: "K12 Techno Services Pvt. Ltd.",
  period: "Jun 2025 – Present",
  summary:
    "I own 6 production apps used by parents, teachers and school staff, with 170K+ installs and 80K daily active users, and I built the BASE coaching platform from scratch. I run releases for the whole mobile team, with 100+ shipped so far.",
  products: [
    {
      name: "BASE: JEE/NEET coaching platform",
      about: "Live classes, study material and tests for JEE and NEET students.",
      stack: ["Flutter", "Django", "React", "Kubernetes"],
      points: [
        "Own the platform from architecture to production: Flutter app, Django backend, React admin and Kubernetes deployment.",
        "Live classes with real-time chat, designed for 50,000 concurrent users. Attendance tracks how long each student watched, and every class becomes a recording with chat replay.",
        "Offline-first exams: answers save on the phone, students can switch devices mid-exam, and the server auto-submits when time runs out. Sync handles 1,000+ requests per second with zero failures.",
        "Push notifications for 50K daily users, with class reminders and an in-app inbox.",
        "An AI study assistant for lectures, PDFs and any part of the screen, with a usage limit per student.",
        "End-to-end load tests that caught capacity bottlenecks single-service tests missed.",
      ],
    },
    {
      name: "Eduvate Admin: staff app",
      about: "The daily operations app for school staff and the sales team.",
      stack: ["Flutter", "BLoC", "Django"],
      points: [
        "Built the order management system end to end: orders, payments, deliveries, approvals, e-signed contracts and role-based access.",
        "Rebuilt the media upload pipelines that handle 100K+ uploads a day. Upload incidents went from 30+ a day to zero.",
      ],
    },
    {
      name: "Orchids School Connect: parent app",
      about: "The app parents use to follow their child's school day.",
      stack: ["Flutter", "Django", "Celery"],
      points: [
        "Live bus tracking: parents see the bus on a map in real time and get an arrival alert with a road-based ETA.",
        "Fixed out-of-memory crashes from leaked video players and full-size photo decoding. The app is at 99.8% crash-free users and a 0.23% ANR rate.",
        "Introduced over-the-air updates, so critical fixes reach parents the same day.",
      ],
    },
    {
      name: "MySchoolGate: face-recognition attendance",
      about: "A kiosk at the school gate that marks staff attendance by face.",
      stack: ["Flutter", "TFLite", "Django"],
      points: [
        "Offline-first face recognition attendance for 15K+ staff a day.",
        "Check-in works on weak or no internet, and the server verifies every check-in when it syncs.",
      ],
    },
    {
      name: "Eduvate B2B: white-label school LMS",
      about: "A learning app sold to partner schools under their own brand.",
      stack: ["React Native", "Expo"],
      points: [
        "Owned the product: one codebase ships every school its own themed app for attendance, homework and fees.",
        "Added a custom network stack so the app connects on Android 8 and 9 interactive panels, whose built-in TLS lacked the cipher suites our servers required.",
      ],
    },
    {
      name: "Team and releases",
      about: "My role across the mobile team.",
      stack: ["Codemagic", "TestFlight", "Shorebird"],
      points: [
        "Run releases for the whole mobile team through Codemagic, TestFlight and both app stores.",
        "Mentor 2 developers and have reviewed 300+ teammate branches before merge.",
      ],
    },
  ],
};

export const projects = [
  {
    title: "LumaCaption",
    tagline: "AI video caption editor with paying users",
    description:
      "Word-timed captions in 100+ languages and scripts, rendered into the video on the device up to 4K. A self-hosted Hinglish speech model on cloud GPUs costs about 60% less per minute than ElevenLabs. Subscriptions run on Razorpay.",
    image: `${base}/lumacaption.png`,
    accent: "#c4f04d",
    link: "https://www.lumacaption.com",
    tags: ["React", "TypeScript", "Supabase", "Razorpay", "Modal"],
  },
  {
    title: "Blinzo",
    tagline: "Video chat platform",
    description:
      "Peer-to-peer WebRTC video calls that match people by shared interests, a self-hosted TURN relay for strict office and mobile networks, calls that recover on their own when video stalls, and on-device moderation.",
    image: `${base}/blinzo.png`,
    accent: "#a855f7",
    link: "https://blinzo.chat",
    tags: ["Next.js", "WebRTC", "Socket.io", "Node.js"],
  },
  {
    title: "SwishCut",
    tagline: "Voice-powered mobile video editor, in development",
    description:
      "An Android video editor with a Flutter UI over a native Rust engine: multi-track timeline, keyframes, GPU rendering with effects and masks, and hardware H.264 export. On-device ML runs on the GPU for cutouts, beauty and AutoCut. Two 4K tracks play together without stutter.",
    image: `${base}/swishcut.png`,
    accent: "#f97316",
    link: "https://swishcut.com",
    tags: ["Flutter", "Rust", "OpenGL ES", "LiteRT"],
  },
];
