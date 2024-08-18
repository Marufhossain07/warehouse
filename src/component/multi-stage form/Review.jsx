import { Button } from "@mui/material";
import useProd from "../../hooks/useProd";

const Review = () => {
    const { step, setStep } = useProd()
    return (
        <div>
            <div className=" bg-[#1776D2] my-10 text-white">
                <h3>hi sir</h3>
            </div>
            <div className="flex justify-end gap-5">
            <Button
                onClick={() => setStep(step - 1)} variant="contained">Back</Button>
            <Button variant="contained">Submit</Button>
            </div>
        </div>
    );
};

export default Review;