import React from 'react'
import './App.css'
import { useMutation } from '@tanstack/react-query';
import { resolveUrl } from "./api"
import { Loader } from './components';

function App() {
  const [url, setUrl] = React.useState("")
  const [ipAddress, setIPAddress] = React.useState("")

  const { mutate, isLoading, isError, error, isSuccess }: any = useMutation({
    mutationFn: resolveUrl, onSuccess({ data }) {
      setIPAddress(data.data.data)
    }
  });
  const handleChange = (e: any) => {
    setUrl(e.target.value)
  }
  const handleResolveDns = () => {
    mutate({
      url: url
    })
  }
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center h-screen'>
      {isError && <div
        className="break-words rounded-b-lg bg-red-600 px-20 py-2 text-white mb-4">
        {error?.message}
      </div>}
      {isSuccess && <div className="break-words rounded-b-lg bg-success-color px-20 py-2 text-white mb-4">
        {ipAddress}
      </div>}
        <input onChange={handleChange} className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-emerald-900 focus:ring-1 sm:text-sm" placeholder="Enter a website..." type="text" name="url" />
        <button className='bg-emerald-900 px-8 py-1 rounded text-white mt-5' onClick={handleResolveDns}>
          {isLoading ? <Loader /> : "Resolve dns"}
        </button>
      </div>
    </>
  )
}

export default App
