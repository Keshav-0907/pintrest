import { Upload } from 'lucide-react';
import React, { useState } from 'react';

//@ts-ignore
const Uploader = ({ file, setFile }) => {
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (e:any) => {
    const selected = e.target.files[0];
    setSelectedFile(selected);
    setFile(selected);
  };

  return (
    <div>
      <div className='h-[450px] bg-[#e9e9e9] rounded-lg'>
        <label className='m-5 flex flex-col justify-center items-center cursor-pointer h-[90%] border-[2px] border-gray-600 border-dashed rounded-lg text-gray-600 '>
          {!selectedFile ? (
            <div className='flex items-center flex-col gap-2'>
              <span> <Upload/> </span>
              <h2 className='font-semibold'>Click to Upload File</h2>
            </div>
          ) : null}
          {selectedFile ? (
            <img
              src={window.URL.createObjectURL(selectedFile)}
              alt='selected-image'
              width={500}
              height={800}
              className='object-contain h-[90%]'
            />
          ) : null}
          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            onChange={handleFileChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Uploader;
