"use client";
import { ChapterContext } from "@/app/contexts/ChapterContext";
import React, { useContext, useState } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation"; // Import useRouter

export default function PreferenceForm() {
  const [step, setStep] = useState(0);
  const [selectedChaptersLocal, setSelectedChaptersLocal] = useState<string[]>(
    []
  );
  //@ts-ignore
  const { selectedChapters, setSelectedChapters } = useContext(ChapterContext);
  const router = useRouter();
  const chapters = [
    { id: "firstAge", label: "Rings Of Power" },
    { id: "hobbit1", label: "The Hobbit: An Unexpected Journey" },
    { id: "hobbit2", label: "The Hobbit: Desolation Of Smaug" },
    { id: "hobbit3", label: "The Hobbit: The Battle Of The Five Armies" },
    { id: "lotr1", label: "Fellowship Of The Ring" },
    { id: "lotr2", label: "Two Towers" },
    { id: "lotr3", label: "Return Of The King" },
    { id: "chapter4", label: "The Fourth Age" },
  ];

  const handleCheckboxChange = (id: string) => {
    setSelectedChaptersLocal((prev) =>
      prev.includes(id)
        ? prev.filter((chapterId) => chapterId !== id)
        : [...prev, id]
    );
  };

  const handleNextStep = () => {
    setSelectedChapters(selectedChaptersLocal);
    gsap.to("body", { opacity: 0 });

    setTimeout(() => {
      router.push("/lore");
    }, 1000);
  };

  return (
    <div className="pref-form">
      <h1 className="text-3xl">
        Before you get started, let us know your preferences...
      </h1>
      <div className="p-3">
        {step === 0 && (
          <div>
            <h1>Select the chapters you want to read!</h1>
            {chapters.map((chapter) => (
              <CustomCheckbox
                key={chapter.id}
                id={chapter.id}
                label={chapter.label}
                checked={selectedChaptersLocal.includes(chapter.id)}
                onChange={() => handleCheckboxChange(chapter.id)}
              />
            ))}
            <Button onClick={handleNextStep} key={"continue"}>
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function CustomCheckbox({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center mb-4 my-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`w-6 h-6 appearance-none rounded-md border-1 ${
          checked ? "bg-gradient-to-br bg-amber-100" : "bg-gray-800"
        } focus:ring-0 transition duration-200`}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-300">
        {label}
      </label>
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-gradient-to-br hover:bg-amber-100 hover:text-black border-white/25 border text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}
