
//1.new Date()-

let date = new Date()
console.log (date)

//2.Date.parse()-

let date1 = "january 20,2020"
let a = Date.parse(date1);
console.log(a);

//3.Date.UTC()-

let date2= Date.UTC(2020, 1, 20);
console.log(date2);

//4. getDate()-

let date3=new Date().getDate();
console.log(date3);

//5. getMonth()-

let date4=new Date().getMonth();
console.log(date4);

//6. getFullYear()-

let date5=new Date().getFullYear();
console.log(date5);

//7.getDay()-

let date6=new Date().getDay();
console.log(date6);

//8.getHours() -

let date7=new Date().getHours();
console.log(date7);

//9.getMinutes() -

let date8=new Date().getMinutes();
console.log(date8);

//10.getSeconds() -

let date9=new Date().getSeconds();
console.log(date9);

//11.getMilliSeconds() -

let date10=new Date().getMilliseconds();
console.log(date10);

//12.setDate() -

let date11=new Date().setDate(10);
console.log(new Date(date11));

//13.setMonth() -

let date12=new Date().setMonth(5);
console.log(new Date(date12));

//14.setFullYear()-

let date13=new Date().setFullYear(2020);
console.log(new Date(date13));

//15.  setHours()-

let date14=new Date().setHours(12);
console.log(new Date(date14));

//16.setMinutes() -

let date15=new Date().setMinutes(30);
console.log(new Date(date15));

//17.setSeconds() -

let date16=new Date().setSeconds(30);
console.log(new Date(date16));

//18. setMilliseconds() -

let date17=new Date().setMilliseconds(60);
console.log(new Date(date17));

//19. todateString()-

let date18=new Date().toDateString();
console.log(date18);

//20. toLocaleDateString() -

let date19=new Date().toLocaleDateString();
console.log(date19);

//21.toTimeString() -

let date20=new Date().toTimeString();
console.log(date20);

//22.toLocaleTimeString() -

let date21=new Date().toLocaleTimeString();
console.log(date21);

//      UTC DATE METHODS

//23.getUTCdate() -

let date22=new Date().getUTCDate();
console.log(date22);

//24.getUTCDay()-

let date23=new Date().getUTCDay();
console.log(date23);

//25. getUTCFullYear()-

let date24=new Date().getUTCFullYear();
console.log(date24);

//26. getUTCHours() -

let date25=new Date().getUTCHours();
console.log(date25);

//27.getUTCMinutes() -

let date26=new Date().getUTCMinutes();
console.log(date26);

//28. getUTCSeconds()-

let date27=new Date().getUTCSeconds();
console.log(date27);

//29.get UTCMilliseconds() -

let date28=new Date().getUTCMilliseconds();
console.log(date28);

//30.setUTCDate()-

let date29=new Date().setUTCDate(20);
console.log(new Date(date29));

//31.setUTCFullYear() -

let date30=new Date().setUTCFullYear(2012);
console.log(new Date(date30));

//32. setUTCHours() -

let date31=new Date().setUTCHours(10);
console.log(new Date(date31));

//33.setUTCMinutes() -

let date32=new Date().setUTCMinutes(20);
console.log(new Date(date32));

//34.setUTCSeconds()-

let date33=new Date().setUTCSeconds(45);
console.log(new Date(date33));

//35.setUTCMilliseconds() -

let date34=new Date().setUTCMilliseconds(50);
console.log(new Date(date34));


