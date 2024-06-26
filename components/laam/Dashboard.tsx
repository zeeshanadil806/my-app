"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@components/ui/label";
import { Button } from "@components/ui/button";
import Image from "next/image";
import React from "react";
import { useState, ChangeEvent } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

type ImageProps = {
    image: string;
};
type ProductProps = {
    name: string;
    slug: string;
    image?: ImageProps;
    description: string;
    stock: number;
    actPrice: number;
    salePrice: number;
    brand: string;
    sizes: string;
};

// Sizes
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Small',
    'Medium',
    'Large',
    'XL',
    'XXL',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
export default function Dashboard() {
    const [product, setProduct] = useState<ProductProps>({
        name: "",
        slug: "",
        description: "",
        stock: 0,
        actPrice: 0,
        salePrice: 0,
        brand: "",
        sizes: "",
    });

    // Images

    const [images, setImages] = useState<string[]>([]);
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const imagesArray = files.map(file => URL.createObjectURL(file));
            setImages(imagesArray);
        }
    };

    // Brands

    const [brand, setBrand] = React.useState('');
    const handleBrandChange = (event: SelectChangeEvent) => {
        setBrand(event.target.value as string);
    };

    // Sizes

    const theme = useTheme();
    const [sizes, setSizes] = React.useState<string[]>([]);
    const handleSizesChange = (event: SelectChangeEvent<typeof sizes>) => {
        const {
            target: { value },
        } = event;
        setSizes(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <div>
            <form action="">
                <h1>Admin</h1>
                <div className="flex justify-evenly">

                    {/* Left Products Section */}

                    <div id="left" className="w-[40vw] border border-gray-300 p-4">
                        Products
                    </div>

                    {/* Right Admin Dashboard */}

                    <div id="right" className="w-[40vw] border border-gray-300 p-4">
                        <p>Add Product</p>

                        {/* Main Form  */}

                        <div className="flex flex-col justify-evenly h-[100vh]">

                            {/* Name Input */}

                            <Input type="text" name="name" placeholder="Product Name..." />

                            {/* Slug Input  */}

                            <div className="flex w-full items-center space-x-3">
                                <Input
                                    type="text"
                                    name="slug"
                                    placeholder="Generate Slug"
                                    readOnly
                                />
                                <Button>Generate Slug</Button>
                            </div>

                            {/* Image Input */}

                            <div style={styles.container}>
                                <input
                                    type="file"
                                    multiple
                                    onChange={handleImageChange}
                                    accept="image/*"
                                    style={styles.input}
                                />
                                <div style={styles.imagePreviews}>
                                    {images.map((image, index) => (
                                        <Image key={index} src={image} alt={`preview ${index}`} style={styles.image} width={100} height={100} />
                                    ))}
                                </div>
                            </div>

                            {/* Description Input */}

                            <textarea
                                placeholder="Product Description..."
                                className="border border-gray-200 p-3 outline outline-none"
                                name="description"
                                rows={4}
                                cols={50}
                            ></textarea>

                            {/* Stock Input */}

                            <div className="flex w-full items-center space-x-3">
                                <Label htmlFor="name">Stock: </Label>
                                <Input type="number" name="stock" placeholder="Stock" />
                            </div>

                            {/* Price Inputs */}

                            <div className="flex w-full items-center space-x-3">
                                <Label htmlFor="name">Actual Price: </Label>
                                <Input
                                    type="number"
                                    name="actPrice"
                                    placeholder="Enter Actual Price"
                                />
                                <Label htmlFor="name">Sale Price: </Label>
                                <Input
                                    type="number"
                                    name="salePrice"
                                    placeholder="Enter Sale Price"
                                />
                            </div>

                            {/* Brands Input */}

                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={brand}
                                        label="Age"
                                        onChange={handleBrandChange}
                                    >
                                        <MenuItem value={"Brand 1"}>Brand 1</MenuItem>
                                        <MenuItem value={"Brand 2"}>Brand 2</MenuItem>
                                        <MenuItem value={"Brand 3"}>Brand 3</MenuItem>
                                        <MenuItem value={"Brand 4"}>Brand 4</MenuItem>
                                        <MenuItem value={"Brand 5"}>Brand 5</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>

                            {/* Sizes Input */}

                            <div>
                                <FormControl sx={{ width: 300 }}>
                                    <InputLabel>Size</InputLabel>
                                    <Select
                                        id="demo-multiple-chip"
                                        multiple
                                        value={sizes}
                                        onChange={handleSizesChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, sizes, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>

                            <Button>Add Product</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        margin: '20px',
    },
    input: {
        display: 'block',
        margin: '20px 0',
    },
    imagePreviews: {
        display: 'flex',
        gap: '10px',
        marginTop: '20px',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '8px',
        border: '2px solid #ddd',
        padding: '5px',
    }
};
