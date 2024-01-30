import React from "react";
import "./productStyles.css";
export default function productDetails() {
  return (
    <>
      <div className="product-card">
        <div className="product-name">
        <header className="product-header">
          <h2 className="product-title">Clobetamil G Cream 30 g</h2>
          <p className="product-manufacturer">
            Procter &amp; Gamble Health Ltd.
          </p>
        </header>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/962dc9309c6136fc7d9c7d9f167e7ca76f51469e333db7e33d6d3b469d0a0781?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
          className="img-2"
        />
        </div>
        <div className="product-line">
          <div className="product-image-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e85846079f0f6183b1f43d04aa17b885ccb24c9cf62eb84fad4269fd29fb14e?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
              className="product-image"
              alt="Product Image"
            />
            <div className="product-price-wrapper">
              <div className="product-price">45</div>
              <div className="original-price">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e67104b12292cf9fd671e445f551748492a60ee2e875325c2043416bc5a1f31d?apiKey=e9e73932d1d043a5944dc9de17a91a79&"
                  className="product-discount-image"
                  alt="Discount Image"
                />
                <div className="product-discounted-price">55.60</div>
              </div>
              <div className="product-discount">15% off</div>
            </div>
          </div>
          <div className="cart-button" type="button">
            Add to Cart
          </div>
        </div>
        <div className="product-details">
          <div className="product-detail-label">Best Before:</div>
          <div className="product-detail-value">Aug 2027</div>
        </div>
      </div>
    </>
  );
}
