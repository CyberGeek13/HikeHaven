'use client';

import React, { useState, useEffect } from 'react';
import useHikes from '@/app/hooks/useHikes';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { TbTrekking } from 'react-icons/tb';
import { BiSolidFirstAid } from 'react-icons/bi';
import { FaHeadphones } from 'react-icons/fa';

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-3">
      <input
        type="checkbox"
        className="form-checkbox text-blue-500 h-5 w-5"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="text-[15px] text-black mt-[5px]">I Agree with all <span className="text-[15px] text-blue-600 cursor-pointer hover:underline">*Terms & Conditions*</span></span>
    </label>
  );
};

const Checkout = () => {
  const hikes  = useHikes();
  const [totalPrice, setTotalPrice] = useState(0)
  const [bookedHikes, setBookedHikes] = useState<any>([])
  const discountPrice = 100;
  const router = useRouter();

  useEffect(() => {
      axios.get('/api/hike')
      .then(res => {
          const hikeIds = res.data.hikeIds
          const hikeDates = res.data.hikeDates
          let price = 0;
          const tempHikes:any = []
          hikes.forEach((hike:any) => {
              if(hikeIds.includes(hike.id)) {
                  hike.selectedDate = hikeDates[hikeIds.indexOf(hike.id)]
                  tempHikes.push(hike)
                  console.log(hike);
                  price += hike.price
              }
          })
          setBookedHikes(tempHikes)
          setTotalPrice(price)
      })
      .catch(err => {
          console.log(err);
      })
  }, [])

  const removeHike = (id:any) => {
      axios.post(`/api/delete/`, {id})
      .then(res => {
          router.refresh()
      })
      .catch(err => {
          console.log(err);
      })
  }

  return ( 
      <div className="mt-[150px] p-[30px] flex">
          <div className='w-[70%] bg-gray-100 p-[20px] flex flex-col gap-[20px] font-serif'>
              <span className='text-[35px] font-serif font-semibold'>
                  Cart of Adventures<hr></hr>
              </span>
              {/* <div className="w-[98vw] px-7">
                <div className="h-1 w-[0px] bg-[#ffd11a] rounded-sm mb-5"/>
              </div> */}
              {
                  bookedHikes.map((hike:any) => (
                      <div className='flex justify-between gap-[20px] p-[10px] bg-white shadow-xl'>
                          <div className='flex gap-[20px]'>
                              <div className='w-[200px] h-[200px]'>
                                  <img src={hike.image} alt="" className='w-full h-full object-cover'/>
                              </div>
                              <div className='flex flex-col gap-[10px]'>
                                  <div className='flex flex-col'>
                                      <span className='text-[30px]'>
                                          {hike.name}
                                      </span>
                                      <span className='text-[17px] text-gray-700'>
                                          {hike.selectedDate}
                                      </span>
                                  </div>
                                  <span className='text-[20px]'>
                                      Rs {hike.price} /-
                                  </span>
                              </div>
                          </div>
                          <div className='flex flex-col'>
                              <span className='text-[20px]'>
                                  Quantity
                              </span>
                              <span className='text-[20px]'>
                                  1
                              </span>
                              <div className="bg-red-500 text-white text-[15px] font-semibold rounded-[10px] px-[5px] py-[2px] cursor-pointer hover:bg-red-600 transition-all duration-100" 
                              onClick={() => removeHike(hike.id)}>
                                  X Remove
                              </div>
                          </div>
                      </div>
                  )
                  )
              }
          </div>
          <div  className='w-[30%] bg-gray-300 flex flex-col p-[20px] gap-[30px] font-serif'>
              <div className='bg-white w-full p-[30px] flex flex-col'>
                  <div className='flex justify-between items-center'>
                      <span className='text-[25px]'>
                          Subtotal
                      </span>
                      <span className='text-[20px]'>
                          Rs {totalPrice} /-
                      </span>
                  </div>
                  <div className='flex justify-between items-center'>
                      <span className='text-[25px]'>
                          Discount
                      </span>
                      <span className='text-[20px]'>
                          Rs {discountPrice} /-
                      </span>
                  </div>
                  <div className='flex justify-between items-center'>
                      <span className='text-[25px]'>
                          Tax
                      </span>
                      <span className='text-[20px]'>
                          Rs 0.00 /-
                      </span>
                  </div><hr></hr>
                  <div className='flex justify-between items-center font-semibold'>
                      <span className='text-[25px]'>
                          Total
                      </span>
                      <span className='text-[20px]'>
                          Rs {totalPrice - discountPrice} /-
                      </span>
                      {/* Use the Checkbox component here */}
                  </div><br></br>
                  <Checkbox />
                  <div className='mt-[20px] z-[1]'>
                      <PayPalScriptProvider options={{"clientId": "test"}}>
                          <PayPalButtons style={{layout: "horizontal", label: "pay", height: 55}}/>
                      </PayPalScriptProvider>
                  </div>
              </div>
              <div className='bg-white w-full p-[30px] flex flex-col'>
                  <span className='text-[25px] font-serif font-bold'>
                      Our Promise
                  </span><hr/>
                  <div className='flex gap-[10px] items-center'>
                      <TbTrekking className="text-[100px]"/>
                      <span className='text-[16px]'>
                          <span className='font-bold'>Tailored Experiences</span> : Promise to offer customized hiking tours to cater to various skill levels and interests.
                      </span>
                  </div>
                  <div className='flex gap-[10px] items-center'>
                      <BiSolidFirstAid className="text-[100px]"/>
                      <span className='text-[16px]'>
                          <span className='font-bold'>Safety First</span> : Guarantee the safety of your customers by emphasizing rigorous safety standards and protocols.
                      </span>
                  </div>
                  <div className='flex gap-[10px] items-center'>
                      <FaHeadphones className="text-[120px]" />
                      <span className='text-[16px]'>
                          <span className='font-bold'>Exceptional Customer Support</span> : Pledge to provide exceptional customer support from the moment your clients inquire about a tour until they return home.
                      </span>
                  </div>
              </div>
          </div>
      </div>
   );
}

export default Checkout;
