import { Container } from "react-bootstrap";
import BlogCon from "./components/BlogCon";
import CarouselCom from "./components/Carousel";
import data from "./data.json";
import { columns } from "./Columns";
import Table from "./components/Table/Table";
import FormCon from "./components/Form";
import Navigation from "./components/Navbar";

function App() {
  return (
    <Container className="mt-5 d-flex flex-column gap-5">
      <Navigation />
      <CarouselCom />
      <Table
        data={data}
        columns={columns}
        caption="People Recruited in DePronto"
      />
      <BlogCon />
      <FormCon />
    </Container>
  );
}

export default App;
