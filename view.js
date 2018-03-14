let $ = require('jquery')  // jQuery now loaded and assigned to $
let Redux = require('redux');

const setting = (state = 0 , actions) => {
    // let {    
    //     lotSize = "" ,
    //     sell = [{units = "" , price : ""} , {units = "" , price : ""} , {units = "" , price : ""} ] ,
    //     buy = [{units = "" , price : ""} , {units = "" , price : ""} , {units = "" , price : ""} ]
    // } = actions ; 
    switch (actions.type) {
        case 'CHANGE_SETTINGS':
            return Object.assign({},state , {newObj : newObj})    
            break;
        default: return state;
            break;
    }
}

const store = Redux.createStore(setting);

$('#btn').on('click', () => {
    
    newObj = newSettings();
    // console.log(newObj);
    if(newObj) {
        store.dispatch({type :'CHANGE_SETTINGS' , newObj :  newObj});
        alert("Settings Changed Successfully!")
        console.log(store.getState());
    }
})

newSettings = () =>  {
    let block_size = document.querySelector("#blockSizeInput").value;
    let sellUnit1 = document.querySelector("#sellUnit1").value;
    let sellPrice1 = document.querySelector("#sellPrice1").value;
    let sellUnit2 = document.querySelector("#sellUnit2").value;
    let sellPrice2 = document.querySelector("#sellPrice2").value;
    let sellUnit3 = document.querySelector("#sellUnit3").value;
    let sellPrice3 = document.querySelector("#sellPrice3").value;
    //===============================================================
    let buyUnit1 = document.querySelector("#buyUnit1").value;
    let buyPrice1 = document.querySelector("#buyPrice1").value;
    let buyUnit2 = document.querySelector("#buyUnit2").value;
    let buyPrice2 = document.querySelector("#buyPrice2").value;
    let buyUnit3 = document.querySelector("#buyUnit3").value;
    let buyPrice3 = document.querySelector("#buyPrice3").value;
    if(sellUnit2 > sellUnit1 && sellUnit3 > sellUnit2) {
        const obj = {
            lotSize : block_size ,
            sell : [{units : sellUnit1 , price : sellPrice1} ,{units : sellUnit2 , price : sellPrice2} , {units : sellUnit3 , price : sellPrice3}],
            buy : [{units : buyUnit1 , price : buyPrice1} ,{units : buyUnit2 , price : buyPrice2} , {units : buyUnit3 , price : buyPrice3}]
        }
        return obj ;
    }
    alert('Please Enter Correct Values')
} 