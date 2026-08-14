import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <title>Let's Get Reel</title>
      </head>
      <body
        className="antialiased font-sans p-4"
      >
        <div>
          <h1 className="text-center text-3xl mb-2">Let's Get Reel</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
