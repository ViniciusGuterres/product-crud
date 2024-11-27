import "./App.css";
import Login from "./components/Login";
import ProductsCrud from "./components/ProductsCrud";

const CUSTOMER_TOKEN = localStorage.getItem("customerToken");

function App() {
  return (
    <div className="App">{!CUSTOMER_TOKEN ? <Login /> : <ProductsCrud />}</div>
  );
}

export default App;