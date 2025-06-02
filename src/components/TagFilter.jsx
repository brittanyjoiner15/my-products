import PropTypes from 'prop-types';

const TagFilter = ({ tags, selectedTags, onTagToggle }) => {
  return (
    <div className="tag-filter">
      <h3 className="tag-filter-title">Filter by Tag</h3>
      <div className="tag-filter-options">
        {tags.map(tag => (
          <button
            key={tag}
            className={`tag-filter-button ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => onTagToggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagToggle: PropTypes.func.isRequired,
};

export default TagFilter;
