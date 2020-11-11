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
        ],
        intervalloId: 0
    },
    created(){
        console.log("created");
        this.inizioLoop();
    },

    methods: {
        //la funzione passa all' immagine successiva
        nextPhoto(){
            // incremento della foto di 1
            this.indexPhoto ++;

            if(this.indexPhoto > (this.photos.length - 1) ){
                this.indexPhoto = 0;
            }
        },

        prevPhoto(){
            // decremento la foto 
            this.indexPhoto--;

            if(this.indexPhoto < 0){
                this.indexPhoto = this.photos.length - 1;
            }
        },

        setPhoto(index){
            this.indexPhoto = index;
        },

        inizioLoop(){
            this.intervalloId = setInterval(()=>{
                this.nextPhoto();
            }, 3000);
        },

        // ferma il loop se il mouse è sopra lo slider
        fermaLoop(){
            clearInterval(this.intervalloId);
        }
    }
});