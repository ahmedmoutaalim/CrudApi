import { Grid , Paper , Table , TableContainer , TableHead ,TableRow , TableCell ,TableBody , withStyles, ButtonGroup, Button} from "@material-ui/core";
import React ,{useState , useEffect} from "react";
import {connect} from "react-redux"
import * as actions from "../actions/dCandidate"
import DcandidateForm from "./DCandidateForm";
import  EditIcon from "@material-ui/icons/Edit"
import  DeleteIcon from "@material-ui/icons/Delete"
import {useToasts} from 'react-toast-notifications'


const Dcandidates=({classes, ...props})=> {
 // toast msg 
 const { addToast } = useToasts()

    const [currentId , setCurrentId] = useState(0)

    const onDelete = id =>{
        window.confirm('sure !!!')
        props.deleteDcandidate(id , ()=>  addToast("deleted" ,{appearance : 'error'}))

    }
    useEffect(function () {
        props.fetchAllDCandidates();
    }, []);

    return (
        <Paper >
            <Grid container>
                <Grid item xs={6}>
                    <DcandidateForm {...({currentId , setCurrentId})} />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.dCandidateList.map((record, index) => {
                                    return (
                                        <TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.bloodGroup}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text" >
                                                    <Button><EditIcon color="primary"
                                                    onClick = {()=> {setCurrentId(record.id)}}/></Button>
                                                    <Button><DeleteIcon color="error"
                                                    onClick = {()=>onDelete(record.id)}/></Button>
                                                </ButtonGroup>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </Paper>
    );

}


const mapStateToProps = state =>({dCandidateList : state.dCandidate.list})
const mapActionToprops = { 
    fetchAllDCandidates : actions.fetchAll,
    deleteDcandidate : actions.Delete
}



    
        



export default connect(mapStateToProps , mapActionToprops)(Dcandidates) ; 