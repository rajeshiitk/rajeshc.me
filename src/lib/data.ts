export const PROJECT_IMAGE_SIZE = {
  width: 500,
  height: 350,
};

export const projects = [
  {
    title: "SecurEye - IoT devices Manager",
    description:
      "Next.js web application that provides an admin panel for managing IoT devices, allowing users to control various devices such as lights, air conditioners, and fans remotely using ESP8266 NodeMCU server, gate automation based on camera feedback, and streaming live video feeds.",
    image: "/secureye.png",
    link: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "WebRTC"],
  },
  {
    title: "Trimy - URL shortening service",
    description:
      "URL shortening service to Shrink, Share, Track, and Elevate Links and manage campaigns.",
    image: "/trimy.png",
    link: "https://trimy.vercel.app",
    tags: ["React", "Aws", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Lazzer - Your ultimate companion",
    description:
      "A full stack Next.js productivity Web app lets you manage daily tasks effortlessly and includes a Pomodoro timer to boost focus and efficiency",
    image: "/lazzer.png",
    link: "https://lazzer.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "JWT", "MongoDB"],
  },
];
