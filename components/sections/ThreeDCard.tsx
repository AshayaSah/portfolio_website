"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { div } from "motion/react-client";

type Card = {
  id: number;
  cardTitle: string;
  title: string;
  subTitle: string;
  content: string;
  className: string;
  tryNow: string;
  readMore: string;
  thumbnail: string;
};

export function ThreeDCard({ card }: { card: Card }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-card relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] border-border w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ={20}
          as="p"
          className="rounded-xl text-xs font-normal text-foreground hover:text-primary transition py-4"
        >
          {card.cardTitle}
        </CardItem>

        <CardItem translateZ="50" className="text-xl font-bold text-primary">
          {card.title}
        </CardItem>

        <CardItem
          translateZ="60"
          as="p"
          className="text-foreground text-sm max-w-sm mt-2"
        >
          {card.subTitle}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-muted-foreground text-sm max-w-sm mt-2"
        >
          {card.content}
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={card.thumbnail}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="a"
            href={card.tryNow}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-foreground hover:text-primary transition"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            href={card.readMore}
            as="a"
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition"
          >
            Read More ..
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
