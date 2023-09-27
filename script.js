let list = {
  iphone: {
    name: "iphone 15",
    price: 1000,
    amount: 0,
  },
  oppo: {
    name: "Oppo X7",
    price: 900,
    amount: 0,
  },
  Tab: {
    name: "Samsung Tab S8",
    price: 1100,
    amount: 0,
  },
  S23: {
    name: "Samsung S23",
    price: 1200,
    amount: 0,
  },
  Emporio: {
    name: "Emporio Armani",
    price: 300,
    amount: 0,
  },
  Versace: {
    name: "Versace",
    price: 400,
    amount: 0,
  },
  Sauvage: {
    name: "Sauvage",
    price: 500,
    amount: 0,
  },
  Francais: {
    name: "Parfum Francais",
    price: 200,
    amount: 0,
  },
};
let calculate = document.querySelector(".calculate");
let totalEle = document.querySelector(".totalprice");
let totalPrice = 0;
calculate.onclick = () => total();
console.log(list["Versace"].price * list["Versace"].amount);
function total() {
  totalPrice = 0;
  Object.keys(list).forEach((e) => {
    if (e != "null") {
      console.log(e);
      totalPrice += list[`${e}`].price * list[`${e}`].amount;
    }
  });
  totalEle.innerHTML = totalPrice;
}
document.querySelectorAll(".pricebutton").forEach((e) => {
  e.onclick = () => {
    list[e.getAttribute("name")].amount++;
    if (list[e.getAttribute("name")].amount <= 1) {
      let child = document.createElement("li");
      child.innerHTML = `
      <div>
      <span class="number">1</span>x
      <span class="name"></span>
      ($<span class="each">400</span>)
      </div>
      <div class="cl1">
      <button name="" class="add btn-1">+</button>
      <button name=""  class="sub btn-1">-</button>
      </div>
      `;
      child.classList.add(`${e.getAttribute("name")}`);
      document.querySelector(".list").appendChild(child);
    }
    document.querySelector(
      `.${e.getAttribute("name")}`
    ).children[0].children[0].innerHTML = list[e.getAttribute("name")].amount;
    document.querySelector(
      `.${e.getAttribute("name")}`
    ).children[0].children[1].innerHTML = list[e.getAttribute("name")].name;
    document.querySelector(`.${e.getAttribute("name")}`).children[0].children[2].innerHTML = list[e.getAttribute("name")].price;

    document.querySelector(`.${e.getAttribute("name")}`).children[1].children[0].onclick=()=>{
      list[e.getAttribute("name")].amount++;
      document.querySelector(
        `.${e.getAttribute("name")}`
      ).children[0].children[0].innerHTML = list[e.getAttribute("name")].amount;
      console.log(list[e.getAttribute("name")].amount)
    }

    document.querySelector(`.${e.getAttribute("name")}`).children[1].children[1].onclick=()=>{
      list[e.getAttribute("name")].amount--;
      document.querySelector(
        `.${e.getAttribute("name")}`
      ).children[0].children[0].innerHTML = list[e.getAttribute("name")].amount;
      if(list[e.getAttribute("name")].amount == 0){
        document.querySelector(`.${e.getAttribute("name")}`).remove();
      }
      
    }
    console.log(document.querySelector(`.${e.getAttribute("name")}`).children[1].children[0])
  };
});
