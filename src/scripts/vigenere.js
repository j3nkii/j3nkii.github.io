let ceasarText = `I created the ceasarCipher after my first few weeks learning JavaScript, and is still one of my favorite projects. I used the ASCII values assosciated with each character in the alphabet to rotate them however many times based on the input given from the user. Mainly it just feels cool to say I made an encryption device, even though its probably the most primitive one to use.`
$(ready);
function ready(){
    $(document).on('click' ,'#ceasarCipher', vigenere);
    $(document).on('click' ,'#ceasarReset', reset);
    $('#ceasarMessage').text(ceasarText);
}
function reset(event){
    event.preventDefault();
    $('#ceasarMessage').text(ceasarText);
}

function vigenere(event,  message = $('#ceasarMessage').text(), enc = $(ceasarInput).val(), dec){
    console.log(message.split(''))
    event.preventDefault();
    let encrypted = [];
    const alpha = {
        a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
    };
    const alphaArr = [
        'z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'
    ];
    let encoder = enc.toLowerCase().split('');
    let index = 0;
    while(message[index]){
      // if dec "decrypt" is true, reverse the shift
        let shifted = dec 
            ? alphaArr[(alpha[message[index].toLowerCase()] - alpha[encoder[index % encoder.length]]) % 26]
            : alphaArr[(alpha[message[index].toLowerCase()] + alpha[encoder[index % encoder.length]]) % 26]
        if(!/\w/.test(message[index])){
            encrypted.push(message[index])
        } else if(message[index].charCodeAt(0) >= 97){
            encrypted.push(shifted)
        } else {
            encrypted.push(shifted.toUpperCase())
        }
        index++;
    }
    $('#ceasarMessage').text(encrypted.join(''));
    // return encrypted.join('');
}