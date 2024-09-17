import { Link, useNavigate } from "react-router-dom";
//! 1. context yapılarına abone olmamızı sağlayan method
import { useContext, useEffect } from "react";
//! 2. abone olmak istediğimiz sepet dosyası
import { SepetContext } from "../Context/SepetContext";
const Header = () => {
    const navigate = useNavigate();

//! 3. sepetcontexine abone olma
    const {items}  = useContext(SepetContext);

    //sepet butonuna eklenen değeri arttırma
    const total = items.reduce((total,i)=> total + i.amount,0);
    
  return (
    <header className="navbar bg-dark text-light">
        <Link to={'/'}>
        <h1 className="text-light">CONTEXT  OPTİK</h1>
        </Link>
        <div onClick={() => navigate('/sepet')} className="fs-5 d-flex gap-3 align-items-center">
            <i class="bi bi-cart fs-1"></i>
            <span className="badge bg-danger">{total}</span>
            </div>
    </header>
  );
}
export default Header;
