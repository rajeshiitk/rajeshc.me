export const PROJECT_IMAGE_SIZE = {
  width: 500,
  height: 350,
};

export const experience = {
  role: "Full-Stack App Developer",
  company: "K12 Techno Services Pvt. Ltd.",
  period: "Jun 2025 – Present",
  summary:
    "I own 6 production apps and the BASE learning platform end to end. That means I design them, build the app and the backend, ship them to the App Store and Play Store, and fix them when something breaks in production. I also run releases for the whole mobile team, have shipped 100+ store releases, and mentored 2 developers.",
  products: [
    {
      name: "BASE: JEE/NEET coaching platform",
      about:
        "An online coaching app where students preparing for JEE and NEET watch live classes, study, and take tests.",
      stack: ["Flutter", "Django", "React", "Kubernetes"],
      points: [
        "I own the whole product: the Flutter app for students, the Django backend, the React admin panel for teachers, and the Kubernetes deployment.",
        "Built live classes: teachers stream from OBS, students watch over HLS through Cloudflare Stream, every class is recorded automatically, and live chat runs on Centrifugo. Designed for 50k+ users.",
        "Built an AI study assistant. A student can ask about a lecture, a PDF, or any part of the screen, and the answer streams in as it is written. Usage is metered per student so costs stay under control.",
        "Built tests and practice papers that keep working on a bad connection. Answers are saved on the phone and synced safely once the network is back, so nobody loses a submitted test.",
        "Before launch, I load-tested the backend with k6 to find what breaks under heavy traffic, and added Sentry for errors, PostHog for analytics, and Clarity for session recordings.",
      ],
    },
    {
      name: "Eduvate Admin: staff app",
      about:
        "The app school staff and the sales team use every day for orders, visits, and learning content.",
      stack: ["Flutter", "BLoC", "Django"],
      points: [
        "Built the Order Management System: customers, multi-step orders with live pricing, visits with location check-in, payments, approvals, e-signatures, and role-based access, so each person sees only what they should.",
        "Photo and video uploads were failing 30+ times a day. I rebuilt them so files go straight to Google Cloud Storage with retries and compression. Failures dropped to zero.",
        "Built ByteLearn, short video lessons with quiz questions inside the video and camera-based attention tracking.",
      ],
    },
    {
      name: "Orchids School Connect: parent app",
      about:
        "The app parents use to follow their child's school day: homework, the school bus, fees, and events.",
      stack: ["Flutter", "Django", "Celery"],
      points: [
        "Built homework uploads that survive a dropped connection. If the network drops, the upload continues where it stopped instead of starting over, and the same file is never saved twice.",
        "Built live school-bus tracking, so parents see the bus move on a map in real time.",
        "Built summer camp registration end to end, from choosing slots to paying online through Easebuzz.",
        "Introduced Shorebird code push. Urgent fixes reach parents the same day, without waiting for app store review.",
      ],
    },
    {
      name: "MySchoolGate: face-recognition attendance",
      about:
        "A tablet kiosk at the school gate that marks staff attendance by recognising their face.",
      stack: ["Flutter", "TFLite", "ML Kit"],
      points: [
        "Face recognition runs entirely on the tablet: ML Kit finds the face, a TFLite model turns it into a signature, and it is matched against registered staff. Nothing leaves the device to do this.",
        "Works with or without internet. Attendance is marked locally and uploaded in batches, with photos, once the connection returns.",
      ],
    },
    {
      name: "Eduvate B2B: white-label school LMS",
      about:
        "A learning app sold to partner schools, where each school gets the app under its own name, logo, and colours.",
      stack: ["React Native", "Expo"],
      points: [
        "Owned the app for teachers and students: lesson plans, homework, tests, e-books, attendance, and fees.",
        "Built a theming engine that creates a full light and dark theme from one brand colour, and a pipeline that builds each school's branded app automatically.",
        "Made it work on phones, tablets, and the large interactive panels in classrooms, where teachers log in by scanning a QR code.",
        "Made it run well on cheap phones and old Android 8/9 devices, including a custom network layer for school servers without TLS 1.2 support.",
      ],
    },
    {
      name: "Team and releases",
      about: "How I work with the rest of the mobile team.",
      stack: ["Codemagic", "TestFlight", "Shorebird"],
      points: [
        "I run releases for the whole mobile team: CI/CD builds on Codemagic, TestFlight, and getting apps through Play Store and App Store review.",
        "Mentored 2 developers in mobile development, lead code review, and I am the person called when any of the six apps has a production issue.",
        "Wrote an internal Flutter and Django training course, with assessments and an auto-scored coding task.",
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
    link: "https://www.lumacaption.com",
    tags: ["React", "TypeScript", "Supabase", "Razorpay", "Modal"],
  },
  {
    title: "Blinzo",
    tagline: "Video chat platform",
    description:
      "Interest-based matching over Socket.io and peer-to-peer WebRTC calls, a self-hosted TURN relay for networks where direct calls fail, and on-device NSFW detection.",
    image: "/blinzo.png",
    link: "https://blinzo.chat",
    tags: ["Next.js", "WebRTC", "Socket.io", "Node.js"],
  },
];
