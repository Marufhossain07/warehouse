import { Button, FormLabel, Grid, OutlinedInput, styled, TextField } from "@mui/material";
import useProd from "../../hooks/useProd";
import '../../index.css'
import { useForm } from "react-hook-form";

const ProductDetails = () => {
    const { step, setStep, productInfo, setProductInfo } = useProd()
    const { register, handleSubmit } = useForm()
    const FormGrid = styled(Grid)(() => ({
        display: 'flex',
        flexDirection: 'column',
    }));
    const storeData = (data) => {

        setStep(step + 1)
        setProductInfo(data);

    }


    return (
        <div>
            <div className="rounded-lg border my-5 border-blue-500 p-10">
                <h3 className="font-semibold mb-5 text-2xl">Product Info:</h3>
                <form onSubmit={handleSubmit(storeData)}>
                    <Grid container spacing={3}>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="Product Title" required>
                                Product Title
                            </FormLabel>
                            <OutlinedInput
                                {...register('title')}
                                defaultValue={productInfo?.title}
                                type="text"
                                placeholder="Write product title"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="Category" required>
                                Category
                            </FormLabel>
                            <OutlinedInput
                                {...register('category')}
                                defaultValue={productInfo?.category}
                                type="text"
                                placeholder="Write category"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="Regular-Price" required>
                                Regular Price
                            </FormLabel>
                            <OutlinedInput
                                {...register('regPrice')}
                                defaultValue={productInfo?.regPrice}
                                type="number"
                                placeholder="Write regular price"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="Extra-Price">Extra Price</FormLabel>
                            <OutlinedInput
                                {...register('extraPrice')}
                                defaultValue={productInfo?.extraPrice}
                                type="number"
                                placeholder="Write extra price"
                                required
                            />
                        </FormGrid>
                        <FormGrid item xs={12} md={6}>
                            <FormLabel htmlFor="Description" required>
                                Description
                            </FormLabel>
                            <TextField
                                {...register('description')}
                                defaultValue={productInfo?.description}
                                type="text"
                                id="outlined-multiline-flexible"
                                multiline
                                rows={4}
                            />

                        </FormGrid>
                        <FormGrid item xs={6}>
                            <FormLabel htmlFor="Tax-Amount" required>
                                Tax Amount
                            </FormLabel>
                            <OutlinedInput
                                {...register('tax')}

                                defaultValue={productInfo?.tax}
                                type="number"
                                placeholder="Write tax amount"
                                required
                            />
                        </FormGrid>
                    </Grid>
                <div className="flex justify-end">
                    <Button type="submit" variant="contained">Next</Button>
                </div>
                </form>
            </div>

        </div >
    );
};

export default ProductDetails;