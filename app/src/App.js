import "./App.css";
import Login from "./components/Login/Login";
import ProductsCrud from "./components/ProductsCrud";

const CUSTOMER_TOKEN = localStorage.getItem("customerToken");
console.log("🚀 ~ CUSTOMER_TOKEN:", CUSTOMER_TOKEN)

function App() {
  return (
    <div className="App">{!CUSTOMER_TOKEN ? <Login /> : <ProductsCrud />}</div>
  );
}

export default App;