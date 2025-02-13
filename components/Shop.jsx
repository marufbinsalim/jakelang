import Link from "next/link";

const ShopSection = () => {
  const products = [
    {
      id: 1,
      name: "MAGA Hat",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71mWMpsfA8L._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg",
      link: "https://www.amazon.com/s?k=maga+hat",
    },
    {
      id: 2,
      name: "Maga Black Shirt",
      image: "https://m.media-amazon.com/images/I/61j0tpwIRzL._AC_UY1000_.jpg",
      link: "https://www.amazon.com/s?k=maga+shirt",
    },
    {
      id: 3,
      name: "MAGA Red Shirt",
      image: "https://m.media-amazon.com/images/I/610Z9aeNYOL._AC_SL1500_.jpg",
      link: "https://www.amazon.com/s?k=maga+shirt",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-[100px] px-6 text-white flex-wrap">
      <div className="max-w-6xl mx-auto text-center flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-6">
          {products.map((product) => (
            <Link href={product.link} key={product.id} target="_blank">
              <div
                key={product.id}
                className="p-4 rounded-lg h-full flex flex-col justify-between cursor-pointer shadow-lg transition hover:shadow-xl border border-[#1b1b1b10]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[90vw] md:w-[200px]
                object-cover rounded-lg my-auto"
                />
                <p className="text-black mt-2">{product.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="https://www.amazon.com/s?k=maga" target="_blank">
          <button className="mt-[50px] md:mt-0 border border-blue-500 text-blue-500 px-6 py-2 hover:text-white font-bold hover:bg-blue-500 transition h-max">
            SHOP NOW →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ShopSection;
