const IMAGES = {
  'Double Cantal': 'images/DoubleCantal.svg',
  'Super Crémeux': 'images/SuperCremeux.svg',
  'Poulet Croquant': 'images/PouletCroquant.svg',
}

export const ProductCard = ({ product, unavailable, onSelect }) => (
  <div className="ProductCard" onClick={!unavailable ? onSelect : undefined}>
    <img src={IMAGES[product.title]} alt={product.title} />
    {product.title}
    {unavailable && (
      <span className="ProductUnavailable">Rupture de stock</span>
    )}
  </div>
)
