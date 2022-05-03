export const Product = (props) => {
  const name = props.name || "Product name";
  const price = props.price || 100;
  const image = props.image || "";

    return (
      <article className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{price} €</p>
      </article>
    );
  };