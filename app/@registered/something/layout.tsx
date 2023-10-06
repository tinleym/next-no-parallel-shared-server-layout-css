import SomethingSharedServer from "../../_lib/SomethingSharedServer";
import SomethingSharedClient from "../../_lib/SomethingSharedClient";

export default function RegisteredSomethingLayout({ children }) {
  return (
    <div>
      <h1>Registered</h1>
      <h2>Server Layout:</h2>
      <SomethingSharedServer />
      <h2>Client Layout:</h2>
      <SomethingSharedClient />
      {children}
    </div>
  );
}
