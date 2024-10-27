"use client";
import Chapter from "@/components/lore/Chapter";
import { RingsOfPower } from "@/content/RingsOfPower.tsx";
import React, { useEffect } from "react";
import gsap from "gsap";
export default function Lore() {
  useEffect(() => {
    gsap.from("body", { opacity: 0, y: 50, duration: 1 });
    gsap.to("body", { opacity: 1, y: 0, duration: 1 });
  });
  return (
    <div>
      <Chapter {...RingsOfPower} />
    </div>
  );
}
