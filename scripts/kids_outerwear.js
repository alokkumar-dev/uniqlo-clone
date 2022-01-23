const newArrivalObj_1 = [
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/425209/item/ingoods_02_425209.jpg?width=1008&impolicy=quality_75",
        gendar: "KIDS",
        size: "4-5Y(110)-14Y(160)",
        name: "KIDS AIRism UV Cut Mesh Hoodie",
       desc: "New Color",
        price: 1290
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/446037/item/ingoods_02_446037.jpg?width=1008&impolicy=quality_75",
        gendar: "KIDS",
        size: "4-5Y(110)-14Y(160)",
        name: "KIDS Soft Pile Lined Sweat Long Sleeve Full Zip Hoodie",
       
        desc: "",
        price: 1990
    },

    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439859/item/ingoods_03_439859.jpg?width=1008&impolicy=quality_75",
        gendar: "KIDS",
        size: "4-5Y(110)-14Y(160)",
        name: "KIDS AIRism UV Protection Soft Leggings",
       
        desc: "",
        price: 1490
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439815/item/ingoods_70_439815.jpg?width=1008&impolicy=quality_75",
        gendar: "KIDS",
        size: "4-5Y(110)-14Y(160)",
        name: "KIDS Light Warm Padded Parka",
       
        desc: "",
        price: 2490
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439323/item/ingoods_01_439323.jpg?width=1008&impolicy=quality_75",
        gendar: "KIDS",
        size: "4-5Y(110)-14Y(160)",
        name: "GIRLS Printed Fleece Full-Zip Jacket Long Sleeve",
       
        desc: "",
        price: 1290
    },
    {
        image: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/439322/item/ingoods_01_439322.jpg?width=1008&impolicy=quality_75",
        gendar: "KIDS",
        size: "4-5Y(110)-14Y(160)",
        name: "GIRLS Printed Jacket Long Sleeve",
       
        desc: "",
        price: 990
    },
];
// console.log(newArrivalObj_1[0].price+newArrivalObj_1[1].price);

displayProducts_1(newArrivalObj_1);
function displayProducts_1(data) {
    document.querySelector(".productSide").innerHTML="";
    data.map(({ image, gendar, size, name,desc, price }) => {
        let mainDiv = document.createElement("div");
        let imgDiv = document.createElement("div");
        let sizeDiv = document.createElement("div");


        let img = document.createElement("img");
        let gend = document.createElement("h3");
        let siz = document.createElement("h3");
        let des = document.createElement("h2");
        let exclus = document.createElement("h4");
        let pric = document.createElement("h4");

        imgDiv.setAttribute("class", "imgDiv");
        sizeDiv.setAttribute("class", "sizeDiv");
        exclus.setAttribute("class", "exclusive");

        let productsObj = {
            image,
            gendar,
            size,
            name,
            desc,
            price
        }
        mainDiv.addEventListener("click", () => {
            storeData(productsObj);
        });

        img.src = image;
        gend.innerText = gendar;
        siz.innerText = size;
        des.innerText = name;
        exclus.innerText = desc;
        pric.innerText = `Rs. ${price}.00`;

        imgDiv.append(img);
        sizeDiv.append(gend, siz);
        mainDiv.append(imgDiv, sizeDiv, des, exclus, pric);

        document.querySelector(".productSide").append(mainDiv);
    });

}
var sort = document.getElementById("sortProduct");
sort.addEventListener("change", function priceSort() {
    var selected = document.getElementById("sortProduct").value;
    if (selected == "low") {
        newArrivalObj_1.sort(function (a, b) {
            // console.log(a.price)
            return a.price - b.price;

        })
    }
    if (selected == "high") {
        newArrivalObj_1.sort(function (a, b) {
            // console.log(b.price)
            return b.price - a.price;
        })
    }
    
    displayProducts_1(newArrivalObj_1);
});


function storeData(data) {
    localStorage.setItem("uniqProd", JSON.stringify(data));
    window.location.href = "./productinfo.html";
}

//for selected option 

var selected1 = document.querySelector(".select1");
selected1.addEventListener("change", () => {

    let select = document.querySelector(".select1").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected2 = document.querySelector(".select2");
selected2.addEventListener("change", () => {

    let select = document.querySelector(".select2").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected3 = document.querySelector(".select3");
selected3.addEventListener("change", () => {

    let select = document.querySelector(".select3").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected4 = document.querySelector(".select4");
selected4.addEventListener("change", () => {

    let select = document.querySelector(".select4").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected5 = document.querySelector(".select5");
selected5.addEventListener("change", () => {

    let select = document.querySelector(".select5").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected6 = document.querySelector(".select6");
selected6.addEventListener("change", () => {

    let select = document.querySelector(".select6").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected7 = document.querySelector(".select7");
selected7.addEventListener("change", () => {

    let select = document.querySelector(".select7").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected8 = document.querySelector(".select8");
selected8.addEventListener("change", () => {

    let select = document.querySelector(".select8").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected9 = document.querySelector(".select9");
selected9.addEventListener("change", () => {

    let select = document.querySelector(".select9").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected10 = document.querySelector(".select10");
selected10.addEventListener("change", () => {

    let select = document.querySelector(".select10").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});
var selected11 = document.querySelector(".select11");
selected11.addEventListener("change", () => {

    let select = document.querySelector(".select11").value;
    if (select != "") {
        window.location.href = `./${select}.html`;
    }
});

//document.getElementById("sortProduct")