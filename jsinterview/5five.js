const member = {
    fullname : "Member",
    SayName : function(){
        console.log(this.fullname)
    }
}

const sagar = {
    fullname : "Sagar",
    SayName : function(){
        console.log(this.fullname)
        return 457;
    }
}

sagar.SayName.call(member);

setTimeout(sagar.SayName.bind(sagar) ,3000)

var a = sagar.SayName()