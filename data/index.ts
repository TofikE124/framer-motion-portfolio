import {
  angular,
  api,
  Audiophile,
  css,
  Designo,
  EntertainmentWebApp,
  firebase,
  framer_motion,
  InteractiveCommentsSection,
  InvoiceApp,
  IssueTracker,
  KanbanTaskManagment,
  local_storage,
  MultiStepForm,
  next_js,
  Oshop,
  prisma,
  ProductFeedbackApp,
  reactjs,
  RockPaperScissors,
  scss,
  SpaceTravel,
  tailwind,
  WhereInTheWorld,
} from "@/public";
import { StaticImageData } from "next/image";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "My Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on a 'Connect 4' game",
    description: "The Inside Scoop",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export interface TagType {
  name: string;
  icon: StaticImageData;
}
enum TAG {
  REACT = "react",
  NEXT_JS = "next.js",
  ANGULAR = "angular",
  TAILWIND = "tailwind",
  CSS = "css",
  SCSS = "scss",
  API = "api",
  LOCAL_STORAGE = "localStorage",
  FIREBASE = "firebase",
  PRISMA = "prisma",
  FRAMER_MOTION = "Framer Motion",
}

const tags: Record<TAG, TagType> = {
  [TAG.REACT]: {
    name: "react",
    icon: reactjs,
  },
  [TAG.NEXT_JS]: {
    name: "next.js",
    icon: next_js,
  },
  [TAG.ANGULAR]: {
    name: "angular",
    icon: angular,
  },
  [TAG.TAILWIND]: {
    name: "tailwind",
    icon: tailwind,
  },
  [TAG.CSS]: {
    name: "css",
    icon: css,
  },
  [TAG.SCSS]: {
    name: "scss",
    icon: scss,
  },
  [TAG.API]: {
    name: "api",
    icon: api,
  },

  [TAG.LOCAL_STORAGE]: {
    name: "localStorage",
    icon: local_storage,
  },
  [TAG.FIREBASE]: {
    name: "firebase",
    icon: firebase,
  },
  [TAG.PRISMA]: {
    name: "prisma",
    icon: prisma,
  },
  [TAG.FRAMER_MOTION]: {
    name: "framer motion",
    icon: framer_motion,
  },
};

export interface Project {
  id: number;
  title: string;
  des: string;
  img: StaticImageData;
  tags: TagType[];
  live_link: string;
  source_code_link: string;
}

// Project interface
export interface Project {
  id: number;
  title: string;
  des: string;
  img: StaticImageData;
  tags: TagType[];
  live_link: string;
  source_code_link: string;
}

export const projects: Project[] = [
  {
    id: 5,
    title: "Kanban Task Management App",
    des: "Manage tasks with custom boards using React and local storage.",
    img: KanbanTaskManagment,
    tags: [tags["next.js"], tags["Framer Motion"], tags.tailwind, tags.prisma],
    live_link: "https://task-management-app-lovat.vercel.app",
    source_code_link: "https://github.com/TofikE124/task-management-app",
  },
  {
    id: 1,
    title: "Product Feedback App",
    des: "Submit and discuss ideas with this Next.js, Prisma & NextAuth app.",
    img: ProductFeedbackApp,
    tags: [tags["next.js"], tags.scss, tags.tailwind, tags.prisma],
    live_link: "https://product-feedback-app-beta-five.vercel.app",
    source_code_link: "https://github.com/TofikE124/Product-Feedback-App",
  },
  {
    id: 2,
    title: "Invoice App",
    des: "Create and manage invoices effortlessly with Next.js, Prisma & NextAuth.",
    img: InvoiceApp,
    tags: [tags["next.js"], tags.scss, tags.tailwind, tags.prisma],
    live_link: "https://invoice-app-kvha.vercel.app",
    source_code_link: "https://github.com/TofikE124/invoice-app",
  },
  {
    id: 3,
    title: "O-Shop",
    des: "Seamless shopping experience for organics with Angular and Firebase.",
    img: Oshop,
    tags: [tags.angular, tags.firebase, tags.tailwind],
    live_link: "https://angular-shopping-8a56d.web.app/",
    source_code_link: "https://github.com/TofikE124/angular-shopping",
  },
  {
    id: 4,
    title: "Entertainment Web App",
    des: "Explore movies and TV shows with React.",
    img: EntertainmentWebApp,
    tags: [tags.angular, tags.firebase, tags.tailwind],
    live_link:
      "https://entertainment-web-app-angular-three.vercel.app/library/home",
    source_code_link:
      "https://github.com/TofikE124/entertainment-web-app-angular",
  },
  {
    id: 6,
    title: "Where in the world?",
    des: "Find countries by name or region with Angular and REST Countries API.",
    img: WhereInTheWorld,
    tags: [tags.angular, tags.api],
    live_link: "https://tofik-where-in-the-world.netlify.app",
    source_code_link: "https://github.com/TofikE124/where-in-the-world-angular",
  },
  {
    id: 7,
    title: "Designo",
    des: "Showcase of web, app, and graphic designs with React and CSS.",
    img: Designo,
    tags: [tags.react, tags.css],
    live_link: "https://gorgeous-brioche-7c0074.netlify.app",
    source_code_link: "https://github.com/TofikE124/Designo",
  },
  {
    id: 8,
    title: "Rock Paper Scissors Lizard Spock",
    des: "Play the classic game with Next.js and SCSS.",
    img: RockPaperScissors,
    tags: [tags["next.js"], tags.scss],
    live_link: "https://rock-paper-scissors-eta-sepia.vercel.app",
    source_code_link: "https://github.com/TofikE124/rock-paper-scissors",
  },
  {
    id: 9,
    title: "Audiophile",
    des: "Shop for headphones with React and local storage.",
    img: Audiophile,
    tags: [tags.react, tags.css, tags.localStorage],
    live_link: "https://brilliant-begonia-545122.netlify.app",
    source_code_link:
      "https://github.com/TofikE124/Audiophile-Ecommerce-Website",
  },
  {
    id: 10,
    title: "Interactive Comments Section",
    des: "Comment, upvote, and downvote with Next.js, NextAuth, and Prisma.",
    img: InteractiveCommentsSection,
    tags: [tags["next.js"], tags.prisma, tags.tailwind],
    live_link: "https://interactive-comments-section-pxi1.vercel.app",
    source_code_link:
      "https://github.com/TofikE124/interactive-comments-section",
  },
  {
    id: 11,
    title: "Issue Tracker",
    des: "Add and categorize issues with Next.js, Prisma, and NextAuth.",
    img: IssueTracker,
    tags: [tags["next.js"], tags.prisma, tags.tailwind],
    live_link: "https://issue-tracker-u639.vercel.app",
    source_code_link: "https://github.com/TofikE124/Designo",
  },
  {
    id: 12,
    title: "Multi Step Form",
    des: "Sleek multi-form web page with React, React Hook Form, and Zod.",
    img: MultiStepForm,
    tags: [tags.react, tags.css],
    live_link: "https://inspiring-truffle-aa8631.netlify.app",
    source_code_link: "https://github.com/TofikE124/MultiForm",
  },
  {
    id: 13,
    title: "Space Travel",
    des: "Explore planets, astronauts, and rocket tech with React.",
    img: SpaceTravel,
    tags: [tags.react, tags.css],
    live_link: "https://symphonious-faun-36c411.netlify.app",
    source_code_link: "https://github.com/TofikE124/Space-Travel",
  },
];

// Testimonials type
interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

// Company type
interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export const companies: Company[] = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

// Work experience type
interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

// Social media type
interface SocialMedia {
  id: number;
  img: string;
  link: string;
}

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/TofikE124",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "www.linkedin.com/in/tofike124",
  },
];
