import { Button, FormLabel, Grid, OutlinedInput, styled, TextField } from "@mui/material";
import useProd from "../../hooks/useProd";
import { useForm } from "react-hook-form";

const InventoryDetail = () => {
    const { step, setStep, productInfo, setProductInfo } = useProd()
    const { register, handleSubmit } = useForm()


    const FormGrid = styled(Grid)(() => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const storeData = (data) => {

        setStep(step + 1)
        setProductInfo({...productInfo,
            ...data
        });
        console.log(productInfo);
        
    }
    console.log(productInfo);
    return (
        <div>
            <div className="rounded-lg border my-5 border-blue-500 p-10">
                <h3 className="font-semibold mb-5 text-2xl">Inventory Info:</h3>
                <form onSubmit={handleSubmit(storeData)}>
                    <Grid container spacing={3}>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="Weight" required>
                                Weight
                            </FormLabel>
                            <OutlinedInput
                                {...register('weight')}
                                defaultValue={productInfo?.weight}
                                type="text"
                                placeholder="Write product weight"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="length" required>
                                Length
                            </FormLabel>
                            <OutlinedInput
                                {...register('length')}
                                defaultValue={productInfo?.length}
                                type="text"
                                placeholder="Write product length"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="height" required>
                                Height
                            </FormLabel>
                            <OutlinedInput
                                {...register('height')}
                                defaultValue={productInfo?.height}
                                type="text"
                                placeholder="Write product height"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="width" required>Width</FormLabel>
                            <OutlinedInput
                                {...register('width')}
                                defaultValue={productInfo?.width}
                                type="text"
                                placeholder="Write product width"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={6}>
                            <FormLabel htmlFor="Total-Stock" required>
                                Total Stock
                            </FormLabel>
                            <OutlinedInput
                                {...register('totalStock')}

                                defaultValue={productInfo?.totalStock}
                                type="number"
                                placeholder="Write Total Stock"
                                required
                            />
                        </FormGrid>
                    </Grid>
                    <div className="flex justify-end gap-5">
                        <Button
                            onClick={() => setStep(step - 1)} variant="contained">Back</Button>
                        <Button type="submit" variant="contained">Next</Button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default InventoryDetail;