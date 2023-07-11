import { useState } from "react";


function GoogleDriveFileUploader() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<any>(null);
  const [password, setPassword] = useState("");

  const handleFileChange = (e: any) => {
    const file = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    console.log(file.data);
    
    setFile(file);
  };
  
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };



    
    const handleSubmit = async () => {
      const formData = new FormData();
      formData.append("file", file.data);
      formData.append("password", password);
      const response = await fetch("http://localhost:5001/upload-to-google-drive", {
        method: "POST",
        body: formData,
      });
      const responseWithBody = await response.json();
      if (response) setUrl(responseWithBody.publicUrl);
  };
  

 
   
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleFileChange}></input>
      <input type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GoogleDriveFileUploader;

    