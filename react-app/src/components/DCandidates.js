import { Grid , Paper , Table , TableContainer , TableHead ,TableRow , TableCell ,TableBody , withStyles} from "@material-ui/core";
import React ,{ useEffect} from "react";
import {connect} from "react-redux"
import * as actions from "../actions/dCandidate"
import DcandidateForm from "./DCandidateForm";


const Dcandidates=({classes, ...props})=> {

    useEffect(function () {
        props.fetchAllDCandidates();
    }, []);

    return (
        <Paper >
            <Grid container>
                <Grid item xs={6}>
                    <DcandidateForm />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow >
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Blood Group</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.dCandidateList.map((record, index) => {
                                    return (
                                        <TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.bloodGroup}</TableCell>
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
const mapActionToprops = { fetchAllDCandidates : actions.fetchAll}



    
        



export default connect(mapStateToProps , mapActionToprops)(Dcandidates) ; 