import { useState } from 'react';
import axios from "axios";
import { useMutation } from "@tanstack/react-query"

const makeRequestAPI = async (symptoms) => {
  const res = await axios.post('http://localhost:8000', { symptoms })
  return res.data;
}

const FormSubmission = () => {
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [symptoms, setSymptoms] = useState("")
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ['gemini-ai-request']
  })


  const submitHandler = (e) => {
    e.preventDefault()
    mutation.mutate(symptoms)
  }

  return (
    <div>
      <form className='App-form' onSubmit={submitHandler}>
        <div className="flex gap-4 text-xl font-medium leading-8 max-md:flex-wrap">
          <div className="font-oswalds justify-center py-2 pr-9 pl-4 text-black bg-white rounded-lg border border-solid shadow-sm border-neutral-200 max-md:pr-8 max-md:max-w-full">

            I am a <label><input type='number' required placeholder='99' defaultValue='99' name='age' id='age' min="1" max="99" value={age} onChange={(e) => setAge(e.target.value)} className='w-9 text-xl relative left-1 top-0.7 '></input></label>  year old <label><select name='gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)} className='relative left-1' required placeholder='male'><option value="male"> male </option><option value="female"> female </option>
            </select>  </label>patient. Recently, I have been
            expressing <label><input type='text' required placeholder='enter symptoms here' className='text-center' name='symptoms' id='symptoms' value={symptoms} onChange={(e) => setSymptoms(e.target.value)}></input></label> symptoms. What could my disease be?{" "}
          </div>
          <div className="flex-1 justify-center px-5 py-6 text-white whitespace-nowrap bg-black rounded-lg shadow-sm">
            <button type="submit">Submit</button>
          </div>
        </div>


      </form>
      <section className='bg-gray-90 rounded-2xl border border-black border-solid min-h-[110px] relative top-4 text-center'>
        <div className='relative top-5 left-1 font-oswalds text-lg'>
      {mutation.isPending && <p>Generating your response</p>}
        {mutation.isError && <p>{mutation.error.message}</p>}
        {mutation.isSuccess && <p><strong>Hypothetically. </strong>{mutation.data}</p>}
        </div>


      </section>
    </div>
  );
};

export default FormSubmission;
