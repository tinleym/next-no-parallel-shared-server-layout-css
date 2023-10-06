const auth = "REGISTERED";

export default function RootLayout({ guest, registered }) {
  return (
    <html>
      <head />
      <body>{auth === "REGISTERED" ? registered : guest}</body>
    </html>
  );
}
