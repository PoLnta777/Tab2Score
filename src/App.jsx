import { Header } from "./components/Header";
import { Form } from "./components/Form/Form";

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
