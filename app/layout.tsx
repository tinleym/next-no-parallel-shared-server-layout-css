"use client";

import { useState } from "react";

export default function RootLayout({ guest, registered }) {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <html>
      <head />
      <body>
        <div>
          {isRegistered && (
            <button
              style={{ fontSize: "1.25em" }}
              onClick={() => {
                setIsRegistered(false);
              }}
            >
              Switch To Guest
            </button>
          )}
        </div>
        {isRegistered ? registered : guest}
      </body>
    </html>
  );
}
