let count_el = document.getElementById("count-el");
let count= 0;
let previous_enteries = document.getElementById("previous_enteries_numbers");
let previous_enteries_array = [];
let total_enteries = document.getElementById("total_enteries_numbers");
let sum = 0;

function increment(){
    count += 1;
    count_el.innerText = count;
}

function decrement(){
    if(count_el.innerText>0){
        count -= 1;
        count_el.innerText = count;
    }
}

function save(){

    if(count_el.innerText>0){
        previous_enteries_array.unshift(count);
        sum += count;
        previous_enteries.innerText = previous_enteries_array;
        total_enteries.innerText = sum;
        count=0;
        count_el.innerText = count; 
    }
      

}

function reload(){
    count=0;
    count_el.innerText= count;
}