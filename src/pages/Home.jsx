import React from 'react'
import { Categories, PizzaBlock, SortPopup } from '../components';
import store from '../redux/store';


const inc = () => {
  store.dispatch({
    type: 'counter/incremented',
  });
};

store.subscribe(() => {
  console.log('AAS', store.getState());
});


function Home({items}) {

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
            {items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj}/>
            })}            
          </div>
        </div>
    )
}

export default Home
