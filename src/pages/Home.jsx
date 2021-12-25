import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components';

function Home({items}) {

    return (
        <div className="container">
          <div className="content__top">
            <Categories
              onClickItem={(name) => alert(name)}
              items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
            />
            <SortPopup items={['популярности', 'цене', 'алфавиту']} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj} name='Test'/>
            })}            
          </div>
        </div>
    )
}

export default Home
