<template>
    <div>
        <h1>{{productName}}</h1>
        <h2 class="price">{{price}}<span>{{currency}}</span></h2>
        <hr>

        <form id="app" @submit="checkForm">
            <div v-if="errors.length">
                <div class="errors">
                    <p v-for="error in errors">{{ error }}</p>
                </div>
            </div>
            <h3>WYBRANO: <span id="color">{{colorDefault}}</span></h3>
            <label class="btn-macrophoto active" title="szary">
                <input type="checkbox" name="color" id="color" v-model="color">
                <img src="../assets/macro_photo.jpg" title="szary">
            </label>
            <h3>ROZMIAR</h3>
            <div class="size-buttons">
                <label tabindex="1" v-on:click="changeXsSizePrice" class="btn btn-outline-dark btn-sm" for="sizeXs">
                    <input type="checkbox" name="sizeXs" id="sizeXs" v-model="size">
                    {{sizes.xs}}
                </label>
                <label tabindex="1" v-on:click="changeSsizePrice" class="btn btn-outline-dark btn-sm" for="sizeS">
                    <input type="checkbox" name="sizeS" id="sizeS" v-model="size">
                    {{sizes.s}}
                </label>
                <label tabindex="1" v-on:click="changeMsizePrice" class="btn btn-outline-dark btn-sm" for="sizeM">
                    <input type="checkbox" name="sizeM" id="sizeM" v-model="size">
                    {{sizes.m}}
                </label>
                <label tabindex="1" v-on:click="changeLsizePrice" class="btn btn-outline-dark btn-sm" for="sizeL">
                    <input type="checkbox" name="sizeL" id="sizeL" v-model="size">
                    {{sizes.l}}
                </label>
            </div>
            <button type = "submit" class = "btn btn-primary btn-lg btn-block">
                DO KOSZYKA<span><img class="shopping-purse-icon" src="../assets/shopping-purse-icon.svg"></span>
            </button>
        </form>
        <hr>
        <div class="description">
            <h3>OPIS PRODUKTU</h3>
            <p>
                {{description}}
            </p>
        </div>
        <v-dialog/>
    </div>
</template>

<script>
    export default {
        color: 'ProductData',
        data() {
            return {
                productName: '',
                price: '',
                currency: '',
                colorDefault: '',
                sizes: [
                    {xs: '',
                        disable: false},
                    {s: '',
                        disable: false},
                    {m: ''},
                    {l: ''}
                ],
                description: '',
                errors: [],
                color: null,
                size: null
            };
        },
        mounted: function () {
            const result = async () => {
                const response = await fetch("../../static/product.json");
                const data = await response.json();
                this.productName = data.name;
                this.price = data.basePriceNet;
                this.currency = data.currency;
                this.colorDefault = data.configurableAttributes.color[0].value;
                this.sizes.xs = data.configurableAttributes.size[0].value;
                this.sizes.s = data.configurableAttributes.size[1].value;
                this.sizes.m = data.configurableAttributes.size[2].value;
                this.sizes.l = data.configurableAttributes.size[3].value;
                this.description = data.description;
            };
            result();
        },
        methods: {
            changeXsSizePrice: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.price = data.configurablePrices[0].prices[0].priceGross;
                };
                result();
            },
            changeSsizePrice: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.price = data.configurablePrices[0].prices[1].priceGross;
                };
                result();
            },
            changeMsizePrice: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.price = data.configurablePrices[0].prices[2].priceGross;
                };
                result();
            },
            changeLsizePrice: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.price = data.configurablePrices[0].prices[3].priceGross;
                };
                result();
            },
            checkForm: function (e) {
                if (this.color && this.size) {
                    this.$modal.show('dialog', {
                        title: 'DODANO DO KOSZYKA',
                        text: 'Twój produkt został poprawnie dodany do koszyka<br>Dziękujemy za zakupy',
                        buttons: [
                            {
                                title: 'Zamknij wiadomość'
                            }
                        ]
                    });
                    this.errors = [];
                }
                if (!this.color)
                    this.errors.push("Proszę wybrać kolor");
                if (!this.size)
                    this.errors.push("Proszę wybrać rozmiar");
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>

    .errors{
        color: #ff6633;
        text-align: left;
    }

    input[type=checkbox] {
        display: none;
    }

    label{
        display: inline-block;
        cursor: pointer;
    }
    label img{
        pointer-events: none;
    }

    .shopping-purse-icon{
        width: 18px;
        margin-bottom: 12px;
        margin-left: 13px;
    }

    h1{
        font-size: 20px;
        text-align: left;
    }

    h2{
        font-size: 20px;
        text-align: right;
        font-weight: bold;
        padding-top: 50px;
    }

    h3{
        font-size: 15px;
        text-align: left;
        font-weight: normal;
        padding-top: 30px;
    }

    h3 #color{
        text-transform: uppercase;
    }

    .description p{
        font-size: 13px;
    }

    .description h3{
        padding-top: 10px;
    }

    hr{
        margin-top: 20px;
        border-color: black;
    }

    .size-buttons{
        float: left;
    }

    .btn.btn-outline-dark.btn-sm{
        border-radius: 2px;
        margin: 5px 2px;
        width: 50px;
        background: white;
        border: 2px solid black;
        cursor: pointer;
    }

    .btn.btn-outline-dark.btn-sm:hover{
        background: #999999;
    }

    .btn.btn-outline-dark.btn-sm:focus{
        background: black;
        color: white;
        border: none;
    }
    
    .btn.btn-primary.btn-lg.btn-block{
        border-radius: 1px;
        background: black;
        border: none;
        margin-top: 100px;
    }
    .btn-macrophoto{
        text-align: left;  
        margin-left: 0;
        float: left;
        width: 100%;
        margin-bottom: 30px;
    }
    .btn-macrophoto img{  
        border-style: solid;
        border-width: 2px;
        cursor: pointer;
    }

    .description{
        text-align: left;
        border: solid 1px grey;  
        padding: 10px 10px;
        margin-bottom: 50px;
    }

    @media only screen and (max-width:768px){
        h1{
            padding-top: 20px;
            font-size: 18px;
        }

        h2{
            font-size: 18px;
            padding-top: 40px;
        }

        h3{
            font-size: 13px;
            padding-top: 20px;
        }
        .description{
            margin-bottom: 20px;
        }
    }

</style>
