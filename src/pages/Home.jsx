import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components';
import { useSelector } from 'react-redux';


function Home() {
  const { items } = useSelector(({ pizzas, filters }) => {
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    };
  });
    return (
        <div className="container">
          <button onClick={inc}></button>
          <div className="content__top">
            <Categories
              onClickItem={(name) => alert(name)}
              items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
            />
            <SortPopup items={[{name: 'популярности', type: 'popular'},{name: 'цене',type: 'price'}, {name: 'алфавиту',type: 'alphabet'}]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items && items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj}/>
            })}            
          </div>
        </div>
    )
}

export default Home
