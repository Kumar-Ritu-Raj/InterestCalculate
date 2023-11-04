import { type } from 'os';
import React, { useState } from 'react';

export default function Home() {
  const initialAmount = 0;
  const initialRate = 0;
  const initialReamount = 0;

  const [amount, setAmount] = useState<number>(initialAmount);
  const [rate, setRate] = useState<number>(initialRate);
  const [reamount, setReamount] = useState<number>(initialReamount);

  const CalculateAmount = () => {
    const parsedAmount = parseInt(amount, 10);
    const parsedRate = parseInt(rate, 10);
    const parsedReamount = parseInt(reamount, 10);

    if (parsedAmount <= 0 || parsedRate <= 0 || parsedReamount <= 0) {
      alert('Please enter valid positive values for all inputs./कृपया संख्या भरें');
      return;
    }

    var currentAmount = parsedAmount;
    var Rate = parsedRate;
    var Count = 0;
    var Reamount = parsedReamount;
    const maxIterations = 100; // Set a maximum number of iterations

    while (currentAmount > (Reamount + ((Reamount * Rate) / 100))) {
      currentAmount = (currentAmount + ((currentAmount * Rate) / 100)) - Reamount;
      Count = Count + 1;

      if (Count >= maxIterations) {
        alert('Please take for less months/कृपया कम महीनों के लिए लें');
        return;
      }
    }

    alert(`After ${Count} Months \nAmount left = ${currentAmount.toFixed(2)} \n${Count} महीने के बाद \n शेष ${currentAmount.toFixed(2)} रुपये बचे`);

    // Reset input fields to their initial values
    setAmount(initialAmount);
    setRate(initialRate);
    setReamount(initialReamount);
  };

  return (
    <main className="bg-white w-[60%] h-full mt-[50px] mx-auto text-[25px]">
      <p className='mb-[20px] text-[40px] text-center'>Interest Calculation</p>
      <div className='mx-auto my-auto'>
        <ul>
          <li className='bg-white my-[15px] ml-[20px]'>
            <p>Enter Total Amount/कितने रुपये देने हैं:-</p>
            <div><input className='border-[#123] border-[1px] rounded-sm' type="number" value={amount} onChange={e => setAmount(e.target.value)} min="0" /></div>
          </li>
          <li className='bg-white my-[15px] ml-[20px]'>
            <p>Enter Rate%/कितने दर पर:-</p>
            <div><input className='border-[#123] border-[1px]' type="number" value={rate} onChange={e => setRate(e.target.value)} min="0" /></div>
          </li>
          <li className='bg-white my-[15px] ml-[20px]'>
            <p>Enter Return Amount/प्रतिमाह कितने रुपये लेने हैं:-</p> 
            <div><input className='border-[#123] border-[1px]' type="number" value={reamount} onChange={e => setReamount(e.target.value)} min="0" /></div>
          </li>
          <li className='text-center mt-[20px]'>
            <button className='bg-indigo-700 rounded-lg p-2 text-[#fff] text-[20px] mx-auto text-center' onClick={CalculateAmount}>Calculate</button>
          </li>
        </ul>
      </div>
    </main>
  );
}
