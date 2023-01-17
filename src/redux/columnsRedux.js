import shortid from "shortid";

const ADD_COLUMN = 'app/columns/ADD_COLUMN';
export const addColumn = payload => ({type:ADD_COLUMN, payload});

export const getAllColumns = (state) => { return state.columns }; 
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);


  const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
      case ADD_COLUMN:
        return [...statePart, { ...action.payload, id: shortid() }];
      default:
        return statePart;
    }
  }

  export default columnsReducer;