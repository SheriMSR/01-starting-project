import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
              label="Components"
            />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
              label="Jsx"
            />
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
              label="Props"
            />
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
              label="State"
            />
          </>
        }
      >
        {!selectedTopic ? (
          <p>Pls selected a topic.</p>
        ) : (
          <div id="tab-content">
            <h3> {EXAMPLES[selectedTopic].title} </h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
