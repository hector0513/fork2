import { Button, Dialog, DialogContent, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

type Props = {
  title: string;
  textButton: string;
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
};

/**
 * @param {object} props -  Props.
 * @param {JSX.Element} props.children -  Props.
 * @param {string} props.title - Title.
 * @param {string} props.textButton - TextButton.
 * @param {boolean} props.open - Open.
 * @param {() => void} props.onSubmit - OnSubmit.
 * @param {() => void} props.onClose - OnClose.
 * @returns {JSX.Element} - Dialog.
 */
export const CustomDialog: React.FC<Props> = ({
  children,
  title,
  textButton,
  open,
  onSubmit,
  onClose,
}) => {
  return (
    <Box>
      <Dialog
        onBackdropClick={() => {}}
        disableEscapeKeyDown
        open={open}
        onClose={onClose}
        maxWidth="md"
      >
        <DialogContent>
          <Box
            minWidth="500px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt="10px"
            mb="15px"
          >
            <Box
              fontWeight="bolder"
              fontSize="20px"
              textAlign="center"
              margin="auto 0px"
              color="#171D1C"
            >
              {title}
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button
                onClick={onClose}
                type="submit"
                variant="outlined"
                style={{
                  minWidth: '80px',
                  margin: 'auto 7px',
                }}
              >
                Cancel
              </Button>

              <Button
                onClick={onSubmit}
                type="submit"
                color="primary"
                variant="contained"
                style={{
                  minWidth: '80px',
                  margin: 'auto 7px',
                  background: '#005A42',
                }}
              >
                {textButton}
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box mt="15px">{children}</Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
