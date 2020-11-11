console.log("Funziona sta merda di JS", Vue);

const app = new Vue({
    el: '#app',
    data:{
        // indice della foto
        indexPhoto: 0,
        //array di foto
        photos: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg'
        ]

        
        
    },

    methods: {
        //la funzione passa all' immagine successiva
        nextPhoto(){
            this.indexPhoto ++;

            if(this.indexPhoto > (this.photos.length - 1) ){
                this.indexPhoto = 0;
            }
        }
    }
});