//!sepet page
import { createContext, useState } from "react";

//*1. context yapısının temelini oluşturma
export const SepetContext = createContext();

//**2. sağlayıcıyı ve onun tuttuğu verileri tanımlama
export function SepetProvider({children}){
    const[items, setItems]= useState([]);
    console.log(items)

//***3. sepete yeni eleman ekleme fonksiyonun 1. parametresi
    const addToCart = (product) =>{
       //todo **sepete eklenmeye çalışan eleman sepet dizisinde bulunuyormu**
        const foundItem = items.find((item)=>item.id===product.id);
        if(foundItem){
            product.amount++;
//! 1.Clone alma
const clone = [...items];
//!  2.düzenleyeceğimiz elemanın yerini bulma */
const index = clone.findIndex((i)=>i.id===product.id)
//! 3.bu elemanın dizide güncelle
clone[index] = product
//! 4.state güncelle
setItems(clone)
//todo **eleman bulunduysa miktar değerini arttır
        }else{
// eleman bulunduysa sepete ekle
   setItems([...items, product]);//sepete ekle kısmı 2. parametresi
        }   
    };

//SEPETTEN ELEMAN SİLME 
/**önce bir fonksiyon yazıyoruz 
 * bu fonksiyonun parametresine sileceğimiz ürünü alıyo
 * checkouta gidip contexte abone oluyoruz
 * sepetcontext.provider veri olarak ekliyoruz
 * önce diziden azaltmak istediğimiz elemanı findle bulacağız
 * ve filterle if else yapıp siliyoruz
 */

const deleteFromCart =(product) =>{
    //*1.elemanı dizide bulma
    const fountItem = items.find((item)=>item.id===product.id)
    if(fountItem.amount > 1){
    //*2.miktarı 1 den fazlaysa miktarını azaltırız
const cloneItems = [...items];

//*3.bize gelen ürünün miktarını azaltma
product.amount--;

//*4.değiştireceğin elemanın dizideki sırasını bulma 
const index = cloneItems.findIndex((i)=> i.id === product.id);

//*5dizideki eski elemanı çıkartıp yenisini ekleme
cloneItems[index] = product;

//*6.state'i güncelle
setItems(cloneItems);
}else{
    //*7.miktarı 1 ise elemanı diziden çıkardık
    const filteredArr = items.filter((item)=>item.id !==product.id);

    //*8.state güncelledik
    setItems(filteredArr)
}}
    return( 

       <SepetContext.Provider value={{items, addToCart, deleteFromCart}}>
        {children}
       </SepetContext.Provider>
    
    );
}
