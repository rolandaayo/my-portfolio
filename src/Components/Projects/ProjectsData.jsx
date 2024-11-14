/* eslint-disable no-unused-vars */
import project1Img from "../../assets/images/project-1.jpg"
import project2Img from "../../assets/images/project-2.jpg"
import pae from "../../assets/images/PAE.png";
import wallclock from "../../assets/images/wallclock.png";
import Fe from "../../assets/images/FE1.png";
import portfolio from "../../assets/images/portfolio.png";
export const TabsData1 = [
  {
    id: 1,
    title: "Shopify",
    desc: "I have built an e-commerce website called Shopify, specializing in clothing brands available for purchase online. It offers a user-friendly experience, allowing consumers to browse and buy shoes. I've also implemented Redux, enabling features such as adding items to the cart and payments.",
    languages: ["ReactJS", "CSS", "Redux"],
    // img: kicksae,
    img: project1Img,
    class: "tabs-container_flex",
    link: "https://rolandaayo.github.io/skyhigh-product/",
    githubLink: "https://github.com/rolandaayo/skyhigh-product",
  },
  {
    id: 2,
    title: "PodcastAE",
    desc: "I have developed a Podcast platform called PodcastAE that provides real-time market data, including current market prices and trends, through an intuitive graphical interface. Clicking on the market price gives users access to an interactive graph showcasing the current state of the cryptocurrency market.",
    languages: ["ReactJS", "SCSS"],
    img: project2Img,
    class: "tabs-container_flex_reverse",
    link: "https://rolandaayo.github.io/micro-podcast//",
    githubLink: "https://github.com/rolandaayo/micro-podcast",
  },
  {
    id: 4,
    title: "Portfolio",
    desc: "I've built my portfolio to showcase my skills and what I've learned in front-end development languages, where I've compiled all of my projects, including my mini projects, to show my growth from studying. However, I'm still learning and will continue this learning for my career.",
    languages: ["ReactJS", "SCSS"],
    img: portfolio,
    class: "tabs-container_flex_reverse",
    link: "https://rolandayo.vercel.app/",
    githubLink: "https://github.com/rolandaayo/my-portfolio",
  },
];

export const TabsData2 = [
  {
    id: 1,
    title: "Shopping Cart",
    desc: "I have created a website that features a shopping cart function, where I learned the methods from Eloquent Javascript book. This e-commerce shopping cart website lets you add more than one product to the cart, then automatically sums up total of products added to cart.",
    languages: ["HTML", "CSS", "Javascript"],
    class: "tabs-container_flex",
    link: "https://rolandaayo.github.io/shopping-cart/",
    img: pae,
    githubLink: "https://github.com/rolandaayo/shopping-cart",
  },
  {
    id: 2,
    title: "Wall-Clock",
    desc: "I have developed a wall clock as a means to expand my knowledge of Javascript. Through this project, I have explored various coding structures to create both analog and digital clocks. Also, I have utilized CSS to enhance the visual design of the web page.",
    languages: ["HTML", "CSS", "Javascript"],
    class: "tabs-container_flex_reverse",
    link: "https://jmlsoteyza-clock-time.netlify.app/",
    githubLink: "https://github.com/rolandaayo/Wall-Clock",
    img: wallclock,
  },
  {
    id: 3,
    title: "FE-Mentor Landing Page",
    desc: "This is a front-end mentor landing page where we, as members, receive a template design to allow me to practice and refine my front-end development skills. It's where the process of translating design mockups into functional has made me understand more of FE languages.",
    languages: ["HTML", "CSS", "Javascript"],
    class: "tabs-container_flex",
    img: Fe,
    link: "https://warm-granita-362b51.netlify.app/",
    githubLink: "",
  },
];
