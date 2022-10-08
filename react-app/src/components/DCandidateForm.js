import { Grid, TextField ,withStyles , FormControl , InputLabel , Select , MenuItem } from '@material-ui/core';
import react , {useState} from 'react'


const styles = theme => ({

root : {

   
             margin:theme.spacing(1),
             minWidth : 230
   
},


})

const initialFieledValues = {
    fullName : '',
    mobile : '',
    email : '' ,
    age : '' ,
    bloodGroup : '',
    address : ''
}

const DcandidateForm = (classes , ...props) => {

    const {values , setValues} = useState(initialFieledValues)
      const handleInputChange = e => {
              const {name ,value} =e.target

              setValues({
                ...values,
                [name] : value
              })
      }
    return (
       <form autoComplete='off' noValidate >
        <Grid container>
         <Grid item xs ={6}>
            <TextField
            className={classes.root}
            name='fullName'
            variant='outlined'
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            />
            <TextField
            className={classes.root}
            name='email'
            variant='outlined'
            label="email"
            value={values.fullName}
            onChange={handleInputChange}
            />
      <FormControl variant='outlined'
      
      className={classes.formControl}>
  <InputLabel >Blood Group</InputLabel>
  <Select
     name='bloodGroup'
    value={values.bloodGroup}
    onChange={handleInputChange}
  >
    <MenuItem value="">Select bloodGroup</MenuItem>
    <MenuItem value="A+">A+</MenuItem>
    <MenuItem value="A-">A-</MenuItem>
    <MenuItem value="B+">B+</MenuItem>
    <MenuItem value="B-">B-</MenuItem>
    <MenuItem value="AB-">AB-</MenuItem>
    <MenuItem value="AB+">AB+</MenuItem>
    <MenuItem value="O-">O-</MenuItem>
    <MenuItem value="O+">O+</MenuItem>
  </Select>
</FormControl >
         </Grid>
         <Grid item xs ={6}>
         <TextField
            name='mobile'
            variant='outlined'
            label="mobile"
            value={values.fullName}
            onChange={handleInputChange}
            />
              <TextField
            name='age'
            variant='outlined'
            label="age"
            value={values.fullName}
            onChange={handleInputChange}
            />
              <TextField
            name='address'
            variant='outlined'
            label="address"
            value={values.fullName}
            onChange={handleInputChange}
            />
         </Grid>
        </Grid>
       </form>
    )

}

export default withStyles(styles)(DcandidateForm) ; 