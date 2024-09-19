import React from 'react';
//1. context yapısını abone olmamızı sağlayan yapı
import { useContext } from 'react';

//2. context yapısına abone olmak istediğimiz sepet dosyası
import { SepetContext } from '../Context/SepetContext';
const Cart = ({id, name, image, price}) => {
  //3. abone olmak istediğimiz fonksiyon
  const {addToCart} = useContext(SepetContext);


  return (
    <div className='card'> 
    <img src= {image} alt="" />
    <div className='card-body'>
      <div className='d-flex justify-content-between'>
      <h4>{name}</h4>
      <p className='fw-bold text-success fs-4'>{price}$</p>
      </div>

    <button className='btn btn-danger'onClick= {()=> 
    //! contexte bulunan addtocart methodunu çalıştırıp fonksiyona sepete eklenecek ürünün objesi olarak gönderiyoruz
      addToCart({
        amount: 1,//sepete eklendiği zaman miktar değeri bir olacağı için
        id, 
        name, 
        image, 
        price})}>
      Sepete Ekle</button>
    </div>
    </div>
  )
}

export default Cart
