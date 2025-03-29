import { motion, useAnimation } from "framer-motion";


const Featured = () => {
  const cards =  [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({y: "0"})
  }

  const handleHoverEnd = (index) => {
    cards[index].start({y: "100%"})
  }

  return (
    <div className="w-full py-10">
      <div className="w-full px-14 pt-16 pb-14 border-b-[1.5px] border-zinc-500">
        <h1 className="text-5xl font-display text-[#212121]">
          Featured projects
        </h1>
      </div>
      <div className="px-14">
        <div className="cards w-full flex flex-wrap gap-5 mt-20">
          <motion.div 
          onHoverStart={() => handleHover(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="card-container relative w-[calc(50%-10px)] h-[75vh]">
            <h1 className="font-body absolute overflow-hidden left-full -translate-x-60 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#CDEA68] text-nowrap">
              {"salience labs".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}}
                animate={cards[0]}
                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt="Project-01"
              />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={() => handleHover(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="card-container relative w-[calc(50%-10px)] h-[75vh]">
            <h1 className="font-body absolute overflow-hidden right-full translate-x-96 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#CDEA68] text-nowrap">
              {"cardbord spaceship".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}}
                animate={cards[1]}
                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt="Project-02"
              />
            </div>
          </motion.div>
          <motion.div
          onHoverStart={() => handleHover(2)}
          onHoverEnd={() => handleHoverEnd(2)}
           className="card-container relative w-[calc(50%-10px)] h-[75vh]">
            <h1 className="font-body absolute overflow-hidden left-full -translate-x-60 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#CDEA68] text-nowrap">
              {"salience labs".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}}
                animate={cards[2]}
                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt="Project-03"
              />
            </div>
          </motion.div>
          <motion.div
          onHoverStart={() => handleHover(3)}
          onHoverEnd={() => handleHoverEnd(3)}
           className="card-container relative w-[calc(50%-10px)] h-[75vh]">
            <h1 className="font-body absolute overflow-hidden right-full translate-x-96 top-1/2 -translate-y-1/2 z-[9] text-9xl uppercase text-[#CDEA68] text-nowrap">
              {"cardbord spaceship".split("").map((item, index) => (
                <motion.span 
                initial={{y: "100%"}}
                animate={cards[3]}
                transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.03}}
                className="inline-block" key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt="Project-04"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
