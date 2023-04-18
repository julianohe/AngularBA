class Cardnews extends HTMLElement{
    constructor (){
        super();


        const shadow = this.attachShadow({mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());

    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || "anonymous");

        const linkTitulo = document.createElement("a");
        linkTitulo.textContent = this.getAttribute("title");
        linkTitulo.href = this.getAttribute("link-url");

        const newsComponent = document.createElement("p");
        newsComponent.textContent = this.getAttribute("component");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitulo);
        cardLeft.appendChild(newsComponent);
        

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = this.getAttribute("photo") || "url/default";
        newsImage.alt = "Foto";


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);



           return componentRoot;
    }

    style(){
        const style = createElement("style");
        style.textContent = `
         .card{
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0,0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0,0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0,0.75); 
            display:flex;
            flex-direction:row;
            justify-content: space-between;
         }
         .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
         }
         .card__left{
            font-weight: 400;
         }
         .card__left > a {
            margin: 15px;
            fint-size: 25px;
            color: black;
            text-decorantion: none;
            font-weight: bold;
         }
         .card__left > p {
            color: rgb(70, 70, 70);
         }
        `;
        return style;
    }
}
customElements.define("card-news",Cardnews);