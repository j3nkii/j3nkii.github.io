let ceasarText;
$(ready);
function ready(){
    $(document).on('click' ,'#ceasarCipher', rot);
    $(document).on('click' ,'#ceasarReset', reset);
    ceasarText = $('#ceasarMessage').text();
}
function reset(event){
    event.preventDefault();
    $('#ceasarMessage').text(ceasarText);
}

function rot(event, message = $('#ceasarMessage').text(), number = $(ceasarInput).val()) {
    event.preventDefault();
    let coded = [];
    let converted = '';
    number %= 26;
    if(number < 0){
        number = 26 - Math.abs(number);
    } 
    for(let index in message) {
        coded.push(message.charCodeAt(index));
        let ascii = coded[index]
        if(ascii < 65 || (ascii > 90 && ascii < 97) || ascii > 122){
            converted+= String.fromCharCode(ascii);
        }else if(ascii >= 65 && ascii <= 90){
            ascii+=parseInt(number);
            converted += ascii >= 65 && ascii <= 90
                ? String.fromCharCode(ascii)
                : String.fromCharCode(ascii - 26) 
        } else if(ascii >= 97 && ascii <= 122){
            ascii+=parseInt(number);
            converted += ascii >= 97 && ascii <= 122 
                ? String.fromCharCode(ascii)
                : String.fromCharCode(ascii - 26) 
        }
    }
    $('#ceasarMessage').text(converted);
}