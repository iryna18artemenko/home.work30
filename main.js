class Catalog {

    render() {

        let htmlCatalog = '';

        categories.forEach(({name, key}) => {
            htmlCatalog += `
            <li class="categories" data-category="${key}">
                ${name}
            </li>
        
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        const ROOT_CATEGORIES = document.getElementById('categories');
        ROOT_CATEGORIES.innerHTML = html;
    }
}

const catalogPage = new Catalog();
catalogPage.render();



class Goods {

    render (element) {
        let htmlGoods = '';

        element.forEach(({name, img, infoData}) => {
            htmlGoods += `
                <li class="goods_wrapper" data-product=${encodeURIComponent(JSON.stringify( infoData))}>
                    <img class="goods_img" src="./images/${img}" />
                    <span class= "goods_name">${name}</span>
                    <span class= "goods_price" >${infoData.price}</span>
                </li>
            `;
        });

        const html = `
            <ul class="goods_conteiner">
                ${htmlGoods}
            </ul>
        `;

        const ROOT_GOODS = document.getElementById('goods');
        ROOT_GOODS.innerHTML = html;
        
        ROOT_GOODS.querySelectorAll(".goods_wrapper").forEach(goodsElement => {
            goodsElement.addEventListener("click", function() {
                info.render(goodsElement.dataset.product);
            })
        })
    }
}

const goods = new Goods ();


const categoriesElements = document.querySelectorAll(".categories");

categoriesElements.forEach(categoryElement => {
    categoryElement.addEventListener("click", function (){
     goods.render(entities[categoryElement.dataset.category]);
   })
})


class Info {
    
    render (element) {
        const data = JSON.parse(decodeURIComponent(element));
        let htmlInfo = `
                <li class="info"> Ціна: ${data.price} </li>
                <li class="info">Екран: ${data.screen} </li>
                <li class="info">Пам'ять: ${data.memory}</li>
                <li class="info">Камера: ${data.camera}</li>
                <li class="info">Вага: ${data.weight}</li>
                <button class="btn">Купити</button> 
            `;
        

        const html = `
            <ul class="info_conteiner">
                ${htmlInfo}
            </ul>
        `;

        const ROOT_INFO = document.getElementById('information');
        ROOT_INFO.innerHTML = html;
        

        ROOT_INFO.querySelector(".btn").addEventListener("click", function () {
            formElement.style.display= "block";   
        })

    }
}

const info = new Info();


const formElement = document.getElementById('form');


function checkForm (form) {
    if (!form.checkValidity()) {
        alert ("Помилка! Введіть всі значення!");
       return
    } 
}


formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(formElement); 

  const name = formData.get('name');
  const cityes = formData.get('cityes');
  const storage = formData.get('storage');
  const payment = formData.get('payment');
  const number = formData.get('number');
  const comment = formData.get('comment');

  if (e) {

    let htmlTable = `
        <tr>Iнформація про товар та про доставку</tr>
        <tr> ПІБ: ${name} </tr>
        <tr> Місто: ${cityes} </tr>
        <tr> Склад Нової пошти: ${storage} </tr>
        <tr> Спосіб оплати: ${payment} </tr>
        <tr> Кількість продукції, що купується: ${number} </tr>
        <tr> Коментар до замовлення: ${comment} </tr>
        `;
      
      const html = `
          <td>
              ${htmlTable}
          </td>
      `;
  
      document.querySelector("tbody").innerHTML = html;
  }
})