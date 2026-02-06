"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Link from "next/link";
import { ThreeDCard } from "./ThreeDCard";

export function FeaturedProject() {
  return (
    <div className="h-screen py-20 container mx-auto">
      <h1 className="text-4xl font-bold text-center md:text-7xl text-foreground">
        Featured
      </h1>
      {/* <LayoutGrid cards={cards} /> */}
      <div className="flex justify-between w-full">
        {cards.map((card) => {
          return <ThreeDCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

const cards = [
  {
    id: 1,
    content: `We were selected as the representative team from Nepal for the JAXA
          Kibo Robot Programming Challenge. Yes, that JAXA — the space agency.
          🚀 Now we're waiting for the final round results like it's a Netflix
          cliffhanger… refreshing our inboxes every 5 minutes and pretending
          we're totally chill about it.`,
    className: "",
    title: "My Recent Achievement",
    thumbnail: "/achievements/kibo.png",
  },
  {
    id: 2,
    content: `We were selected as the representative team from Nepal for the JAXA
          Kibo Robot Programming Challenge. Yes, that JAXA — the space agency.
          🚀 Now we're waiting for the final round results like it's a Netflix
          cliffhanger… refreshing our inboxes every 5 minutes and pretending
          we're totally chill about it.`,
    className: "",
    title: "My Recent Achievement",
    thumbnail: "/achievements/kibo.png",
  },
];
