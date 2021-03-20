var path = "img/"
var app = new Vue ({
        el: '#root',
        data: {
            images: [
                'image1.jpeg',
                'image2.jpeg',
                'image3.jpeg',
                'image4.jpeg'
            ],
            counter: 0
        },

        methods: {
            scorreAvanti: function() {
                if (this.counter>=this.images.length-1){
                    return this.counter = 0;
                }
                return this.counter ++;
            },

            scorreIndietro: function() {
                if(this.counter<=0){
                    return this.counter= this.images.length-1;
                }
                return this.counter --;
            }
        }
});



