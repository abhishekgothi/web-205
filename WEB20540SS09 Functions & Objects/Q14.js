
    let sentenceBuilder={
        subject:"I",
        verb:"am",
        object:"coding",
        buildSentence: function(){
            if(this.subject=="" || this.verb== "" || this.object==""){
                return "Incomplete sentence";
            }
            else return this.subject+" "+this.verb+" "+this.object;
        },
        updateProperty: function(property,value){
            for(let key in this){
                if(property===key) return this[property]=value;
            }
           return "Invalid property"
        }

    }
    sentenceBuilder.updateProperty("object","Practiceobj");
    console.log(sentenceBuilder)
    