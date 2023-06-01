import Button from "./components/Button";
import { GoBell } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button>
          <GoBell />
          Plain
        </Button>
      </div>
      <div>
        <Button primary>Primary</Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default App;
