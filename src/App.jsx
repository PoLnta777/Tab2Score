import { Header } from "../src/components/Header/Header";
import { Form } from "../src/components/Form/Form";

import "./App.css";

function App() {
  return (
    <>
      <body>
        <Header title="Tab2Score" show={true} />
        <Form />
      </body>
    </>
  );
}

export default App;
