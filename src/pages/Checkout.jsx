import { useContext } from "react";
import { SepetContext } from "../Context/SepetContext";

const Checkout = () => {
  //! context yapısına abone olma
  const { items, deleteFromCart, addToCart } = useContext(SepetContext);
  console.log(items);

  //! dizi içerisinde tutulan bütün ürünlerin fiyatlarını miktar değerlerine göre toplama
  /* miktar değerlerine göre toplama
   * reduce methodu iki parametre alır
   * aldığı ikinci parametre dizideki döndüğü elemandır
   bu elemanın herhangi bir değerini aldığı birinci parametreye ekler
   * ! işlemin sonucunda (,) virgül koyup totalin ilk değerini vermeniz gerek
   */
  const total = items.reduce(
    (total, item) => total + (item.price * item.amount),
    0
  ).toFixed(); // Toplam fiyatı virgülden sonra iki basamakla sınırlıyoruz

  return (
    <div className="d-grid gap-1 p-4 m-auto">
      {items.length === 0 ? (
        <h3 className="d-flex justify-content-evenly align-items-center mt-5">
          Sepetinizde Ürün Bulunmamaktadır! 
          <button className="btn btn-danger">Alışverişe Başla</button>
        </h3>
      ) : (
        <>
          <h3>
            Ürünlerin toplam fiyatı <span className="text-success p-1">{total} $</span> 
          </h3>
          {/** contexte tutulan items dizisindeki her bir eleman için kart basma */}
          {items.map((item) => (
            <div className="d-flex border shadow justify-content-evenly align-items-center h-50" key={item.id}>
              <img className="h-100 rounded" src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <h3 className="text-success">{(item.price * item.amount).toFixed()}$</h3> {/* Fiyatı virgülden sonra iki basamakla sınırlıyoruz */}
              <p className="fw-bold">Miktar: {item.amount}</p>
              <button className="btn btn-dark" onClick={() => addToCart(item)}>Ekle</button>
              <button onClick={() => deleteFromCart(item)} className="btn btn-danger">
                {item.amount > 1 ? 'Azalt' : 'Sil'}
              </button>
              {/** buttonda item değeri 1'den büyükse azalt dedik değilse sil dedik */}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Checkout;
