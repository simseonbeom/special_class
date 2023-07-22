


// 1.  debounce   


// function 호출 방식
// call(this,1,2,3,4) 
// apply (this,[1,2,3,4])
// bind (this,1,2,3,4)  실행 x



function sum(a,b,c){
  console.log(this);
  console.log(a,b,c);
}


const user = {
  name:'tiger',
  age:32
}



// sum.call(user,10,100,1000)
sum.apply(user,[{nickName:'kindtiger'}])


const newSum = sum.bind(user,[10]);



newSum()







function debounce(callback,limit = 100){

  let timeout;

  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this,args);
    }, limit);
  }
}



// window.addEventListener('resize',debounce((e)=>{

//   this e
//   console.log( e );
//   // this
// },1000))




// 2. throttle





function throttle(callback,limit = 100){

  let waiting = false;
  return function(){
    if(!waiting){
      callback.apply(this,arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
  
}






// window.addEventListener('resize',throttle((e)=>{

//   console.log( e.type );
// },1000))





// window.addEventListener('resize',(e)=>{
//   console.log( e.type );
// })













// 2. toDoList =>  localStorage





