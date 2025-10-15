import { BackgroundLogos } from "../src/components/BackgroundLogos/BackgroundLogos";
import { Header } from "../src/components/Header/Header";
import { Navbar } from "../src/components/Navbar/navbar";
import { Form } from "../src/components/Form/Form";

import "./App.css";

function App() {
  return (
    <>
      <BackgroundLogos />
      <Navbar />
      <Header title="Tab2Score" show={true} />
      <Form />
    </>
  );
}

export default App;
