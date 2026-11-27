import { useState } from 'react';
import { categories, items } from '../data/items';
import ItemCard from './ItemCard';

function CategoryExplorer({ onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? items.filter((item) => item.available).slice(0, 6)
      : items.filter(
          (item) => item.category === selectedCategory && item.available
        );

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleKeyDown = (e, cat) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedCategory(cat);
    }
  };

  return (
    <section className="category-explorer" id="browse" aria-labelledby="explorer-heading">
      <div className="section-header">
        <h2 id="explorer-heading">Browse by Category</h2>
        <p className="section-subtitle">
          Click a category to see matching household items available for collection.
        </p>
      </div>

      <div
        className="category-buttons"
        role="group"
        aria-label="Furniture categories"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-btn ${
              selectedCategory === cat ? 'category-btn--active' : ''
            }`}
            onClick={() => handleCategoryClick(cat)}
            onKeyDown={(e) => handleKeyDown(e, cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="category-results" aria-live="polite">
        {filteredItems.length === 0 ? (
          <div className="empty-state" role="status">
            <p>No items currently available in this category.</p>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => setSelectedCategory('All')}
            >
              Show all categories
            </button>
          </div>
        ) : (
          <>
            <p className="results-count">
              Showing {filteredItems.length} item
              {filteredItems.length !== 1 ? 's' : ''}
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            </p>
            <div className="items-grid">
              {filteredItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CategoryExplorer;
