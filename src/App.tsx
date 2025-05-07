import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Coffee } from "./pages/coffee/Coffee";
import { Home } from "./pages/home/Home";
import { Payment } from "./pages/payment/Payment";
import CashPayment from "./pages/cashPayment/CashPayment";
import CardPayment from "./pages/cardPayment/CardPayment";
import { CardPaymentError } from "./pages/cardPaymentError/CardPaymentError";
import { Drink } from "./pages/drink/Drink";
import { Finish } from "./pages/finish/Finish";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffee" element={<Coffee />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cash" element={<CashPayment />} />
        <Route path="/card" element={<CardPayment />} />
        <Route path="/cardError" element={<CardPaymentError />} />
        <Route path="/drink" element={<Drink />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
};

export default App;
