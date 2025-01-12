// import {cards} from '../models/cards.js'
const cards = [
    {
      "name": "Irish coffee",
      "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
      "price": "7.00",
      "image": "../image/coffee-1.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Kahlua coffee",
      "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
      "price": "7.00",
      "image": "../image/coffee-2.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey raf",
      "description": "Espresso with frothed milk, cream and aromatic honey",
      "price": "5.50",
      "image": "../image/coffee-3.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Ice cappuccino",
      "description": "Cappuccino with soft thick foam in summer version with ice",
      "price": "5.00",
      "image": "../image/coffee-4.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Espresso",
      "description": "Classic black coffee",
      "price": "4.50",
      "image": "../image/coffee-5.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte",
      "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
      "price": "5.50",
      "image": "../image/coffee-6.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Latte macchiato",
      "description": "Espresso with frothed milk and chocolate",
      "price": "5.50",
      "image": "../image/coffee-7.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Coffee with cognac",
      "description": "Fragrant black coffee with cognac and whipped cream",
      "price": "6.50",
      "image": "../image/coffee-8.jpg",
      "category": "coffee",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Cinnamon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Moroccan",
      "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
      "price": "4.50",
      "image": "../image/tea-1.jpg",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Lemon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Ginger",
      "description": "Original black tea with fresh ginger, lemon and honey",
      "price": "5.00",
      "image": "../image/tea-2.jpg",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Lemon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Cranberry",
      "description": "Invigorating black tea with cranberry and honey",
      "price": "5.00",
      "image": "../image/tea-3.jpg",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Lemon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Sea buckthorn",
      "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
      "price": "5.50",
      "image": "../image/tea-4.jpg",
      "category": "tea",
      "sizes": {
        "s": {
          "size": "200 ml",
          "surcharge": "0.00"
        },
        "m": {
          "size": "300 ml",
          "surcharge": "0.50"
        },
        "l": {
          "size": "400 ml",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Sugar",
          "surcharge": "0.50"
        },
        {
          "name": "Lemon",
          "surcharge": "0.50"
        },
        {
          "name": "Syrup",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Marble cheesecake",
      "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
      "price": "3.50",
      "image": "../image/dessert-1.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Red velvet",
      "description": "Layer cake with cream cheese frosting",
      "price": "4.00",
      "image": "../image/dessert-2.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Cheesecakes",
      "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
      "price": "4.50",
      "image": "../image/dessert-3.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Creme brulee",
      "description": "Delicate creamy dessert in a caramel basket with wild berries",
      "price": "4.00",
      "image": "../image/dessert-4.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Pancakes",
      "description": "Tender pancakes with strawberry jam and fresh strawberries",
      "price": "4.50",
      "image": "../image/dessert-5.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Honey cake",
      "description": "Classic honey cake with delicate custard",
      "price": "4.50",
      "image": "../image/dessert-6.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Chocolate cake",
      "description": "Cake with hot chocolate filling and nuts with dried apricots",
      "price": "5.50",
      "image": "../image/dessert-7.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    },
  
    {
      "name": "Black forest",
      "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
      "price": "6.50",
      "image": "../image/dessert-8.jpg",
      "category": "dessert",
      "sizes": {
        "s": {
          "size": "50 g",
          "surcharge": "0.00"
        },
        "m": {
          "size": "100 g",
          "surcharge": "0.50"
        },
        "l": {
          "size": "200 g",
          "surcharge": "1.00"
        }
      },
      "additives": [
        {
          "name": "Berries",
          "surcharge": "0.50"
        },
        {
          "name": "Nuts",
          "surcharge": "0.50"
        },
        {
          "name": "Jam",
          "surcharge": "0.50"
        }
      ]
    }
  ]
const item = document.querySelector(".menu__iteme");
const ROOT_CARDS = document.getElementById("cards-list")
let categ = "coffee";

const list = document.querySelector("#cards-list")
const template = document.querySelector("#cardTemplate")
const card = template.content.querySelector(".menu__item")
const clone = template.content.cloneNode(true);

const img = template.content.querySelector(".menu__item-img")
const title = template.content.querySelector(".menu__item-title")
const subtitle = template.content.querySelector(".menu__item-about")
const cost = template.content.querySelector(".menu__item-cost")

const renderCard = () => {
  
  cards.forEach( element => {
    
    if(element.category === categ) {
      const clone = template.content.cloneNode(true);
      clone.querySelector('.menu__item-img').src = element.image;
      clone.querySelector('.menu__item-img').slt = element.name;
      clone.querySelector('.menu__item-title').textContent = element.name;
      clone.querySelector('.menu__item-about').textContent = element.description;
      clone.querySelector('.menu__item-cost').textContent = `$${element.price}`;
      clone.querySelector(".menu__item").addEventListener("click", function () { 
        popupInfo(element)
        popup.classList.remove("popup_hidden")
        document.querySelector(".page").classList.add("no-scroll")
      } )
      list.append(clone)
      
    }
  })
  
  console.log(cards.category)
}
renderCard()
