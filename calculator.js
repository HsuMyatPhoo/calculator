// date and time 


let datetime=document.querySelector('.datetime');
let dayd = document.querySelector('.day')

let date=new Date();
let day=date.getDate();
let year=date.getFullYear();
let month=date.getMonth() +1;
// console.log(month,day,year);
// console.log(typeof month);=>number

datetime.textContent=`${month}/${day}/${year}`;

let dayname=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let d=date.getDay();
// console.log(dayname[d]);

dayd.textContent = dayname[d];



let display,screen,num1,num2,sign,result;
let ans;
let arr=[];
let click=document.body;
click.addEventListener('click',getnum);

function getnum(e){
    ch=e.target.value;
    // console.log(ch);

    // number display 
    let lastch;
   
    if(e.target.className == 'cal' || e.target.className == 'nums'){
        

        if(display){           
            lastch=display[display.length - 1];
            
            if(lastch !='+' || lastch !='-' || lastch !='*' || lastch !="/" || lastch !='%'){
                display +=e.target.value;
                console.log(display.length);
                console.log('last character is '+lastch);
           }
        
            
        }else{
            // console.log('false');
            console.log( typeof e.target.className);
            
            if(e.target.className =="cal" || e.target.className == 'comma' ){
                // console.log(true);
                
            }else{
                if(e.target.value == '.'){
                    display = "0."
                }else{
                    console.log(false);
                    display=e.target.value;
                    console.log( typeof display);
                }
               
            }
        }
    }
    screen=document.querySelector('.num');
    screen.textContent=display;
  

// Setting num1,num2,sign 
    if(e.target.className =='cal' ){
        if(lastch !='+' || lastch !='-' || lastch !='*' || lastch !="/" || lastch !='%'){
            sign=ch;
            // console.log("this is sign "+sign);
        }
    }else if(e.target.className == 'nums'){

        if( display.includes('+') || display.includes('-') || display.includes('*') || display.includes('/') || display.includes('%')){
            if(num2){
                num2 +=ch;
            }else{
                num2=ch;
            }
            // console.log("this is num2 " +num2)
        }else{
            if(num1){
                 num1 +=ch;
            }else{
                num1 = ch;
            }
        }
            // console.log("this is num1 " +num1)
    }
}


        
// For answer

function answer(){
    // console.log('Hello this is answer');
    ans=document.querySelector('.result');
    // console.log(ans);
    calculation(num1,num2,sign);
    ans.textContent=result;
    // console.log(ans);
}

function calculation(num1,num2,sign){
    switch(sign){
        case '+':
            result=Number(num1) + Number(num2);
        break;
        case '-': 
           result=num1 - num2;
        break;
        case '*':
            result=num1 * num2;
        break;
        case '/':
            result=num1 / num2;
            // result=parseInt(num1 / num2);
        break;
        case '%':
            result=num1 % num2;
        break;
        default:
            // console.log(typeof num1);
            // console.log(typeof num2);
            // console.log(typeof sign);
        
    }
}




// For Delete 

function Delete(){
    // console.log('Hello I am delete function');
    let a=0
    ,b =0;

    if(display){  
        a=display.length;
        console.log(a);

        display=display.substr(0,a-1);
        console.log(display); 
    }
    if(result){
        let str=0;
        str=result.toString();
        // console.log(typeof str);
        // console.log(str);
        b=str.length;
        console.log(b);
        ans.textContent ="";

    }

    if(num2){
        // console.log(num2.length);
        num2=num2.substr(0,num2.length-1);
        // console.log('num2 is '+num2);

    }else if(sign){
        sign="";
        // console.log('sign is'+sign);
    }else if(num1){
        num1=num1.substr(0,num1.length-1);
        // console.log('num1 is '+num1);
    }
    
    

}



// For all clear 

function AC(){
    // console.log("I am AC");
    
    if(display){
        display="";
    }
    
    if(result){
        ans.textContent ="";
    }


    if(num1){
        num1 ="";
    }
    if(num2){
        num2 ="";
    }
    if(sign){
        sign ="";
    }
}






console.log(document.button);
