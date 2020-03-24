<template>
    <div>
        <ul>  
            <li>
                <img tabindex="1" v-on:click="changeFirstMainPhoto" class="thumbnail active" v-bind:src="thumbnails.url_1" autofocus>
            </li>
            <li>
                <img tabindex="1" v-on:click="changeSecondMainPhoto" class="thumbnail" v-bind:src="thumbnails.url_2">
            </li>
            <li>
                <img tabindex="1" v-on:click="changeThirdMainPhoto" class="thumbnail" v-bind:src="thumbnails.url_3">
            </li>
            <li>
                <img tabindex="1" v-on:click="changeFourthMainPhoto" class="thumbnail" v-bind:src="thumbnails.url_4">
            </li>
            <li>
                <img tabindex="1" v-on:click="changeFifthMainPhoto" class="thumbnail" v-bind:src="thumbnails.url_5">
            </li>
        </ul>
        <img class="main-photo img-fluid" v-bind:src="mainPhoto">
    </div>
</template>

<script>
    export default {
        name: 'MainPhotos',
        data() {
            return {
                mainPhoto: [],
                thumbnails: [
                    {url_1: ''},
                    {url_2: ''},
                    {url_3: ''},
                    {url_4: ''},
                    {url_5: ''}
                ]
            };
        },
        mounted: function () {
            const result = async () => {
                const response = await fetch("../../static/product.json");
                const data = await response.json();
                this.mainPhoto = data.images[0].baseUrl;
                this.thumbnails.url_1 = data.images[0].thumbnailUrl;
                this.thumbnails.url_2 = data.images[1].thumbnailUrl;
                this.thumbnails.url_3 = data.images[2].thumbnailUrl;
                this.thumbnails.url_4 = data.images[3].thumbnailUrl;
                this.thumbnails.url_5 = data.images[4].thumbnailUrl;
            };
            result();
        },
        methods: {
            changeFirstMainPhoto: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.mainPhoto = data.images[0].baseUrl;
                };
                result();
            },
            changeSecondMainPhoto: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.mainPhoto = data.images[1].baseUrl;
                };
                result();
            },
            changeThirdMainPhoto: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.mainPhoto = data.images[2].baseUrl;
                };
                result();
            },
            changeFourthMainPhoto: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.mainPhoto = data.images[3].baseUrl;
                };
                result();
            },
            changeFifthMainPhoto: function () {
                const result = async () => {
                    const response = await fetch("../../static/product.json");
                    const data = await response.json();
                    this.mainPhoto = data.images[4].baseUrl;
                };
                result();
            }
        }
    }
</script>

<style scoped>
    .main-photo{
        margin: 5px 5px;
    }

    .thumbnail{
        margin: 5px 5px;
    }

    li img{
        border: solid 1px lightgray;    
        cursor: pointer;
    }

    li img:hover{
        border: solid 1px darkgray;    
    }

    ul li img:focus{
        border: solid 1px black !important; 
        cursor: pointer;
    }

    ul{
        list-style: none;
        float:left;
        border:0px; 
        margin:0;
        padding:0;
    }

    @media only screen and (max-width:980px){
        ul{
            display: none;
        }
    }

</style>

