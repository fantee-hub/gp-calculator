//add more courses
document.getElementById('add-course').addEventListener('click',function(e){

 const addCourse=document.querySelector('.column1');
 const addCourseUnit=document.querySelector('.column2');
 const addGrade=document.querySelector('.column3');

 // create new text element for course code
 const newInput1=document.createElement('INPUT');
 newInput1.setAttribute('type','text');
 newInput1.setAttribute('placeholder','Enter Course')
 newInput1.id='course-4';
 const container=document.querySelector('.column1');
 const spanCont1=document.getElementById('courseSpan');
 container.insertBefore(newInput1,spanCont1)


 addCourse.appendChild(newInput1);
// create new text element for course unit
 const newInput2=document.createElement('INPUT');
 newInput2.setAttribute('type','number');
 newInput2.setAttribute('placeholder','Enter Unit')
 newInput2.id='course-4';
 newInput2.className='units';
 addCourseUnit.appendChild(newInput2);
 //create new text element for grade
 const newInput3=document.createElement('INPUT');
 newInput3.setAttribute('type','text');
 newInput3.setAttribute('placeholder','Enter Grade')
 newInput3.id='course-4';
 newInput3.className='grades'
 addGrade.appendChild(newInput3);

  e.preventDefault();
});


// calculate gp
document.getElementById('calculate-grade').addEventListener('click',function(e){
  // hide result
  document.getElementById('result').style.display='none'

  //show loadeer
  document.querySelector('.loader').style.display='block'

  setTimeout(calculateGrade,2000);

  e.preventDefault();

});

function calculateGrade(){

  const units=document.querySelectorAll('.units');
  const arr=[];
  let sum=0;
  let total=0;
  let gradeUnitSum=0;
  for(let i=0; i<units.length; i++){
    arr.push(parseInt(units[i].value));
    const unitValue=parseInt(units[i].value);
    sum= sum + unitValue;
  }
  console.log(sum)

  const gradeList=document.querySelectorAll('.grades');
  // create an empty array for grade

  const gradeArr=[];
  for(let i=0; i<gradeList.length; i++){
    gradeArr.push(gradeList[i].value); 
    console.log(gradeList[i].value);

  gradeArr[i]=checkGrades(gradeList[i].value.toUpperCase());
  }

  const length=gradeArr.length || arr.length;

  for (let i=0; i<length; i++){
    total += arr[i] * gradeArr[i];
    gradeUnitSum=gradeUnitSum + total;
  }
  console.log(gradeUnitSum)
  console.log(total);

 
  
  const gpGrade=parseFloat((total / sum).toFixed(2));
  console.log(gpGrade);


  if(isNaN(gpGrade)===true){
    alert(`please fill in the fields`);

  }
  
 const result = document.getElementById('result');
  result.textContent=`Your Grade Point Is: ${gpGrade}`
// show result
  document.getElementById('result').style.display='block';
  //hide spiner
  document.querySelector('.loader').style.display='none'
  
  console.log(gradeArr)
  console.log(arr);
  
}

function checkGrades(grade){
 switch(grade){
   case 'A':
     grade=5;
     return grade;
   case 'B':
     grade=4;
     return grade;
   case 'C':
     grade=3;
     return grade;
   case 'D':
     grade=2;
     return grade;
   case 'E':
     grade=1;
     return grade;
   case 'F':
     grade=0;
     return grade;
 }
}

