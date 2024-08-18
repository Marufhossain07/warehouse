import { Button } from "@mui/material";
import useProd from "../../hooks/useProd";

const Review = () => {
    const { step, setStep } = useProd()
    return (
        <div>
            <div>
                <h3>hi sir</h3>
            </div>
            <Button
                onClick={() => setStep(step - 1)} variant="contained">Back</Button>
            <Button variant="contained">Submit</Button>
        </div>
    );
};

export default Review;