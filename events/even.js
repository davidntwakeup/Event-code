$(function () {

   var goToCartIcon = function($addTocartBtn){
     var $cartIcon = $(".my-cart-icon");
     var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("img") + '"/>').css({"position": "fixed", "z-index": "999"});
     $addTocartBtn.prepend($img);
     var position = $cartIcon.position();
     $image.animate({
       top: position.top,
       left: position.left
     }, 500 , "linear", function() {
       $img.remove();
     });
   };

   $('.my-cart-btn').myCart({
     classCartIcon: 'my-cart-icon',
     classCartBadge: 'my-cart-badge',
     classProductQuantity: 'my-product-quantity',
     classProductRemove: 'my-product-remove',
     classCheckoutCart: 'my-cart-checkout',
     affixCartIcon: true,
     showCheckoutModal: true,
     clickOnAddToCart: function($addTocart){
       goToCartIcon($addTocart);
     },
     clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
       console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
     },
     checkoutCart: function(products, totalPrice, totalQuantity) {
       console.log("checking out", products, totalPrice, totalQuantity);
     },
     getDiscountPrice: function(products, totalPrice, totalQuantity) {
       console.log("calculating discount", products, totalPrice, totalQuantity);
       return totalPrice * 0.5;
     }
   });

 });
function butt() {
  alert("this works");
}
