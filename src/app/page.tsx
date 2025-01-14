import Section from "@/components/Section/Section";
import Container from "@/components/Section/Container/Container";
import DecoratorBox from "@/components/DecoratorBox/DecoratorBox";
import TodoList from "@/components/TodoList/TodoList";
import css from "./page.module.css";
// import axios from "axios";

export default function Home() {
  // // const getTasks = async () => {
  // const tasks = await axios.get("https://localhost:7249/api/tasks");
  // console.log(tasks);
  // // };

  // // getTasks();
  return (
    <Section>
      <Container>
        <DecoratorBox>
          <h1 className={css.pageHeading}>Todo List</h1>
        </DecoratorBox>
        <DecoratorBox>
          <TodoList />
        </DecoratorBox>
      </Container>
    </Section>
  );
}
