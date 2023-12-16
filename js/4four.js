var fullname = "Sagar Puniyani";

var OnObj = {

    fullname : "Hacked Name",
    prop : {
        fullname : "Inside Prop",
        getfullname : function (){
            return this.fullname
        }
    },

    getfullname : function () {
        return this.fullname;
    },

    getfullnamev2 : ()=> this.fullname,
    
    getfullnamev3 : (function(){
        return  fullname
    })()  // iife

};


console.log(OnObj.prop.getfullname())
console.log(OnObj.getfullname());
console.log(OnObj.getfullnamev2());
console.log(OnObj.getfullnamev3);