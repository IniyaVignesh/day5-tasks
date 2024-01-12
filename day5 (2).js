var a=[
    {
      "id": "15",
      "name": "shewag",
      "email": "sewah@yahoo.com"
    },
    {
      "id": "2",
      "name": "Sangethaa",
      "email": "sangethaa@yahoo.com"
    },
    {
      "id": "16",
      "name": "Farhana",
      "email": "farhana@yahoo.com"
    },
    {
      "id": "40",
      "name": "GOAT",
      "email": "Goat@gmail.com"
    },
    {
      "id": "33",
      "name": "Leela",
      "email": "leelavathi@gmail.com"
    },
    {
      "id": "99",
      "name": "pollard",
      "email": "pollard@gmail.com"
    },
    {
      "id": "0",
      "name": "Iniyavignesh",
      "email": "iniyavignesh12@gmail.com"
    },
    {
      "id": "12",
      "name": "davidwarner",
      "email": "david@gmail.com"
    },
    {
      "id": "9",
      "name": "stevesmith",
      "email": "stevesmith@gmail.com"
    },
    {
      "id": "7",
      "name": "Dhoni",
      "email": "dhoni@gmail.com"
    }];
    //1.  Using “for” loop:
 for(var i=0;i<a.length; i++){
 console.log(i,a[i].id, a[i].name, a[i].email)
 }
  
//2. Using “for of” loop:  
for(let i of a){
       console.log([i]);
  }

//3.Using “forEach”:
 a.forEach(n=> {
     console.log(n);
 });
//4.Using “for in”:
for(var i in a) {
 console.log(a[i])
 }

