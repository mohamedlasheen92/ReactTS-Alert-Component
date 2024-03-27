import {
  Ban,
  BellRing,
  CircleCheckBig,
  NotebookPen,
  TriangleAlert,
} from "lucide-react";
import Alert from "./components/alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="alert-info"
        icon={<NotebookPen />}
        title="Note"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quidem harum aperiam, laboriosam error reiciendis deserunt aut animi dicta quas."
      />

      <Alert
        type="alert-default"
        icon={<BellRing />}
        title="Level up your subscription"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quidem harum aperiam, <a href="/">laboriosam error</a> reiciendis
          deserunt aut animi dicta quas.
        </p>
      </Alert>

      <Alert
        type="alert-success"
        icon={<CircleCheckBig />}
        title="Your purchase has been confirmed"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quidem harum aperiam, laboriosam error reiciendis deserunt aut animi dicta quas."
      />

      <Alert
        type="alert-danger"
        icon={<Ban />}
        title="Oops! An error occurred"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quidem harum aperiam, laboriosam error reiciendis deserunt aut animi dicta quas."
      />

      <Alert
        type="alert-warning"
        icon={<TriangleAlert />}
        title="Pro Tips & Tricks"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quidem harum aperiam, laboriosam error reiciendis deserunt aut animi dicta quas."
      />
    </>
  );
}

export default App;
