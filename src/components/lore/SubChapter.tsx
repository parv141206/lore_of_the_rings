import React from "react";

export default function SubChapter({
  title,
  description,
  background_image,
  start_color,
  end_color,
  year,
}: {
  title: string;
  description: React.ReactNode;
  background_image: string;
  start_color: string;
  end_color: string;
  year: number;
}) {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${start_color} ,   ${end_color}aa,  ${end_color} ) , url(${background_image}) center center / cover no-repeat  `,
      }}
      className="min-h-screen p-5  flex-col justify-end flex py-10 gap-5"
    >
      <div className="container">
        <div className="text-5xl my-5 font-bold title">{title}</div>
        <div className="text-xl text-amber-100/75">{description}</div>
        <div className="text-amber-200/75">{year}</div>
      </div>
    </div>
  );
}
