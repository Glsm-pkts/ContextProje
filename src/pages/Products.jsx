import Cart from "../components/Cart"
const Products = () => {
const products = [
{   id: 1,
    name: 'Versace',
    image: 'https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/rb-0880s-49-90131-ray-ban-unisex-gunes-45e0bd.jpg',
    price: 20 
},
{
    id: 2,
    name: "Burberry",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/rb-3539-54-0028g-ray-ban-gunes-gozlugu-8720.jpg",
    price: 15
  },
  {
    id: 3,
    name: "Prada",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/sf9844-53648g-sf9844-53648g-fila-gunes-d-d1ab.jpg",
    price: 50
  },
  {
    id: 4,
    name: "Doice & Gabbana",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/dg-2301-58-056q-dolce-gabbana-kadin-gu-e6891f.jpg",
    price: 13
  },
  {
    id: 5,
    name: "Furla",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/sfu630-530700-furla-kadin-gunes-gozlug-f-684c.jpg",
    price: 10
  },
  {
    id: 6,
    name: "Philipp Plein",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/sjc019-520aak-just-cavalli-kadin-gunes-b28184.jpg",
    price: 10
  },
  {
    id: 7,
    name: "Fila",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/sf9852-53579p-fila-gunes-gozlugu-a4d6.jpg",
    price: 45
  },
  {
    id: 8,
    name: "Prada Sport",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/ps-05ys-58-1ab09u-prada-sport-erkek-gu-6d0e67.jpg",
    price: 65
  },
  {
    id: 9,
    name: "Furla",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/bs-1309s-807-50-ku-bs-1309s-807-50-ku--41a4-8.jpg",
    price: 20
  },

  {
    id: 10,
    name: "Police",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/th-1885s-807-53-9o-th-1885s-807-53-9o--5d0eb3.jpg",
    price: 10
  },

{
    id: 11,
    name: "Furla",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/sf9844-53648g-sf9844-53648g-fila-gunes-d-d1ab.jpg",
    price: 40
  },
  {
    id: 11,
    name: "Just Cavalli",
    image: "https://static.ticimax.cloud/cdn-cgi/image/width=275,quality=85/35131/uploads/urunresimleri/buyuk/sjc019-520700-just-cavalli-kadin-gunes-aa1b43.jpg",
    price: 30
  },
  
]

  return (
    <div className="container d-flex flex-wrap justify-content-between gap-5 p-4"> {
 //!products dizisindeki herbir objeiçiin ekrana basma
 products.map((product)=>(
  <Cart {...product}/>  //!ekrana bastığımız  karta kartın içereceği ürünün bilgilerini sayfası açarak prop olara gönderdik.

))}
    </div>
  )
}

export default Products
