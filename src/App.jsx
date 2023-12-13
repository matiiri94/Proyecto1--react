import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./component/NavBar";
import CartWidget from "./component/CartWidget";
import ItemListContainer from './component/ItemListContainer';

const App =() => {

return (
  <div style={{width:'100vw', hitght: '100vh'}} >
  
  <NavBar>

  </NavBar>
  
  <CartWidget>

  </CartWidget>
  <ItemListContainer greeting="Recibi tu pedido sin costo de envio" />

  </div>
); 
}

export default App; 

