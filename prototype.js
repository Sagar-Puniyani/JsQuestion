let Myname = "SagarPuniyani       ";

// string 
const superHero = [ 'hulk' ,'thor' , 'shaktiman'];

// object (key value pair )
const superpower = {
    hulk : "Anger",
    thor : "Hammer",
    shaktiman : "5 element of life ",


    // Attaching the function 
    checkhulkPower : function(){
        console.log(`Power of Hulk is ${this.hulk}`);
    }
}

// Attaching the power to the object 
Object.prototype.sagar = function(){
    console.log(`Sagar is present in all`);
}


// Array injecttion 

Array.prototype.heySagar = function(){
    console.log(`sagar is present in Array also `);
}


Myname.sagar()
superHero.sagar()
superHero.heySagar()
superpower.sagar()