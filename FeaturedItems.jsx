import { items } from '../data/items';
import ItemCard from './ItemCard';

function FeaturedItems({ onViewDetails }) {
  const featured = items
    .filter((item) => item.featured && item.available)
    .slice(0, 4);

  return (
    <section className="featured-items" id="featured" aria-labelledby="featured-heading">
      <div className="section-header">
        <h2 id="featured-heading">Featured Furniture</h2>
        <p className="section-subtitle">
          Hand-picked items ready to help someone settle into a new home.
        </p>
      </div>
      <div className="items-grid">
        {featured.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedItems;
