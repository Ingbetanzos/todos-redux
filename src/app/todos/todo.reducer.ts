import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarTodos, toggleAll } from "./todo.actions";
import { toggle } from './todo.actions';
import { Todo } from "./models/todo.model";

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje Ironman'),
  new Todo('Robar escudo del capitán América'),
];

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => { // Aplicando destructuración para obtener el id
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => { // Aplicando destructuración para obtener el id y texto.
    console.log(id)
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    })
  }),
  on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, { completado }) => state.map(todo => {
    return { // Obtenenos todoas las lleves por medio de la destructuración.
      ...todo,
      completado: completado
    }
  })),
  on(limpiarTodos, state => state.filter(todo => !todo.completado)),
  /*on(limpiarTodos, state => state.map(todo => { // Limpiar todos avanzado
    return {
      ...todo,
      completado: false
    }
  })),*/

);
;

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
