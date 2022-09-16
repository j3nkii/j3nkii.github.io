$(ready)
function ready(){
    $(document).on('submit' ,'#calcForm', calculator);
}

function calculator(event){
    event.preventDefault();
    let equation = $('#calcInput').val();
    let parsedEquation = unString(equation)

    $('#calcInput').val(equates(parsedEquation))
}


        //used to validate equation before running through functions.
    // if(!isNaN(Number(str))) return str
    // let reggieVal = /^(?:-?\d*\.?\d+ ?[\+\-\*\/] ?){1,}-?\d*\.?\d+$/gm //validating equation
    // if(!reggieVal.test(str) && !/\d.*/.test(str)){
    //     return "try again"
    // }
    // let arr = str.replace(/([*|\/|\-|+])/gm, ' $1 ').split(' ');



//COMBINE THE LOOPS
function equates(arr){
    let leftP = 0;
    let leftPIndex = -1;
    let rightPIndex = -1;
    for(let i in arr){
        if(arr[i] === '('){
            leftP++
            if(leftPIndex < 0){
                leftPIndex = i;
            }
        } else if(arr[i] === ')'){
            leftP--
            if(rightPIndex < 0){
                rightPIndex = i;
            }
            if(leftP === 0){
                return equates()
            }
        }
    }
    
    for(let i in arr){
        if(arr[i] === '/' || arr[i] === '*'){
            if(arr[i] === '*'){
                arr.splice(i - 1, 3, arr[i - 1] * arr[Number(i) + 1])
                return equates(arr)
            } else if(arr[i] === '/'){
                arr.splice(i - 1, 3, arr[i - 1] / arr[Number(i) + 1])
                return equates(arr)
            } 
        }
    }

    for(let i in arr){
        if(arr[i] === '+' || arr[i] === '-'){
            if(arr[i] === '+'){
                arr.splice(i - 1, 3, Number(arr[i - 1]) + Number(arr[Number(i) + 1]))
                return equates(arr)
            } else {
                arr.splice(i - 1, 3, arr[i - 1] - arr[Number(i) + 1])
                return equates(arr)
            }
        }
    }
    return arr
}



//used to parse string into usable equation
function unString(str){
    let arr = [];
    console.log('butt')
    while(str.length > 0){
        //group operator ahead of Negnum along with Negnum
        if(/^([\(\)\^+\-\*\/])(\-\d*.?\d+)/.test(str)){
            console.log('minus negative')
            arr.push(str.replace(/^([\(\)\^+\-\*\/])(\-\d*.?\d+)/, '$1'), Number(str.replace(/^([\(\)\^+\-\*\/])(\-\d*.?\d+)/, '$2')));
            str = str.replace(/^[\(\)\^+\-\*\/]\-\d*.?\d+(.*)/, '$1');
        }else if(/^([\(\)\^+\-\*\/])/.test(str)){
            //console.log('operator')
            arr.push(str.replace(/^([\(\)\^+\-\*\/]).*/, '$1'));
            str = str.replace(/^[\(\)\^+\-\*\/](.*)/, '$1');
        }else if(/^(-?\d*\.?\d+)/.test(str)){
            //console.log('digit')
            arr.push(Number(str.replace(/^(-?\d*\.?\d+).*/, '$1')));
            str = str.replace(/^-?\d*\.?\d+(.*)/, '$1');
            //str = str.slice(arr[0, arr.length - 1]);
        } 
    }
    return arr;
}