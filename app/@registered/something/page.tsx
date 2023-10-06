import SomethingSharedServer from "../../_lib/SomethingSharedServer";
import SomethingSharedClient from "../../_lib/SomethingSharedClient";

export default function RegisteredSomethingPage() {
  return (
    <div>
      <h2>Server Page:</h2>
      <SomethingSharedServer />
      <h2>Client Page:</h2>
      <SomethingSharedClient />
    </div>
  );
}
