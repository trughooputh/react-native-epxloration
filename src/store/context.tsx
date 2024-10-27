// Ideally, use a more solid state management library like Redux, Recoil or Zustand

import React, {
  useState,
  createContext,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type Car = {
  name: string;
  url: string;
};

type ResultsContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  results: Car[];
  setResults: Dispatch<SetStateAction<Car[]>>;
};

export const ResultsContext = createContext<ResultsContextType>({
  query: "",
  setQuery: () => { },
  results: [],
  setResults: () => { },
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [results, setResults] = useState<Car[]>([]);
  const [query, setQuery] = useState("");

  return (
    <ResultsContext.Provider value={{ results, setResults, query, setQuery }}>
      {children}
    </ResultsContext.Provider>
  );
};

export const useResultContext = (): ResultsContextType => {
  const context = useContext(ResultsContext);

  if (!context) {
    throw new Error("useResultContext must be used within an ContextProvider");
  }

  return context;
};
