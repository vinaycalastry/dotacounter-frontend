new Vue({
    el: '#dotaCounterApp',
    data: {
        badAgainstHeroes: [],
        goodAgainstHeroes: [],
        worksWellWithHeroes:[],
        success:false,
        nodata: false
    },
    methods:{
        searchhero: function(){
            axios.get('https://dotacounter-backend.herokuapp.com/dotacounter/'+this.$refs.heroname.value).then(
                (response) => {              
                    var heroes = response.data;    
                    this.badAgainstHeroes = heroes["Bad Against"];
                    this.goodAgainstHeroes = heroes["Good Against"];
                    this.worksWellWithHeroes = heroes["Works Well With"];
                    this.success = true;
                    this.nodata = false;                         
                }
            ).catch(
                (error)=>{
                    if(error.response.status === 422){
                        this.nodata = true;
                        this.success = false;
                    }
                    else{
                        this.nodata = false;
                        this.success = false;
                    }                    
                }
            );
        }
    }
});