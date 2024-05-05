import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Welcome to Shopper, your one-stop destination for all your shopping needs! Discover a world of endless possibilities as you browse through our extensive collection of products, ranging from the latest fashion trends to cutting-edge electronics, home essentials, beauty products, and much more.</p>
        <p>
        Shop with confidence knowing that each product on our platform is carefully selected from trusted brands and sellers, ensuring quality and authenticity every step of the way. Plus, take advantage of exclusive deals, discounts, and promotions regularly offered to our valued customers.
        </p>
      </div>
    </div>
  )
}
