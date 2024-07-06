import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const AddMovie = ({movie}) => {
  const [page,setPage]=useState('Movie')
  const [form,setForm]=useState({
  movieName:'',
  movieDesc:'',
  movieDir:''
 })
 const location=useLocation()
 function valueAdd(){
 // setCount(count+1)
 if(location.state!=null){
  axios.put('http://localhost:4000/editmovie/'+location.state.val._id,form).then((res)=>{
    alert('Data Updated');
  }).catch((error)=>{
console.log(error)
  })
}
else{
  axios.post('http://localhost:4000/addmovie',form).then((res)=>{
    alert('Data added')
  }).catch((error)=>{
    console.log('error found')
  })
}}
function valueCap(e){
  //console.log(e)
  setForm({...form,[e.target.name]:e.target.value})
}

  
useEffect(()=>{
  if(location.state!=null){
    setForm({...form,
      movieName:location.state.val.movieName,
      movieDesc:location.state.val.movieDesc,
      movieDir:location.state.val.movieDir
  })

  }
},[])
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Welcome to {page} Page</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Movie Name"
          name='movieName'
          value={form.movieName}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Movie Description"
          name='movieDesc'
          value={form.movieDesc}
          onChange={valueCap}
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Movie Image"
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Movie Director"
          name='movieDir'
          value={form.movieDir}
          onChange={valueCap}
        />
    </div>
    </Box>
    <Button variant='contained' onClick={valueAdd}> Add</Button>
    </div>
  )
}

export default AddMovie