import styles from "./HomePage.module.css";
import ToolsSection from "./ToolsSection/ToolsSection";

const HomePage = () => {
  const tools = [
    {
      toolSection: "Development Tools",
      tools: [
        {
          name: "XML to JSON Converter",
          description: "Convert XML data to JSON format easily.",
          link: "/devtools/xmltojson",
        },
        {
          name: "JSON to XML Converter",
          description: "Convert JSON data to XML format easily.",
          link: "/devtools/jsontoxml",
        },
      ],
    },
    {
      toolSection: "Text Tools",
      tools: [
        {
          name: "Show Text",
          description: "Show Text by passing text as a query parameter.",
          link: "/texttools/showtext",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {tools.map((section, index) => (
        <ToolsSection key={index} section={section} />
      ))}
    </div>
  );
};

export default HomePage;
