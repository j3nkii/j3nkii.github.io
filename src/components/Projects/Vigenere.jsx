import { useState } from 'react';

export const Vigenere = () => {
    const initialMessage = 'I thought this one was super fun, it actually started from a code wars Kata base off of the ceasar cipher!'
    const [message, setMessage] = useState(initialMessage);
    // const [encryptedMessage, setEncryptedMessage] = useState('');
    const [encryptionCode, setEncryptionCode] = useState('');

    function reset(event){
        event.preventDefault();
        setMessage('')
    }

    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    function vigenere(event, dec){
        // console.log(message.split(''))
        event.preventDefault();
        let encrypted = [];
        const alpha = {
            a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
        };
        const alphaArr = [
            'z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y'
        ];
        let encoder = encryptionCode.toLowerCase().split('');
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
        setMessage(encrypted.join(''))
        // $('#ceasarMessage').text(encrypted.join(''));
        // return encrypted.join('');
    }

    return (
        <div className="projectContainer">
            <h3>Vigenere Cipher</h3>
            <p id="vigenere-message">
                The Vigenere Cipher is based on the Ceasar Cipher, in that it rotates a letter based on the value of another letter, 
                except the Vigenere uses multiple values to encode the message!
            </p>
            <form id="cipher">
                <textarea onChange={e => handleMessage(e)} id="ceasarInput" type="textarea" cols="40" rows="5" value={message}></textarea>
                <input id='vigenere-encoder' onChange={e => setEncryptionCode(e.target.value)} value={encryptionCode}></input>
                <button onClick={e => vigenere(e, false)} id="ceasarCipher">E N C R Y P T</button>
                <button onClick={e => vigenere(e, true)} id="ceasarCipher">D E C R Y P T</button>
                <button onClick={reset} id="ceasarReset">R E S E T</button>
            </form>
            <p className="projectLink"><a href="https://github.com/j3nkii/ceasarCipher">GitHubRepo</a></p>
            <p className="projectLink"><a href="https://j3nkii.github.io/ceasarCipher/">Deployment</a></p>
        </div>
    )
}