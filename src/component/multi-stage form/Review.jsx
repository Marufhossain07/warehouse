import { Button } from "@mui/material";
import useProd from "../../hooks/useProd";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
const Review = () => {
    const { step, setStep, productInfo, products, setProducts, setProductInfo } = useProd()
    const navigate = useNavigate()

    const handleSubmit = () => {

        const newProducts = [...products,productInfo]
        setProducts(newProducts)
        setProductInfo({})
        toast.success('Product has been successfully added', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
        });


        setTimeout(() => {
            navigate('/')
            setStep(0)
        }, 2000);
        

    }
    return (
        <div className="w-full mx-auto lg:w-1/2">
            <div className="border border-blue-400 rounded-lg my-10 p-10">
                <h3 className="text-2xl text-center mb-5 font-semibold ">Please have a look before submitting</h3>
                <div>
                    <div className="space-y-3 grid">
                        <h3 className="font-semibold text-lg">Product Title: <span>{productInfo?.title}</span></h3>
                        <h3 className="font-semibold text-lg">Category: <span>{productInfo?.category}</span></h3>
                        <h3 className="font-semibold text-lg">Regular Price: <span>{productInfo?.regPrice}</span></h3>
                        <h3 className="font-semibold text-lg">Extra Price: <span>{productInfo?.extraPrice}</span></h3>
                        <h3 className="font-semibold text-lg">Tax Amount: <span>{productInfo?.tax}</span></h3>
                        <h3 className="font-semibold text-lg">Weight: <span>{productInfo?.weight}</span></h3>
                        <h3 className="font-semibold text-lg">Height: <span>{productInfo?.height}</span></h3>
                        <h3 className="font-semibold text-lg">Length: <span>{productInfo?.length}</span></h3>
                        <h3 className="font-semibold text-lg">Width: <span>{productInfo?.width}</span></h3>
                        <h3 className="font-semibold text-lg">Total Stock: <span>{productInfo?.totalStock}</span></h3>
                    </div>
                    <div className="flex flex-wrap my-5 gap-5">
                        <h3 className="font-semibold text-xl">Images:</h3>
                        {productInfo?.image?.map((singleImage, i) => <img className="w-40 h-40 object-cover" key={i} src={singleImage}></img>)}
                    </div>

                </div>
                <div className="flex justify-end gap-5">
                    <Button 
                        onClick={() => setStep(step - 1)} variant="contained">Back</Button>
                    <Button className="disabled:bg-gray-500" onClick={handleSubmit} variant="contained">Submit</Button>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </div>
    );
};

export default Review;