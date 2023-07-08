


// 함수 만들기
// 응용 코드 작성하기
// tab ui 만들기



// css의 정보를 가져오는 함수  get...
// css의 값을 입력해주는 함수  set...




// ELEMENT
// const h1 = document.querySelector('h1');

// console.log( getComputedStyle(h1)['margin'] );

// 함수 만들때 꿀팁 : 실행부를 작성

const syntaxError = message => {throw new SyntaxError(message)};

// function syntaxError(message){
  // throw new SyntaxError(message);
// }

// getNode(node)

function $(node){
  if(typeof node === 'string'){
    node = document.querySelector(node);
  }
  return node;
}

function getCss(node,prop){
  
  if(!node) syntaxError('getCss함수의 node는 필수 입력값 입니다.')
  
  if(typeof node === 'string'){
    node = $(node);
  }

  if(typeof prop !== 'string'){
    syntaxError('getCss함수의 prop은 string 타입 이어야 합니다.');
  }
  
  if(!(prop in document.body.style)){
    syntaxError('getCss함수의 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node)[prop];
}


const result = getCss('h1','font-size');



// setCss(node:string, prop:string, value:string) : void

console.log( result );


// getCss(node: string, prop: string):string

// node의 값을 문자로 받을 경우

// node가 없을 경우

// prop의 값이 string이 아닐 경우 

// prop의 값이 style의 속성이 아닐 경우





























