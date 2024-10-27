import React from "react";
import SubChapter from "./SubChapter";
export interface SubChapter {
  title: string;
  description: React.ReactNode;
  background_image: string;
  start_color: string;
  end_color: string;
  year: number;
}
export default function Chapter({
  title,
  description,
  sub_chapters,
  background_image,
  start_color,
  end_color,
}: {
  title: string;
  description: React.ReactNode;
  sub_chapters: Array<SubChapter>;
  background_image: string;
  start_color: string;
  end_color: string;
}) {
  return (
    <>
      <div
        style={{
          background: `linear-gradient(to bottom, ${start_color} ,transparent,  ${end_color} ) , url(${background_image}) center center / cover no-repeat  `,
        }}
        className="min-h-screen p-5  flex-col justify-end  flex py-10 gap-5"
      >
        <div className="container">
          <div className="text-7xl title my-5 font-extrabold">{title}</div>
          <div className="text-xl text-amber-100/75">{description}</div>
        </div>
      </div>
      {sub_chapters.map((sub_chapter) => (
        <SubChapter key={sub_chapter.title} {...sub_chapter} />
      ))}
    </>
  );
}
