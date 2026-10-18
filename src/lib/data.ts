export const PROJECT_IMAGE_SIZE = {
  width: 1440,
  height: 900,
};

export const experience = {
  role: "Full-Stack App Developer",
  company: "K12 Techno Services Pvt. Ltd.",
  period: "Jun 2025 – Present",
  summary:
    "I own 6 production apps and the BASE learning platform end to end, from architecture and backend to store releases and production support. I also run releases for the whole mobile team and mentor 2 developers. 100+ store releases shipped so far.",
  products: [
    {
      name: "BASE: JEE/NEET coaching platform",
      about: "Live classes, study material and tests for JEE and NEET students.",
      stack: ["Flutter", "Django", "React", "Kubernetes"],
      points: [
        "Own the platform from architecture to production: Flutter app, Django backend, React admin and Kubernetes deployment.",
        "Built the live-class system (HLS streaming, auto-recording, live chat), designed for 50k+ students.",
        "Built the AI study assistant, with metered usage to keep LLM costs under control.",
        "Load-tested it before launch, and set up error tracking, analytics and session replay.",
      ],
    },
    {
      name: "Eduvate Admin: staff app",
      about: "The daily operations app for school staff and the sales team.",
      stack: ["Flutter", "BLoC", "Django"],
      points: [
        "Built the Order Management System end to end: pricing, approvals, e-signatures and role-based access.",
        "Re-architected media uploads to go straight to cloud storage. Failures went from 30+ a day to zero.",
      ],
    },
    {
      name: "Orchids School Connect: parent app",
      about: "The app parents use to follow their child's school day.",
      stack: ["Flutter", "Django", "Celery"],
      points: [
        "Designed resumable uploads with a Django control plane, so large files survive bad networks.",
        "Introduced Shorebird code push. Critical fixes reach parents the same day, with no store review.",
      ],
    },
    {
      name: "MySchoolGate: face-recognition attendance",
      about: "A kiosk at the school gate that marks staff attendance by face.",
      stack: ["Flutter", "TFLite", "ML Kit"],
      points: [
        "Built on-device face recognition with ML Kit and TFLite. No face leaves the device to be matched.",
        "Offline-first: attendance keeps working without internet and syncs once the connection is back.",
      ],
    },
    {
      name: "Eduvate B2B: white-label school LMS",
      about: "A learning app sold to partner schools under their own brand.",
      stack: ["React Native", "Expo"],
      points: [
        "Owned the product. Built the theming engine and build pipeline that ship every school its own branded app from one codebase.",
        "Runs on phones, tablets, classroom panels and low-end Android 8/9 devices.",
      ],
    },
    {
      name: "Team and releases",
      about: "My role across the mobile team.",
      stack: ["Codemagic", "TestFlight", "Shorebird"],
      points: [
        "Run releases for the whole mobile team: CI/CD, TestFlight and App Store and Play Store review.",
        "Mentor 2 developers, lead code review, and I am the escalation point for production issues.",
      ],
    },
  ],
};

export const projects = [
  {
    title: "LumaCaption",
    tagline: "AI video caption editor with paying users",
    description:
      "Captions in 93 languages with provider fallback, Razorpay subscriptions, and a customised Hinglish Whisper model on Modal serverless GPUs at ~60% lower cost per minute.",
    image: "/lumacaption.png",
    accent: "#c4f04d",
    link: "https://www.lumacaption.com",
    tags: ["React", "TypeScript", "Supabase", "Razorpay", "Modal"],
  },
  {
    title: "Blinzo",
    tagline: "Video chat platform",
    description:
      "Interest-based matching over Socket.io and peer-to-peer WebRTC calls, a self-hosted TURN relay for networks where direct calls fail, and on-device NSFW detection.",
    image: "/blinzo.png",
    accent: "#a855f7",
    link: "https://blinzo.chat",
    tags: ["Next.js", "WebRTC", "Socket.io", "Node.js"],
  },
  {
    title: "SwishCut",
    tagline: "Voice-powered mobile video editor, in development",
    description:
      "An Android video editor with a Flutter UI over a native Rust engine: multi-track timeline, keyframes, GPU rendering with effects and masks, and hardware H.264 export. On-device ML runs on the GPU for cutouts, beauty and AutoCut. Two 4K tracks play together without stutter.",
    image: "/swishcut.png",
    accent: "#f97316",
    link: "https://swishcut.com",
    tags: ["Flutter", "Rust", "OpenGL ES", "LiteRT"],
  },
];
