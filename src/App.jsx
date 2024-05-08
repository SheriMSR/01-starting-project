import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header/Header";

function App() {

  return (
    // <div>
    //   <Header />
    //   <main>
    //     <section id="core-concepts">
    //       <h2>Core Concept</h2>
    //       <ul>
    //         {CORE_CONCEPTS.map((conceptItem) => (
    //           <CoreConcept key={conceptItem.title} {...conceptItem} />
    //         ))}
    //       </ul>
    //     </section>
    //     <section id="examples">
    //       <h2>Time to get started!</h2>
    //       <menu>
    //         <TabButton
    //           isSelected={selectedTopic === "components"}
    //           onSelect={() => handleClick("components")}
    //           label="Components"
    //         />
    //         <TabButton
    //           isSelected={selectedTopic === "jsx"}
    //           onSelect={() => handleClick("jsx")}
    //           label="Jsx"
    //         />
    //         <TabButton
    //           isSelected={selectedTopic === "props"}
    //           onSelect={() => handleClick("props")}
    //           label="Props"
    //         />
    //         <TabButton
    //           isSelected={selectedTopic === "state"}
    //           onSelect={() => handleClick("state")}
    //           label="State"
    //         />
    //       </menu>
    //       {!selectedTopic ? (
    //         <p>Pls selected a topic.</p>
    //       ) : (
    //         <div id="tab-content">
    //           <h3> {EXAMPLES[selectedTopic].title} </h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )}
    //     </section>
    //   </main>
    // </div>

    // <Fragment>
    //   <Header />
    //   <main>
    //     <section id="core-concepts">
    //       <h2>Core Concept</h2>
    //       <ul>
    //         {CORE_CONCEPTS.map((conceptItem) => (
    //           <CoreConcept key={conceptItem.title} {...conceptItem} />
    //         ))}
    //       </ul>
    //     </section>
    //     <section id="examples">
    //       <h2>Time to get started!</h2>
    //       <menu>
    //         <TabButton
    //           isSelected={selectedTopic === "components"}
    //           onSelect={() => handleClick("components")}
    //           label="Components"
    //         />
    //         <TabButton
    //           isSelected={selectedTopic === "jsx"}
    //           onSelect={() => handleClick("jsx")}
    //           label="Jsx"
    //         />
    //         <TabButton
    //           isSelected={selectedTopic === "props"}
    //           onSelect={() => handleClick("props")}
    //           label="Props"
    //         />
    //         <TabButton
    //           isSelected={selectedTopic === "state"}
    //           onSelect={() => handleClick("state")}
    //           label="State"
    //         />
    //       </menu>
    //       {!selectedTopic ? (
    //         <p>Pls selected a topic.</p>
    //       ) : (
    //         <div id="tab-content">
    //           <h3> {EXAMPLES[selectedTopic].title} </h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )}
    //     </section>
    //   </main>
    // </Fragment>

    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
