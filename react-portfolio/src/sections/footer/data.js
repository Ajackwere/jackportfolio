import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "https://twitter.com/jackwere7_", icon: <AiOutlineTwitter /> },
  { id: 2, link: "https://ajackwere.hashnode.dev/", icon: <FaHashnode /> },
  {
    id: 3,
    link: "https://www.linkedin.com/in/austine-were-704959240/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 4, link: "https://github.com/ajackwere", icon: <AiFillGithub /> },
];
