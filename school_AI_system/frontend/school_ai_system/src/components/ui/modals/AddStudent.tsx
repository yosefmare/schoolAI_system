import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddStudent from '@/app/dashboard/teachers/addStudent/page';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

};
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{
        textTransform: 'none',
        color: 'black'
      }} onClick={handleOpen}>Add Student</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <AddStudent />
        </Box>
      </Modal>
    </div>
  );
}
