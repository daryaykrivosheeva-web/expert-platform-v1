import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ToolSection from "./ToolSection";
import { tools } from "../data/tools";

export default function FiveTools() {
  return (
    <section id="tools" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Что нужно в первую очередь"
          title="5 вещей, которые я бы сделала в первую очередь"
        />

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {tools.map((tool) => (
            <ToolSection key={tool.number} tool={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}
