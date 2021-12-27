import { combineReducers } from 'redux';
import filtersReducers from './filters';
import pizzasReducers from './pizzas';

const rootReducers = combineReducers({
  filters: filtersReducers,
  pizzas: pizzasReducers,
});

export default rootReducers;
