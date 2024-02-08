import React,{useState} from 'react'



function Bmi() {

    const[weight, Setweight] = useState('') 
    const[Height, SetHeight] = useState('') 
    const[bmi,Setbmi] = useState('')
     const[bmiHealth, SetbmiHealth] = useState('') 
  
  
  // function inputaddH(v) {
  //   const h = SetHeight(e.target.value)
  //   // console.log(Height);
    
  // }
  // function inputaddW(v) { 
  //   const w = Setweight(e.target.value)
  //   // console.log(weight); 
    
  
  
  function aa(e){
       e.preventDefault();
       //Setbmi(weight/((Height*Height)/10000).toFixed(1)) // promlam kar rhaa thaa
        // Check if height and weight are not empty
      if (Height === 0 || weight === 0) {
        console.log("Please enter valid values for height and weight.");
        
      } else{
      }
        let BMI = weight/((Height*Height)/10000)
      Setbmi(BMI.toFixed(1))
  
  
  
     
  if(BMI <= 18.5) {
    SetbmiHealth("Underweight")
    console.log("Underweight")
  }
  else if (BMI > 18.5 && BMI <=25.0 ){
    SetbmiHealth("Normal")
    console.log("Normal");
  }
  else if (BMI > 25){
    SetbmiHealth("Overweight")
    console.log("Overweight");
  }
  else{
    SetbmiHealth("Invalid value")
    console.log("Invalid value");
  }
  
  }

  
  return (
    <div className="  p-4 text-white bg-BMIbg bg-no-repeat">
    <div className=" py-8 lg:pl-20">
      <p className=' font-bold text-5xl lg:text-5xl'>Let's Calculate Your <span className='text-gold'>BMI</span></p>
      <p className='text-[16px] text-[#a1a1a1]'>Easily determine your body mass index with our accurate calculation tool.</p>
      <div className=" flex gap-3 py-6 ">

        <div className=" w-full lg:w-56">
       <input type="text"
       placeholder='Weight / kg'
       className=' p-2 focus:outline-none mb-2 w-full text-[#fff] border-2 bg-transparent'

      value={weight}
      onChange={(e)=>Setweight(e.target.value)}
       />
       <p>Your BMI is : <span className='text-gold font-medium'>{bmi}</span></p>
        </div>
        <div className=" w-full lg:w-56">
       <input type="text"
       className=' text-text1 border-2 p-2 focus:outline-none mb-2 w-full bg-transparent'
       placeholder='Height / cm'
       value={Height}
       onChange={(e)=>SetHeight(e.target.value)}
       />
        <p>Your weight is : <span className='text-gold font-medium'>{bmiHealth}</span></p>
        </div>

      </div>
      <button
      onClick={aa}
      className=' border-2 p-2'
      > CALCULATE </button>
    </div>
  </div>
  )
}

export default Bmi