import React from 'react'
import propTypes from 'prop-types';
const Categories = React.memo(function Categories({activeCategory, items,onClickCategory}) {

    const onSelectItem = (index)=>{
      onClickCategory(index)
    }

    return (
        <div className="categories">
              <ul>
                <li className={activeCategory === null? 'active': ''} onClick={()=> onSelectItem(null)}>Все</li>
                {items && items.map((name, index) => (
                <li className={activeCategory === index? 'active': ''} onClick={()=>onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
                ))}
                
              </ul>
            </div>
    )
})

Categories.propTypes = {
  activeCategory: propTypes.number.isRequired, items: propTypes.arrayOf(propTypes.object).isRequired,
  onClickCategory: propTypes.func
};

Categories.defaultProps = {
  activeCategory: null, items: []
};

export default Categories
