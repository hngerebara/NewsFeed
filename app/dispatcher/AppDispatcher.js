import  { Dispatcher }  from 'flux';
import ObjectAssign from 'object-assign';
import NewsConstants from "../constants/NewsConstants";

const AppDispatcher = ObjectAssign( new Dispatcher(), {
   handleViewAction(action) {
       this.dispatch({
           action
       })
   }
});


export default AppDispatcher;




