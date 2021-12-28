//DOM 
const textArea=document.querySelector('textarea');
const tweetar=document.querySelector('button');
const feed=document.querySelector('.li-section')
//PEGAR TWEET
function imprimirTweet(event){
    event.preventDefault();
    const tweet = textArea.value;
    //chama função com parametro do elemento textArea
    criarTweet(tweet);
}

//EVENTO AO CLICAR NO BOTAO,PEGAR TWEET
tweetar.addEventListener('click',imprimirTweet);

//CRIAR TWEET
function criarTweet(tweet){
    //obter hora e data
    let data=new Date()
    let hora=data.getHours()
    let min=data.getMinutes()

    //objeto com dados
    const tweetCompleto={
        nome:'Denise',
        foto:'C:\Users\Jobs\Pictures\projeto_control-c\entrepreneur-g5e6c17df5_640.jpg',
        usuario:' @denise-rodrig',
        texto:tweet,
        tempo: hora +':' + min
    }
    //chamar função com parametro do objeto
    listarT(tweetCompleto);
};

//Listagem de tweets
function listarT(tweetCompleto){
    //desjuntar atributos do objeto
    const{nome,foto,usuario,texto,tempo}=tweetCompleto;

    //CRIANDO ELEMENTOS HTML PARA TEMPLATE,SEUS ATRIBUTOS E CLASSES
    let li=document.createElement('li');
    li.classList.add('.li-section')
    let img=document.createElement('img');
    img.classList.add('.img')
    img.innerText=foto
    let div=document.createElement('div');
    div.classList.add('.divv')
    let h2=document.createElement('h2');
    h2.innerText=nome
    let span=document.createElement('span');
    span.innerText=usuario+ ":" +tempo
    let p=document.createElement('p');
    p.innerText=texto
    
    //ADD ELEMENTOS DENTRO DA DIV
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)
    //ADD ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)

    //....
    feed.appendChild(li)
    console.log(feed)

    
}

