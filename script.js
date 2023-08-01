function dictionary(word){
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8619312b4dmsh59c022a1e61b3f0p15b1c5jsn8555b9ea549a',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url,options)
.then(response=>response.json())
.then((response)=> {
    console.log(response);
    document.getElementById('word').innerHTML=response.word;
    document.getElementById('def').innerHTML=response.definition;
})
.catch(err=>console.log(error))
}

let btn=document.getElementById('searchBtn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let data=document.getElementById('searchWord');
    dictionary(data.value);
})
