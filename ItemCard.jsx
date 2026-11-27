function ItemCard({ item, onViewDetails }) {
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/400x300/E9EFE8/315C4B?text=No+Image';
    e.target.alt = 'Image not available';
  };

  return (
    <article className="item-card" tabIndex={0}>
      <div className="item-card__image-wrap">
        <img
          src={item.image}
          alt={`${item.title} – ${item.condition} condition`}
          className="item-card__image"
          onError={handleImageError}
          loading="lazy"
        />
        {!item.available && (
          <span className="item-card__badge item-card__badge--unavailable">
            Unavailable
          </span>
        )}
        {item.featured && item.available && (
          <span className="item-card__badge item-card__badge--featured">
            Featured
          </span>
        )}
      </div>
      <div className="item-card__body">
        <h3 className="item-card__title">{item.title}</h3>
        <p className="item-card__meta">
          <span className="item-card__category">{item.category}</span>
          <span className="item-card__condition">{item.condition}</span>
        </p>
        <p className="item-card__date">
          Added {new Date(item.dateAdded).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </p>
        <button
          type="button"
          className="item-card__btn"
          onClick={() => onViewDetails?.(item.id)}
          disabled={!item.available}
          aria-label={item.available ? `View details for ${item.title}` : `${item.title} is unavailable`}
        >
          {item.available ? 'View details' : 'Unavailable'}
        </button>
      </div>
    </article>
  );
}

export default ItemCard;
