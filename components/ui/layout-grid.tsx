"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactNode | string;
  className: string;
  title: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40 bg-background border border-border rounded-xl h-full w-full"
                  : "bg-background border border-border rounded-xl h-full w-full",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent
              card={card}
              isSelected={selected != null ? true : false}
            />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-background/80 backdrop-blur-sm opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        animate={{ opacity: selected?.id ? 1 : 0 }}
      />
    </div>
  );
};

// const ImageComponent = ({ card }: { card: Card }) => {
//   return (
//     <motion.img
//       layoutId={`image-${card.id}-image`}
//       src={card.thumbnail}
//       height="500"
//       width="500"
//       className={cn(
//         "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
//       )}
//       alt="thumbnail"
//     />
//   );
// };

const ImageComponent = ({
  card,
  isSelected,
}: {
  card: Card;
  isSelected: boolean;
}) => {
  return (
    <>
      <motion.img
        layoutId={`image-${card.id}-image`}
        src={card.thumbnail}
        height="500"
        width="500"
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        )}
        alt="thumbnail"
      />
      {!isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="h-full flex flex-col justify-end absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 z-20"
        >
          <p className="text-white text-xl font-medium">{card.title}</p>
        </motion.div>
      )}
    </>
  );
};

// const SelectedCard = ({ selected }: { selected: Card | null }) => {
//   return (
//     <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 0.2,
//         }}
//         className="absolute inset-0 h-full w-full bg-background/60 z-10"
//       />
//       {/* <div className="absolute inset-0 bg-background/30 backdrop-blur-sm -z-10 rounded-lg" /> */}

//       <motion.div
//         layoutId={`content-${selected?.id}`}
//         initial={{
//           opacity: 0,
//           y: 100,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: 100,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//         }}
//         className="relative px-8 pb-4 z-[70]"
//       >
//         {selected?.content}
//       </motion.div>
//     </div>
//   );
// };

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-card h-full w-full flex flex-col rounded-lg shadow-2xl relative z-[60] overflow-hidden">
      {/* Image Section - Top Half */}
      <div className="relative h-1/2 w-full overflow-hidden">
        <motion.img
          layoutId={`image-${selected?.id}-image`}
          src={selected?.thumbnail}
          className="object-cover object-top h-full w-full"
          alt="thumbnail"
        />
      </div>

      {/* Content Section - Bottom Half */}
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="h-1/2 w-full px-8 py-6 overflow-y-auto bg-card"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
