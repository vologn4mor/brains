import design from "@/assets/ServicesView/design.svg";
import blockchain from "@/assets/ServicesView/blockchain.svg";
import devices from "@/assets/ServicesView/devices.svg";
import devops from "@/assets/ServicesView/devops.svg";

export default [
  {
    img: design,
    title: "UX / Design / Branding",
    points: ["Application’s UI", "Brand KIT", "Logo"],
  },
  {
    img: blockchain,
    title: "Blockchain API",
    points: [
      "Wallet coins / balance tracker",
      "NFT tracker",
      "Token gated services",
    ],
  },
  {
    img: devices,
    title: "Multi-Device App",
    points: [
      "Web application",
      "Mobile application (iOS, Android)",
      "Desktop app (macOS, Windows)",
      "Chatbot on Facebook, Instagram, Telegram, Skype, Viber, and others",
    ],
  },
  {
    img: devops,
    title: "DevOps",
    points: [
      "Server infrastructure setup administration",
      "DDos monitoring & protection",
    ],
  },
];
