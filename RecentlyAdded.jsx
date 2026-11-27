import { items } from '../data/items';
import ItemCard from './ItemCard';

function RecentlyAdded({ onViewDetails }) {
  // Sort newest first without mutating the original array
  const recent = [...items]
    .filter((item) => item.available)
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 4);

  return (
    <section className="recently-added" id="recent" aria-labelledby="recent-heading">
      <div className="section-header">
        <h2 id="recent-heading">Recently Added</h2>
        <p className="section-subtitle">
          The newest donations available for collection.
        </p>
      </div>
      <div className="items-grid">
        {recent.map((item) => (
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

export default RecentlyAdded;
