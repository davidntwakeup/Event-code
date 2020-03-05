// function button(){
//     alert("this is an alert")
// }

// var moringaStudent = {
//     firstName: "Charlie",
//     lastName: "Obina",
//     level: 1,
//     track: ["Prep","JavaScript","Python", "Django"],
//     enrollmentStatus: true
//   };

//   console.log(moringaStudent);
// <-----Business Logic------>
const Event = function(name, ticket = 'small') {
  this.name = name;
  this.ticket = ticket;


  Object.defineProperty(this, 'price', {
    get: function() {
      switch (this.ticket) {

        default:
          return this.listPrice[0]
          break;
      }
    }
  })
}
Event.prototype.getTotalPrice = function() {


  return this.price;
}

const Coachella1 = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [1000]
}
Coachella1.prototype = new Event();

const Martin1 = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [1000]
}
Martin1.prototype = new Event();

const Alan1 = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [1900]
}
Alan1.prototype = new Event();

const Eminem1 = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [2000]
}
Eminem1.prototype = new Event();

const Avicii1 = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [3000]
}
Avicii1.prototype = new Event();
const CheeseLove = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [1300]
}
CheeseLove.prototype = new Event();
const Pepperoni = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [1150]
}
Pepperoni.prototype = new Event();
const Napoletana = function(name, ticket) {
  Event.call(this, name, ticket);
  this.listPrice = [1600]
}
Napoletana.prototype = new Event();

const availableEvent = [];
const eminem = new Eminem1('Eminem');
const avicii = new Avicii1('Avicii');
const coachella = new Coachella1('Coachella');
const martin = new Martin1('Martin Garixx');
const alan = new Alan1('Alan Walker');
const cheeseLove = new CheeseLove('Rihanna')
const pepperoni = new Pepperoni('David Guetta')
const napoletana = new Napoletana('Napoletana')

availableEvent.push(eminem, coachella, cheeseLove, pepperoni, napoletana,  avicii, alan, martin);
const orders = []
const computeChanges = function(Event, object, card) {

  const index = orders.findIndex(function(order) {
    return order.details.name === Event.name;
  })
  if (index == -1) {
    orders.unshift({
      details: Event,
      count: 1
    })
    updatePrice(card, orders[0].details.getTotalPrice());
    updateCount(card, `1 in Cart`)
    updateCartBadge()
    card.find('.cart-btn').hide();
    card.find('.order-btns').show()
  } else {
    orders[index].details = Event;
    updatePrice(card, orders[index].details.getTotalPrice() * orders[index].count)
    updateCartBadge()
  }
}
const keepCount = function(Event, calc, card) {
  const index = orders.findIndex(function(order) {
    return order.details.name === Event.name;
  })
  if (index == -1) {
    if (calc == 'add') {
      orders.push({
        details: Event,
        count: 1
      })
      updateCount(card, '1 in Cart');
      updateCartBadge()
    }
  } else {
    if (calc == 'add') {
      orders[index].count += 1;
      updateCount(card, `${orders[index].count} in Cart`)
      let price = orders[index].details.getTotalPrice() * orders[index].count;
      updatePrice(card, price)
      updateCartBadge()
    } else {
      if (orders[index].count == 1) {
        orders[index].count = 0;
        updateCartBadge()
        updatePrice(card, 0)
        updateCount(card, `${orders[index].count} in Cart`)
        card.find('.cart-btn').show();
        card.find('.order-btns').hide()
      } else if (orders[index].count == 0) {
        orders.splice(index, 1)
      } else {
        orders[index].count -= 1;
        updateCount(card, `${orders[index].count} in Cart`)
        let price = orders[index].details.getTotalPrice() * orders[index].count
        updatePrice(card, price)
        updateCartBadge()
      }
    }
  }
}

function callKeepCount(id, calc, card) {
  switch (id) {
    case 'Coachella':
      keepCount(coachella, calc, card);
      break;
    case 'Martin-Garixx':
      keepCount(martin, calc, card);
      break;
    case 'Alan-Walker':
      keepCount(alan, calc, card);
      break;
    case 'Eminem':
      keepCount(eminem, calc, card);
      break;
    case 'Avicii':
      keepCount(avicii, calc, card);
      break;
    case 'Rihanna':
      keepCount(cheeseLove, calc, card);
      break;
    case 'David-Guetta':
      keepCount(pepperoni, calc, card);
      break;
    case 'Napoletana':
      keepCount(napoletana, calc, card);
      break;

    default:
      break;
  }
}

function updateCount(card, count) {
  card.find('.inCart').text(count)
}

function updatePrice(card, price) {
  card.find('.price-display').text(price)
}

function clearCart(cart) {
  cart.splice(0, cart.length);
  $('.inCart').text(`0 in Cart`);
  $('.cart-btn').show();
  $('.order-btns').hide();
  const currentCard = $('.price-display').closest('.card');
  let EventId;
  console.log(currentCard);
  currentCard.each(function(i) {
    let card = $(currentCard[i]);
    EventId = $(card).attr('id');
    resetPrice(card, EventId)
  })
  updateCartBadge();
}

function resetPrice(currentCard, EventId) {
  switch (EventId) {
    case 'Coachella':
      currentCard.find('.price-display').text(`${coachella.getTotalPrice()}`)
      break;
    case 'Martin-Garixx':
      currentCard.find('.price-display').text(`${martin.getTotalPrice()}`)
      break;
    case 'Alan Walker':
      currentCard.find('.price-display').text(`${alan.getTotalPrice()}`)
      break;
    case 'Eminem':
      currentCard.find('.price-display').text(`${eminem.getTotalPrice()}`)
      break;
    case 'Avicii':
      currentCard.find('.price-display').text(`${avicii.getTotalPrice()}`)
      break;
    case 'Rihanna':
      currentCard.find('.price-display').text(`${cheeseLove.getTotalPrice()}`)
      break;
    case 'David-Guetta':
      currentCard.find('.price-display').text(`${pepperoni.getTotalPrice()}`)
      break;
    case 'Napoletana':
      currentCard.find('.price-display').text(`${napoletana.getTotalPrice()}`)
      break;

    default:
      break;
  }
}

function updateCartBadge() {
  let count = 0;
  orders.forEach(function(order) {
    count += order.count;
  })
  $('.badge').text(`${count}`)
}

function calculateCheckOutPrice() {
  let total = 0
  orders.forEach(function(order) {
    if (order.count !== 0) {
      total += order.details.getTotalPrice() * order.count;
    }
  })
  return total;
}
// <----- UI LOGIC ------->
$(function() {
  //add Event display to the DOM dynamically
  availableEvent.forEach(function(Event) {
    $('#card-display').append(`
            <div class="card secondary-color text-light" id="${(Event.name).replace(' ','-')}">
                <div class="card-img-top"></div>
                <div class="card-body">
                    <h5 class="card-title">${Event.name}</h5>
                    <div class="price-display">${Event.getTotalPrice()}</div>
                </div>
                <div style="clear:both;"><div>
                <div class="card-footer">
                    <button class="btn btn-primary cart-btn">Add to cart</button>
                    <div class="order-btns">
                        <button class="btn btn-primary add">+</button>
                        <p class="inCart">0 in Cart</p>
                        <button class="btn btn-primary minus">-</button>
                    </div>
                </div>
            </div>
        `)
  })
  //collect form input to recalculate price
  let arr = [];
  let objArr = [];
  $('form').change(function() {
    arr = [];
    objArr = []
    const result = $(this).serialize();
    const splitted = result.split('&');
    splitted.forEach(element => {
      let data = element.split('=');
      arr.push(data);
    });
    arr.forEach(function(element) {
      let obj = Object.assign({}, {
        [element[0]]: element[1]
      })
      objArr.push(obj);
    })
    const myObject = {};
    objArr.forEach(function(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          myObject[key] = obj[key]
        }
      }
    })
    const currentCard = $(this).closest('.card');
    const EventId = currentCard.attr('id')
    switch (EventId) {
      case 'Coachella':
        computeChanges(coachella, myObject, currentCard);
        break;
      case 'Martin-Garixx':
        computeChanges(martin, myObject, currentCard);
        break;
      case 'Alan-Walker':
        computeChanges(alan, myObject, currentCard);
        break;
      case 'Avicii':
        computeChanges(avicii, myObject, currentCard);
        break;
      case 'Eminem':
        computeChanges(eminem, myObject, currentCard);
        break;
      case 'Rihanna':
        computeChanges(cheeseLove, myObject, currentCard);
        break;
      case 'David-Guetta':
        computeChanges(pepperoni, myObject, currentCard);
        break;
      case 'Napoletana':
        computeChanges(napoletana, myObject, currentCard)
        break;

      default:
        // console.log('Sth broke')
        break;
    }
  })
  $('.order-btns').hide();
  $('.cart-btn').click(function() {
    $(this).next().show()
    $(this).hide();
  })
  $('.add').click(function() {
    const card = $(this).closest('.card')
    const id = card.attr('id');
    callKeepCount(id, 'add', card)
  })
  $('.minus').click(function() {
    const card = $(this).closest('.card')
    const id = card.attr('id');
    callKeepCount(id, 'minus', card)
  })
  $('.close').click(function() {
    $('#mymodal').hide();
    $('#checkoutForm').trigger('reset');
  })
  $('.cart').click(function() {
    $('#mymodal').find('#summary').empty();
    $('#mymodal').show();
    $('.hidden').hide();
    const total = calculateCheckOutPrice();
    orders.forEach(function(order, i) {
      if (order.count !== 0) {
        $('#summary').append(`
                <div>
                    <h3>${order.details.name}</h3>
                    <p class="lead"> Ticket price : ${order.details.getTotalPrice()}</p>
                    <p> Number of tickets : ${order.count}</p>
                    <p class="lead"> Total cost : ${order.details.getTotalPrice()*order.count}<p/>
                    <hr>
                </div>
            `)
      }
    })
    $('.total').html(`<h2>Total : ${total}</h2>`)
    if (total == 0) {
      $('.checkout-btn').attr('disabled', '')
    } else {
      $('.checkout-btn').removeAttr('disabled')
    }
  })

  $(".checkout-btn").click(function() {
    clearCart(orders);
    $('#checkoutForm').trigger('reset');
    $('#mymodal').hide();
    $('#alert').append(`
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Order Successful</strong><span id="checkout-alert"> Your order should be ready in about 1 hour!</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `)
  })
})

//paymentform validation

var acceptedCreditCards = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35[0-9]{3})[0-9]{11}$/,
};

$('#ccnum').on('input', function(){
  if (checkSupported($('#ccnum').val())) {
    $('#status').html('valid');
  } else {
    $('#status').html('invalid');
  }
});


function checkSupported(value) {
  // remove all non digit characters
  var value = value.replace(/\D/g, '');
  var accepted = false;

  // loop through the keys (visa, mastercard, amex, etc.)
  Object.keys(acceptedCreditCards).forEach(function(key) {
    var regex = acceptedCreditCards[key];
    if (regex.test(value)) {
      accepted = true;
    }
  });

  return accepted;
}
