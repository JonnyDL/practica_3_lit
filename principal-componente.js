import { LitElement, html, css } from 'lit';
import {pokemon} from './pokemon.js';
import './card-poke.js';

export class PrincipalComponente extends LitElement {
    
    static styles = [
        css`
         /*@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');*/

          .container{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-evenly;
            background: url('./img/R.jfif');
            border: 3px solid #005B41;
            gap: 10px;
            height: 100%;
            padding: 10px;
          }

          label{
            margin: 10px;
          }

          .filter{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0px 0px 50px 0px;
            font-size: 1.5rem;
            //font-family: roboto, 'poppins', sans-serif;
          }

          #filter-button{
            background-color: blue;
            color: white;
            width: 70px;
            height: 30px;
            border-radius: 10px;
            padding: 5px;
            border: 2px solid unset;
          }

          #filter-button:hover{
            background-color: green;
            color: white;
          }

          #pokemon-type{

          }

          #pokemon-rarity{

          }

          #select-poke-type{
            font-size: 1rem;
          }

          #select-poke-rarity{
            font-size: 1rem;
          }

          #input-poke-name{
            font-size: 1rem;
          }

          #pokemon-name{

          }

          #filter-title{
            font-size: 2rem;
          }

          #error-message{
            font-size: 4rem;
            color: red;
          }

        `
    ];

    static get properties() {
        return {
            pokemones: {type: Object},
            rarityPoke: {type: Array},
            typePoke: {type: Array},
            namePoke: {type: String},
            filteredPokemon: {type: String},
            banderaName: {type: String},

        }
    }

    constructor(){
        super();
        this.pokemones = pokemon.pokemon;
        //console.log(this.pokemones);
        this.rarityPoke = [];
        this.typePoke = [];
        //console.log(this.typePoke);
        this.namePoke = "";
        this.filteredPokemon = [];
        console.log(this.filteredPokemon);
        this.banderaName = false;
    }

    /*
    connectedCallback(){
        super.connectedCallback();
        window.addEventListener('click', this.filterPoke);
    }*/

    render() {
        return html`

            <div class="filter">
                <p id="filter-title">SELECIONA UNA FORMA DE FILTRADO</p>
                
                <div class="filter-options">
                    <label id="pokemon-rarity">Tipo de rareza:
                        <select id="select-poke-rarity">
                            <option>Seleciona</option>
                            ${this.selectRarity()}
                            ${this.rarityPoke.map((item)=>
                                html`<option>${item}</option>`
                            )}
                        </select>

                    </label>

                    <label id="pokemon-type">Tipo de pokemon:
                        <select id="select-poke-type">
                            <option>Seleciona</option>
                           ${this.selectTypePoke()}
                           ${this.typePoke.map(
                            (tipo)=>
                            html`<option>${tipo}</option>`
                           )}
                        </select>

                    </label>

                    <label id="pokemon-name">Nombre: <input @input=${this.captureName} 
                    id="input-poke-name" type="text" placeholder="ej.: Pikachu"/></label>
                    <button id="filter-button" @click=${this.filterPoke}>Buscar</button>
                </div>
                <p>${this.namePoke}</p>
            </div>

            <div class="container">
                            ${this.pintarPoke()}
                            ${this.banderaName === true ? this.filteredPokemon.map(
                                (element)=> html`<card-poke .pokemon=${element}></card-poke>`
                            ) : html`<p id="error-message">No existen coincidencias</p>`
                            }
            </div>
        `;
    }

    filterPoke(e){
       /* this.pokemones.map( (poke)=>
            poke.filter((item)=> item.name === this.namePoke ? 
                html`<card-poke .pokemon=${item}></card-poke>` : 'No se encuentran coincidencias'
            )
        )*/
    
        this.pokemones.filter( (item)=> {
            if(item.name === this.namePoke.toLowerCase())
                this.filteredPokemon.push(item);
            }
        );

        console.log(this.filteredPokemon);

    }

    pintarPoke(){
        if(this.filteredPokemon.length>0){
            this.banderaName = true;
        }
    }

    captureName(e){
        const name = e.target.value;
        this.namePoke = name;
        console.log(this.namePoke);
    }

    selectRarity(){
        this.pokemones.forEach((existente)=>{
            if(!this.rarityPoke.includes(existente['pokemon-rarity'])){
                this.rarityPoke.push(existente['pokemon-rarity']);
            }
        })
    }

    selectTypePoke(){
        this.pokemones.forEach(
            (existente)=>{
                existente.type.map(
                (tipo)=>{
                    
                    if(!this.typePoke.includes(tipo)){
                        this.typePoke.push(tipo);
                    }
                }
            )}
            
        )
    }

}


customElements.define('principal-componente', PrincipalComponente);
