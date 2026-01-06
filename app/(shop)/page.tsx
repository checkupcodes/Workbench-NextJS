export default function ShopHome() {
  const props = { name: "Sepet" };

  return (
    <div>
      <h3>Shop Ana Sayfa</h3>
      <p>Bu sayfa route group '(shop)' içindedir ama URL değişmez.</p>
      <p>Prop örneği: {props.name}</p>
    </div>
  );
}

