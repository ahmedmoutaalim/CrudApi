import { Grid, TextField , FormControl , InputLabel , Select , MenuItem, Button, FormHelperText } from '@material-ui/core';
import react , {useState , useEffect} from 'react'
import useForm from './useForm';
import {connect} from "react-redux"
import * as actions from "../actions/dCandidate"


const initialFieledValues = {
  fullName : '',
  mobile : '',
  email : '' ,
  age : '' ,
  bloodGroup : '',
  address : ''
}



const DcandidateForm = ({classes , ...props}) => {

  const [values , setValues] = useState(initialFieledValues)
  const [errors , setErrors] = useState({})

    const validate = (fieldValues = values) => {

      let temp = {} 
      if('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "this fieled is required."
      if('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile ? "" : "this fieled is required."
      if('bloodGroup' in fieldValues)
      temp.bloodGroup = fieldValues.bloodGroup ? "" : "this fieled is required."
      if('email' in fieldValues)
      temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valide"

      setErrors({
        ...temp
      })  
   if(fieldValues == values)
      return Object.values(temp).every(x=>x=="")
    }

//  const {
// handleInputChange,
// errors,
// setErrors,
// values,
// setValues


//  }=useForm(initialFieledValues)

      const handleInputChange = e => {
              const {name ,value} =e.target
              const fieldValues = {[name] : value}
              setValues({
                 ...values,
                 ...fieldValues
              })

              validate(fieldValues) ;

      }

      const HandleSubmit = e =>{
        e.preventDefault();
        if(validate()){
           props.createDCandidate(values,()=>{window.alert("inserted")})
        }

      }
    return (
       <form autoComplete='off' noValidate onSubmit={HandleSubmit}>
        <Grid container>
         <Grid item xs ={6}>
            <TextField
            
            name='fullName'
            variant='outlined'
            label="Full Name"
            values={values.fullName}
            onChange={handleInputChange}
           
            {...(errors.fullName && {error : true , helperText : errors.fullName})}
            />
            <TextField
          
            name='email'
            variant='outlined'
            label="email"
            value={values.email}
            onChange={handleInputChange}
            {...(errors.email && {error : true , helperText : errors.email})}
            />
      <FormControl variant='outlined'
      
     
      {...(errors.bloodGroup && {error : true})}>
  <InputLabel >Blood Group</InputLabel>
  <Select
     name='bloodGroup'
 
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
  {errors.bloodGroup && <FormHelperText>{errors.bloodGroup}</FormHelperText>}
</FormControl >
         </Grid>
         <Grid item xs ={6}>
         <TextField
            name='mobile'
            variant='outlined'
            label="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            {...(errors.mobile && {error : true , helperText : errors.mobile})}
            />
              <TextField
            name='age'
            variant='outlined'
            label="age"
            value={values.age}
            onChange={handleInputChange}
            />
              <TextField
            name='address'
            variant='outlined'
            label="address"
            value={values.address}
            onChange={handleInputChange}
            />
            <div>
              <Button
              variant='contained'
              color='primary'
              type='submit'
             
              
              >
                Submit
              </Button>
              <Button>
                Reset
              </Button>
            </div>
         </Grid>
        </Grid>
       </form>
    )

}

const mapStateToProps = state =>({dCandidateList : state.dCandidate.list})
const mapActionToprops = {
   createDCandidate : actions.create,
   updateDCandidate : actions.update

   
  }

export default connect( mapStateToProps , mapActionToprops )(DcandidateForm); 