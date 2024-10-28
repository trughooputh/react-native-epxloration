// Ideally, use a more solid state management library like Redux, Recoil or Zustand

import React, {
  useState,
  createContext,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
} from "react";
import cars from "../mock/data";

export type Car = {
  name: string;
  url: string;
  year: number;
  description: string;
  type: string;
  color: string;
};

type ResultsContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  results: Car[];
  setResults: Dispatch<SetStateAction<Car[]>>;
  filteredResults: Car[]
};

export const ResultsContext = createContext<ResultsContextType>({
  query: "",
  setQuery: () => { },
  results: [],
  setResults: () => { },
  filteredResults: []
});

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [results, setResults] = useState<Car[]>(cars);
  const [query, setQuery] = useState("");

  // Memoize the filtered results based on the query and results
  const filteredResults = useMemo(() => {
    return cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, results]);

  return (
    <ResultsContext.Provider value={{ results, setResults, query, setQuery, filteredResults }}>
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
