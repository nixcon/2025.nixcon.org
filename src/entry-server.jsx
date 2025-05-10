// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.svg" />

          {/* Basic Meta Tags */}
          <title>NixCon 2025 - Switzerland, September 5-7, 2025</title>
          <meta name="description" content="NixCon 2025 is a community-organized conference about Nix and NixOS taking place in Rapperswil-Jona, Switzerland on September 5-7, 2025." />
          <meta name="keywords" content="NixCon, Nix, NixOS, conference, Switzerland, Rapperswil-Jona, 2025" />
          <meta name="author" content="NixCon Organizers" />

          {/* Open Graph Tags */}
          <meta property="og:title" content="NixCon 2025 - Switzerland" />
          <meta property="og:description" content="Join us for NixCon 2025 in Rapperswil-Jona, Switzerland on September 5-7, 2025." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://2025.nixcon.org" />
          <meta property="og:image" content="https://2025.nixcon.org/Screenshot.jpg" />
          <meta property="og:site_name" content="NixCon 2025" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="NixCon 2025 - Switzerland" />
          <meta name="twitter:description" content="Join us for NixCon 2025 in Rapperswil-Jona, Switzerland on September 5-7, 2025." />
          <meta name="twitter:image" content="https://2025.nixcon.org/Screenshot.jpg" />

          {/* Theme Color */}
          <meta name="theme-color" content="#f34379" />

          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
