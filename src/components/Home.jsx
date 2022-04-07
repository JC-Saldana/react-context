import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, FormControl, Input, InputLabel, Paper } from '@mui/material';
import { usePokemon } from "../contexts/PokemonContext"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { getPokemon } from "../services/PokemonService"

export default function Home() {

    const [pokemon, setPokemon] = React.useState(null)
    const [cards, setCards] = usePokemon()

    const handleChange = (e) => {
        if (e.target.value.length) {
            getPokemon(e.target.value).then(pokemon => {
                if (pokemon) {
                    setPokemon(pokemon)
                    console.log(pokemon)
                }
            })
        }
    }

    const addCard = () => {
        setCards([...cards, pokemon])
    }

    return (
        <Container>
            <Grid container spacing={2} pt={4}>
                <Grid item xs={4}>
                    <Paper>
                        <FormControl>
                            <InputLabel htmlFor="Name">Pokemon<sub> exact name</sub> </InputLabel>
                            <Input id="Name" name="name" aria-describedby="my-helper-text" onChange={handleChange} />
                        </FormControl>
                        <br /><br />
                        <button onClick={addCard}>Add Card</button>
                        {!pokemon && <p>Search for a pokemon exact name, like pikachu or ditto</p>}
                        {pokemon && <>
                            <h1>{pokemon.name}</h1>
                            <h3>- Stats - </h3>
                            {pokemon.stats.map(stat => {
                                return (
                                    <p>{stat.stat.name}: {stat.base_stat}</p>
                                )
                            })}
                            <h3>- Regular - </h3>
                            <img src={pokemon.sprites.front_default} />
                            <h3>- Shiny - </h3>
                            <img src={pokemon.sprites.front_shiny} />
                            <p>Name: {pokemon.name}</p>
                            <p>Name: {pokemon.name}</p>
                            <p>Name: {pokemon.name}</p>
                            <br /><br />
                        </>}
                    </Paper>
                </Grid>
                {cards.length ?
                    cards.map(({ name, stats, sprites }) => (
                        <Grid item xs={2}>
                            <Card sx={{ maxWidth: 145 }}>
                                <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={sprites.front_default}
                                            alt="img"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {stats[0].base_stat}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    )) :
                    <Box sx={{ display: 'flex' }} m={2}>
                        <p>You need to add a card...</p>
                    </Box>
                }
            </Grid>
        </Container>
    );
}