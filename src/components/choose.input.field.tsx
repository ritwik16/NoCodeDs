import axios from "axios";
import React, { useState } from "react";


export default function ChooseInputField(){

    const [file, setFile] = useState(null);
    let data:any=0;
  const fileReader = new FileReader();

  const handleOnChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      console.log("clicked");
      alert(formData);
       data = await axios.get('https://nocodeds.onrender.com/files/');
       console.log(data);

     await axios.post('https://nocodeds.onrender.com/upload/',formData)
     .then(res => { 
      console.log("success")
    }) 
    .catch(err => { 
      if (err.response) { 
        console.log("fail"+ err.response);
        // client received an error response (5xx, 4xx)
      } else if (err.request) { 
        console.log("fail"+ err.request);

        // client never received a response, or request never left 
      } else { 
        // anything else 
        console.log("fail");

      } 
    })
      
      fileReader.readAsText(file);
    }
    setFile(null);
    console.log("clicked");

  };
    return(
        <div>
            <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          submit
        </button>
      </form>
      {data}
        </div>
    );
}