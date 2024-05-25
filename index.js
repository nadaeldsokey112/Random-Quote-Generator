var arrayQoutes=[
    {'author': '--Oscar Wilde--', 
    'quote': 'Be yourself; everyone else is already taken.'
},
{'author': '--Marcus Tullius Cicero--', 
'quote': 'A room without books is like a body without a soul'
},
{'author': '--Mae West--', 
'quote': 'You only live once, but if you do it right, once is enough.'
},

{'author': '--Mark Twain --', 
'quote': 'If you tell the truth, you dont have to remember anything.'
},
{'author': '--Elbert Hubbard--', 
'quote': 'A friend is someone who knows all about you and still loves you..'
},
{'author': '--Mark Twain --', 
'quote': 'Live as if you were to die tomorrow. Learn as if you were to live forever..'
},
{'author': '-- Friedrich Nietzsche--', 
'quote': 'Without music, life would be a mistake.'
},
];

function addQoute(){
    var random=Number.parseInt(Math.random()*arrayQoutes.length +1);
    document.querySelector('#outputQoute').textContent = `\"${arrayQoutes[random].quote}\"`;
    document.querySelector('#outputAuthor').textContent = `--${arrayQoutes[random].author}`;
   
}