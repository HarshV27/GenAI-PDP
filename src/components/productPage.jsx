import React from "react";
import ProductDetails from "./productDetails";
import ProductInfo from "./productInfo";
import"./ProductPage.css";
import products from "./productData"
export default function ProductPage() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e5ae3fa1c57c471cac963ca9e248ac01b1d6831e9f6f916566aa42f3fd133f?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
            className="img"
          />
          <div className="div-3">
            <div className="div-4">Search</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b152b5b7d89a187db0a6b5293d28a4c693c72747615b2b339b526698512cdd32?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
              className="img-2"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22010ef202aeb925103800720b6317bc48664d672f236fd70a298b1629e72ddf?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
            className="img-3"
          />
        </div>
        <div className="div-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c109a7b7dab3890733ec7b14f98ff265201635bde11258fdccc0757e0bb3ec1?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
            className="img-4"
          />
        </div>
        <div className="div-6" />
        <div className="div-7">
          <div className="div-8">
            <div className="div-9" />
            <div className="div-10" />
            <div className="div-11" />
            <div className="div-12" />
          </div>
          <ProductDetails/>
          <ProductInfo  product={products[0]}/>
        </div>
      </div>
    </>
  );
}
