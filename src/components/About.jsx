import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TagCanvas from "tag-canvas";
import { Skills } from "../Constants/data";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 },
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [inView]);

  useEffect(() => {
    TagCanvas.Start("myCanva", "tagList", {
      initial: [0.4, -0.3],
      noSelect: true,
      textColour: "#fff",
    });
  }, []);
  return (
    <motion.div ref={ref} id="about" className="my-20" animate={animation}>
      <div className="flex items-center justify-between flex-col gap-5 lg:flex-row">
        <div className="flex flex-col items-center justify-center px-1 md:items-start">
          <h1 className="text-5xl font-aurore text-white font-semibold">
            <span className="text-yellow-300">About</span> me!
          </h1>
          <p className="text-[#aeaeb1] text-justify my-5 max-w-2xl md:text-left">
            Hi, I'm Jakareya, Full Stack Web Developer. With Over 5 YEARS Of
            Experience. Since beginning my journey as a freelance Developer
            nearly 5 years ago, I've done remote work for agencies, consulted
            for startups, and collaborated with talented people to create
            digital products for both business and consumer use. I'm quietly
            confident, naturally curious, and perpetually working on improving
            my skills.
            <br />
            <br />I like to code things from scratch, and enjoy bringing ideas
            to life in the browser. I have been working on the technology like
            React Js, Node Js, Express Js, MongoDB, And NextJs.
          </p>

          <a
            href="https://www.fiverr.com/jakareya608"
            rel="noreferrer"
            target="_blank"
            className=" border border-[#08fdd8] px-10 py-4  my-5 text-[#08fdd8] font-mono tracking-widest rounded-[2px] duration-500 hover:bg-[#08fdd8] hover:text-zinc-900"
          >
            Hire me!
          </a>
        </div>
        <div className="flex">
          <div className="xl:w-[500px] xl:h-[500px] flex items-center justify-center">
            <div id="canvaContainer">
              <canvas
                id="myCanva"
                width="500px"
                height="500px"
                className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]"
              >
                <ul id="tagList">
                  {Skills.map((curElem, idx) => {
                    return (
                      <li key={idx}>
                        <a href="https://google.com" className="text-sm">
                          {curElem}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </canvas>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
