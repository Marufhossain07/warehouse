import { Box, Button, MenuItem, Modal, Typography } from "@mui/material";
import useProd from "../hooks/useProd";
import { DataGrid } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import React, { useState } from "react";
const Products = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const [selectProduct, setSelectProduct] = useState(null)
    const open = Boolean(anchorEl);
    const handleOpen = (product) => {
        setSelectProduct(product)
        setOpenModal(true)
    };

    const handleCloseModal = () => setOpenModal(false);

    const { products,setProducts } = useProd()
    console.log(products);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: {xs:'80%' ,lg:'50%'},
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const handleDelete = (title)=>{
        const updatedProducts = products.filter(product=> product.title !== title)
        setProducts(updatedProducts)
        setAnchorEl(null);
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'category', headerName: 'Product Category', width: 150 },
        { field: 'regPrice', headerName: 'Regular Price ($)', width: 150 },
        { field: 'extraPrice', headerName: 'Extra Price ($)', width: 150 },
        { field: 'totalStock', headerName: 'Total Stock', width: 150 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                // State to manage each row's menu
                const [anchorEl, setAnchorEl] = React.useState(null);
                const open = Boolean(anchorEl);

                const handleClick = (event) => {
                    setAnchorEl(event.currentTarget);
                };

                const handleClose = () => {
                    setAnchorEl(null);
                };

                return (
                    <div>
                        <Button
                            id={`basic-button-${params.id}`}
                            aria-controls={open ? `basic-menu-${params.id}` : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizOutlinedIcon />
                        </Button>
                        <Menu
                            id={`basic-menu-${params.id}`}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': `basic-button-${params.id}`,
                            }}
                        >
                            <MenuItem onClick={() => handleOpen(params.row)}>View</MenuItem>
                            <MenuItem onClick={()=> handleDelete(params.row.title)}>Delete</MenuItem>
                        </Menu>
                    </div>
                );
            },
        }, ,

    ];
    const rows = products.map((product, index) => ({
        id: index + 1,
        title: product.title,
        category: product.category,
        regPrice: product.regPrice,
        extraPrice: product.extraPrice,
        totalStock: product.totalStock,
        image: product.image,
        description: product.description,
        tax: product.tax,
        weight: product.weight,
        length: product.length,
        height: product.height,
        width: product.width
    }));


    return (
        <div>
            <h3 className="text-3xl font-semibold text-center my-10">Products List</h3>
            <div>
                <Box sx={{ width: { sm: '100%', lg: '75%', margin: 'auto' } }}>
                    <DataGrid
                        sx={{ '.MuiDataGrid-footerContainer': { display: 'none' }, '.MuiDataGrid-menuOpen': { display: 'none' }, '.MuiDataGrid-iconButtonContainer': { display: 'none' }, '.css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root': { display: 'none' }, '.css-t89xny-MuiDataGrid-columnHeaderTitle': { fontWeight: 700 } }}

                        rows={rows}
                        columns={columns}
                    />
                </Box>
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="border border-blue-400 p-5">
                        <h3 className="text-2xl text-center mb-5 font-semibold ">Product Details:</h3>
                        <div>
                            <div className="space-y-3 grid">
                                <h3 className="font-semibold text-lg">Product Title: <span>{selectProduct?.title}</span></h3>
                                <h3 className="font-semibold text-lg">Category: <span>{selectProduct?.category}</span></h3>
                                <h3 className="font-semibold text-lg">Regular Price: <span>{selectProduct?.regPrice}</span></h3>
                                <h3 className="font-semibold text-lg">Extra Price: <span>{selectProduct?.extraPrice}</span></h3>
                                <h3 className="font-semibold text-lg">Tax Amount: <span>{selectProduct?.tax}</span></h3>
                                <h3 className="font-semibold text-lg">Weight: <span>{selectProduct?.weight}</span></h3>
                                <h3 className="font-semibold text-lg">Height: <span>{selectProduct?.height}</span></h3>
                                <h3 className="font-semibold text-lg">Length: <span>{selectProduct?.length}</span></h3>
                                <h3 className="font-semibold text-lg">Width: <span>{selectProduct?.width}</span></h3>
                                <h3 className="font-semibold text-lg">Total Stock: <span>{selectProduct?.totalStock}</span></h3>
                            </div>
                            <div className="flex flex-wrap my-5 gap-5">
                                <h3 className="font-semibold text-xl">Images:</h3>
                                {selectProduct?.image?.map((singleImage, i) => <img className="w-40 h-40 object-cover" key={i} src={singleImage}></img>)}
                            </div>

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Products;