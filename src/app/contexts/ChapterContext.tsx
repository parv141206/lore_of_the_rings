import { createContext, useState, ReactNode } from "react";

export interface ChapterContextType {
  selectedChapters: string[];
  setSelectedChapters: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ChapterContext = createContext<ChapterContextType | undefined>(
  undefined
);

export const ChapterProvider = ({ children }: { children: ReactNode }) => {
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);

  return (
    <ChapterContext.Provider value={{ selectedChapters, setSelectedChapters }}>
      {children}
    </ChapterContext.Provider>
  );
};
