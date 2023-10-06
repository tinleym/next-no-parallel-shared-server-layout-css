import SomethingSharedServer from "../../_lib/SomethingSharedServer";
import SomethingSharedClient from "../../_lib/SomethingSharedClient";

export default function GuestSomethingPage() {
  return (
    <div>
      <h2>server page:</h2>
      <SomethingSharedServer />
      <h2>client page:</h2>
      <SomethingSharedClient />
    </div>
  );
}
