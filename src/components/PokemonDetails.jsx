import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { getPokemon } from "../services/BeerService"
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {

  const test = React.useParams()
  console.log(test)

    return (
        <Container>
            <Grid container spacing={2} pt={4}>
              
            </Grid>
        </Container>
    );
}