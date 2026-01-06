export default function HomePage() {
  const props = { message: "Ana sayfa props örneği" };
  return (
    <div>
      <h2>Ana Sayfa</h2>
      <p>Message: {props.message}</p>
    </div>
  );
}