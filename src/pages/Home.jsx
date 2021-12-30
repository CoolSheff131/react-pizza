import React from 'react'
import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name: 'популярности', type: 'popular'},{name: 'цене',type: 'price'}, {name: 'алфавиту',type: 'alphabet'}]

function Home() {

  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [dispatch])

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
        <div className="container">
          <div className="content__top">
            <Categories
              onClickItem={onSelectCategory}
              items={categoryNames}
            />
            <SortPopup items={sortItems} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded ? items.map((obj) => {
              return <PizzaBlock key={obj.id} {...obj}/>
            }): Array(10).fill(<PizzaLoadingBlock/>)}        
          </div>
        </div>
    )
}

export default Home
