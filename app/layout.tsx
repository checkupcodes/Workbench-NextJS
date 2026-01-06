export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ padding: 20, fontFamily: "sans-serif" }}>
        <h1>Root Layout - Tüm site</h1>
        {children}
      </body>
    </html>
  );
}
