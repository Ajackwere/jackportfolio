import { SiAdobexd } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: "UI/UX Design",
    desc: "I do modern and intuitive designs. Your users will not only understand your product, but will also have fun using it.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "I will make your product good-looking and will be accessible on all devices, including mobile phones, tablets, and desktops.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks and use the best algorithm to make it fast.",
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: "Web Maintenance",
    desc: "Unlike other developers in the market, I will help in maintaining your website for at least a year without any extra cost.",
  },
];

export default data;
