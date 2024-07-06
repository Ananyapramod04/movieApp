
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [rows, setCards] = useState([]);
  var navigate=useNavigate()
  //const[data,setData]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/movies')
      .then((res) => {
      setCards(res.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  //const[data,setData]=useState([]);
  function del_value(a){
    axios.delete('http://localhost:4000/removemovie/'+a).then((res)=>{
      alert('Data deleted')
      window.location.reload()
    })
  }
  function update_value(val){
    navigate('/add',{state:{val}})
  }
  return (
    <Box style ={{background:('darkolivegreen')}}sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {rows.length > 0 ? (
          rows.map((row) => (
            <Grid item xs={12} sm={6} md={4} key={row.id}>
              <Card style={{background:('darkseagreen')}} sx={{ minWidth: 275, marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={row.image}
                  alt={row.movie}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {/* <a href={row.imdb_url} target="_blank" rel="noopener noreferrer">{row.imdb_url}</a> */}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {row.movieName}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description: {row.movieDesc}
                  </Typography>
                  {/* Uncomment if you want to display additional information */}
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Director: {row.movieDir}
                  </Typography>
                  {/* <Typography variant="body2">
                    Actor: {row.movieDir} */}
                    {/* <br />
                    Year: {row.year} */}
                  {/* </Typography> */}
                </CardContent>
                <CardActions>

                  {/* <Button size="small" href={row.imdb_url} target="_blank" rel="noopener noreferrer">Learn More</Button> */}
                  <Button variant='contained' onClick={()=>{
                    update_value(row)
                  }}>update</Button>
                  <Button variant='contained'onClick={()=>
                    del_value(row._id)
                  }>Delete</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              No movies available
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default View;