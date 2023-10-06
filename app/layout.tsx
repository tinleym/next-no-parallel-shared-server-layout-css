const isRegistered = true;

export default function RootLayout({ guest, registered }) {
  return (
    <html>
      <head />
      <body>{isRegistered ? registered : guest}</body>
    </html>
  );
}
