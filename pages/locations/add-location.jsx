import styles from '../../styles/AddLocation.module.css';
import { FormGroup, TextField, TextareaAutosize } from '@mui/material';

export default function AddLocationPage() {
  return (
    <>
      <form className={styles.form}>
        
        <FormGroup>
          <TextField name="title" label="Title" variant="standard" />
        </FormGroup>
        <FormGroup>
          <TextField multiline variant="standard" label="Description" />
        </FormGroup>
        <TextField name="title" label="Title" variant="standard" />
      </form>
    </>
  );
}
