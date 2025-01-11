import Section from "@/components/Section/Section";
import Container from "@/components/Section/Container/Container";
import DecoratorBox from "@/components/DecoratorBox/DecoratorBox";

export default function Home() {
  return (
    <Section>
      <Container>
        <h1>Todo List</h1>
        <DecoratorBox>
          <h2>Todo list</h2>
        </DecoratorBox>
      </Container>
    </Section>
  );
}
