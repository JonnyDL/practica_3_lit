import { LitElement, html, css } from 'lit';

export class CardPoke extends LitElement {
    
    static styles = [
        css`
         .card-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 380px;
            background: radial-gradient(#E9B824, #088395);
            border: 4px solid;
            border-radius: 5%;
         }

         .info{
            width: 450px;
            margin: 5px;
            text-shadow: 2px 2px #0E2954;
            text-align: center;
         }

         img{
            width: 100px;
            heigth: 100px;
         }

         .title{
            display: flex;
            align-items: left;
         }

         .stats{
            background-color: gray;
            border: 2px solid white;
            border-radius: 10px;
            margin: 10px;
         }

         #name{
            background-color: gray;
            border: 2px solid white;
            border-radius: 30px;
            padding: 5px;
            margin: 10px 10px 10px 40px;
            width: 150px;
            text-align: center;
         }

         #num{
            background-color: #c19d37;
            border: 2px solid white;
            border-radius: 30px;
            padding: 5px;
            margin: 10px;
            width: 35px;
            height: 18px;
            text-align: center;
         }

         #about{
            background-color: gray;
            border: 2px solid white;
            border-radius: 10px;
            padding: 5px;
            margin: 10px;
         }

         #generate{
            background-color: gray;
            border: 2px solid white;
            border-radius: 30px;
            padding: 5px;
            margin: 10px;
         }

         #size{
            background-color: gray;
            border: 2px solid white;
            border-radius: 30px;
            padding: 5px;
            margin: 10px;
         }

         #power{
            background-color: gray;
            border: 2px solid white;
            border-radius: 30px;
            padding: 5px;
            margin: 10px;
         }

         #health{
            display: flex;
            flex-direction: row;
            justify-content: center;
            background-color: gray;
            border: 2px solid white;
            border-radius: 30px;
            padding: 5px;
            margin: 10px;
         }

         .type-resist{
            margin: 5px;
         }

         .content{
            width: 400px;
         }
        `
    ];

    static get properties() {
      return {
         pokemon: {type: String},
         oculto: {type: Boolean},
      
      };
    }

    constructor(){
      super();
      this.oculto = true;
      this.pokemon = [];
    }


    render() {
        return html`
           <div class="card-container">
                <div class="info">
                    <div class="title">
                        <p id='num'>${this.pokemon.num}</p>
                        <p id='name'>${this.pokemon.name}</p>
                    </div>
                    <div class="content" >
                        <p id="about" ?hidden=${this.oculto}>${this.pokemon.about}</p>
                        <img id="image-poke" src=${this.pokemon.img}/>
                        <div class="stats" ?hidden=${this.oculto}>
                           <p id="generate">${this.pokemon.generation.num}: ${this.pokemon.generation.name} </p>
                           <p id="size">Alto: ${this.pokemon.size.height}, peso: ${this.pokemon.size.weight}</p>
                           <p id="power">Base de ataque: ${this.pokemon.encounter['base-flee-rate']}</p>
                           <ul id="health">${this.pokemon.resistant.map((type)=>
                              html`<p class="type-resist">${type}</p>`
                           )
                           }</ul>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
    }



}

customElements.define('card-poke', CardPoke);
