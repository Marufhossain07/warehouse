import { Button } from "@mui/material";
import useProd from "../../hooks/useProd";

const Photo = () => {
    const { step, setStep } = useProd()
    return (
        <div>
            <div>
                <h3>hi photo</h3>
            </div>
            <Button
                onClick={() => setStep(step - 1)} variant="contained">Back</Button>
            <Button
                onClick={() => setStep(step + 1)} variant="contained">Next</Button>
        </div>
    );
};

export default Photo;