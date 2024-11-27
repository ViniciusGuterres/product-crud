import "./App.css";
import Login from "./components/Login/Login";
import ProductsCrud from "./components/ProductsCrud";

const CUSTOMER_TOKEN = localStorage.getItem("customerToken");

function App() {
  return (
    <div className="App">{!CUSTOMER_TOKEN ? <Login /> : <ProductsCrud customerJWTToken={CUSTOMER_TOKEN} />}</div>
  );
}

export default App;