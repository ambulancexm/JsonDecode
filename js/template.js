var capt =[ {"name" : "ard1", "data" : [ {"name" : "lum", "val" : 127}, {"name" : "mouv", "val" : 23}]  },
            {"name" : "ard2", "data" : [ {"name" : "lum", "val" : 400}, {"name" : "mouv", "val" : 50},{"name" : "temp", "val" : 27}]},
            {"name" : "ard3", "data" : [  {"name" : "mouv", "val" : 90},{"name" : "temp", "val" : -2}]  }
];

var cellule =``;
var ligne = ``;


capt.forEach(function(item){
    
    item.data.forEach(function(data){
        cellule += `
        
        <button type="button" class="btn btn-secondary border : 1px text-align:center">
        <img style='float: left; width: 15px; height: 15px; text-align:center display:block' src='./img/thermometre.jpeg' />
        ${data.name}`+ " | " +`${data.val}</button>
                        
                        `
    });
    ligne +=     `
        <tr>
        <th scope="row" style="line-height:70px; width:50px;border : 1px solid #000000;text-align:center;">${item.name}</th>
        <td class="btn-group" role="group" aria-label="Basic example" style="line-height:50px; line-width:80px" >
            ${cellule} 
        </td>
        </tr>
    `
    cellule =``;
});


var tableau =`<table class="table" >
            <thead class="thead-dark">
                <tr>
                    <th scope="col" class="btn btn-primary btn-lg"   >capteur</th>
                    
                </tr>
            </thead>
                <tbody id="tableau">
                    ${ligne}
                </tbody>
            </table>
            `
// console.log(tableau);
$(document).ready(function($){
        
        $('#list').append(tableau);
        
});


