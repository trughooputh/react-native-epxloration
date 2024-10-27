import { FlatList } from "react-native";
import React, { useContext } from "react";
//Context
import { ResultsContext } from "../../store/context";
//core
import Card from "../_core/card";
import FadeInView from "../_core/fadeIn";

export default function Results() {
  const { searchedWord, results } = useContext(ResultsContext);
  return (
    <>
      <FlatList
        data={results.definitions}
        renderItem={({ item }) => (
          <FadeInView>
            <Card title={searchedWord} description={item.definition} />
          </FadeInView>
        )}
        keyExtractor={(item) => `item-${item.definition}}`}
        horizontal
      />
    </>
  );
}
