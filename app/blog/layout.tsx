export default function BlogLayout({ children }) {
  return (
    <div style={{ border: "2px solid #ddd", padding: 20 }}>
      <h2>Blog Layout</h2>
      {children}
    </div>
  );
}

