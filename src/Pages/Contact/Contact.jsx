import React from 'react'

function Contact() {
  return (
    <section className='bg-bgColor1 pb-10'>
    {/* Background img */}
  <div className="bg-addpage bg-no-repeat  text-center">
  <div className="  h-[22rem]  bg-bgColor1/70  ">    
  <h1 className='pt-[16rem] text-[#fff] text-4xl font-semibold'>Contact Us</h1>   
  </div>
  </div>
{/* More data */}
<div className='py-10 flex justify-center lg:h-[70vh] text-gold'>
  <form>
    <label>Name</label>
    <br />
    <input type="text" placeholder='Your name' className='bg-transparent text-white border rounded-xl pl-3 my-2 outline-text1'/>
    <br />
    <label>Email</label>
    <br />
    <input type="text" placeholder='Your email' className='bg-transparent text-white border rounded-xl pl-3 my-2 outline-text1'/>
    <br />
    <label>Number</label>
    <br />
    <input type="text" placeholder='Your number' className='bg-transparent text-white border rounded-xl pl-3 my-2 outline-text1'/>
    <br />
    <button className='border-2 border-white px-6 py-1 mt-5 rounded-full'>
      Send
    </button>
  </form>
</div>
    </section>
  )
}

export default Contact