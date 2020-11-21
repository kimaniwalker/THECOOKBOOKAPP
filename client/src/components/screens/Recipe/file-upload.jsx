import React, { useState } from 'react'

export default function FileUpload(props) {

    const [file, setFile] = useState('');


    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };

    return (
        <>
            <div id="upload-box">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <p>Filename: {file.name}</p>
                <p>File type: {file.type}</p>
                <p>File size: {file.size} bytes</p>
                {file && <ImageThumb image={file} />}
            </div>
        </>
    )
}
