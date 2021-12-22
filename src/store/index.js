import { createStore } from 'redux';
import allReducers from '../reducer';

export default function configurationStore() {
    let store = createStore(
        allReducers,
    )
    return store ;
}
  