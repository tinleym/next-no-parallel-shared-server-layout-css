import SomethingSharedServer from "../../_lib/SomethingSharedServer";
import SomethingSharedClient from "../../_lib/SomethingSharedClient";

export default function GuestSomethingLayout({ children }) {
  return (
    <div>
      <h1>Guest</h1>
      <h2>server layout:</h2>
      <SomethingSharedServer />
      <h2>client layout:</h2>
      <SomethingSharedClient />
      {children}
    </div>
  );
}
