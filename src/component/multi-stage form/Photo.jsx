import { Button, styled } from "@mui/material";
import useProd from "../../hooks/useProd";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Photo = () => {
    const { step, setStep, productInfo, setProductInfo } = useProd()
    const [image, setImage] = useState(productInfo.images || [])

    const handlePhoto = (e) => {
        const files = e.target.files;
        const fileArray = Array.from(files).map(file => URL.createObjectURL(file));
        setImage([...image, ...fileArray])
    }

    const handleStore = () => {
        setStep(step + 1)
        setProductInfo({
            ...productInfo,
            image: image
        });
        console.log(productInfo);

    }
    useEffect(()=>{
        if(productInfo.image){
            setImage(productInfo.image)
        }
    },[productInfo.image])
    return (
        <div>
            <div className="rounded-lg border my-5 border-blue-500 p-10">
                <h3 className="font-semibold mb-5 text-2xl">Add Photo:</h3>
                <div className="flex gap-5 mb-5">
                    {
                        image?.map((singleImage, i) => <img className="w-40 h-40 object-cover" key={i} src={singleImage}></img>)
                    }
                </div>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput onChange={handlePhoto} type="file" />
                </Button>
                <div className="flex justify-end gap-5">
                    <Button
                        onClick={() => setStep(step - 1)} variant="contained">Back</Button>
                    <Button onClick={handleStore} variant="contained">Next</Button>
                </div>
            </div>

        </div>
    );
};

export default Photo;