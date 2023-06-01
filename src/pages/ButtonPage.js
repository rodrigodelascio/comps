import Button from "../components/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button className="mb-5">
          <GoBell />
          Plain
        </Button>
      </div>
      <div>
        <Button primary className="mb-5">
          Primary
        </Button>
      </div>
      <div>
        <Button secondary className="mb-5">
          Secondary
        </Button>
      </div>
      <div>
        <Button success className="mb-5">
          Success
        </Button>
      </div>
      <div>
        <Button warning className="mb-5">
          Warning
        </Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
