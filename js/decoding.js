/**
 * type de protocole de reception de donnee recu par iot
 * 1er valeur   :nom IOT
 * 2eme valeur  :nombre de capteurs
 * 3eme valeur  :nom capteur
 * 4eme valeur  :valeur capteur
 * etc...
 * dermiere valeur : cle de verification
 * la cle de vérification est le modulo 100 de la longeur total
 * cle comprise un + est ajouté avant la valeur
 *  */ 


var data = "5E:FF:56:A2:AF:15*3*lum*200*mouv*1*temp*27*+46";
var objJson ={"name": "" , "data" : []};

// let foo = data.length;s
var fooTemp ="";
var fooData ="";
var verifData;
var autoriz = false;

// recuperation de la cle de verification
verifData = (data.charAt(data.length-2))+(data.charAt(data.length-1));
let cpt=0;
let boolData = false;
let cptData = 0;

if(verifData == data.length){ // verification de la longueur de data avec la cle
    for(let i=0; i<data.length; i++){
        if(data.charAt(i)== "+"){
            break;
        }
        if(data.charAt(i) == "*"){
            fooData =fooTemp;
            switch(cpt){
                case 0: // nom IOT
                    objJson.name = fooData;
                    cpt++;
                    break;
                case 1: // nombre de capteur
                    nbData = parseInt(fooData);
                    
                    cpt++;
                    break;
                    case 2: // increment nom/valeur capteur
                        if(cptData < nbData){
                            if(boolData == true){
                                
                                objJson.data[cptData].val =  parseInt(fooData);
                                cptData++;  // increment du cpt de tableau de capteur
                            }else{
                                objJson.data[cptData] = new Object();
                                objJson.data[cptData].name = fooData;
                            }
                            // objJson.data[cptData]
                            boolData = !boolData;
                        }
                        break;   
                    }    
                    fooTemp = "";
                }else{
                    fooTemp += data.charAt(i);
                }
                
            }
            
        }
        


console.log("objJson : " + JSON.stringify(objJson));