import React, { useEffect, useState } from 'react';
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';
import { manufacturerService } from '../services/api';

interface Manufacturer {
    id: number;
    name: string;
    email: string;
    phone: string;
    country: string;
}

const ManufacturersList: React.FC = () => {
    const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: ''
    });

    useEffect(() => {
        loadManufacturers();
    }, []);

    const loadManufacturers = async () => {
        try {
            const response = await manufacturerService.getAll();
            setManufacturers(response.data);
        } catch (error) {
            console.error('Error loading manufacturers:', error);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            country: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            await manufacturerService.create(formData);
            handleClose();
            loadManufacturers();
        } catch (error) {
            console.error('Error creating manufacturer:', error);
        }
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
                Add Manufacturer
            </Button>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manufacturers.map((manufacturer) => (
                            <TableRow key={manufacturer.id}>
                                <TableCell>{manufacturer.name}</TableCell>
                                <TableCell>{manufacturer.email}</TableCell>
                                <TableCell>{manufacturer.phone}</TableCell>
                                <TableCell>{manufacturer.country}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Manufacturer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Name"
                        fullWidth
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email"
                        type="email"
                        fullWidth
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone"
                        fullWidth
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="country"
                        label="Country"
                        fullWidth
                        value={formData.country}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ManufacturersList; 