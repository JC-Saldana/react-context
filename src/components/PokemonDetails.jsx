import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Container } from '@mui/material';
import { useParams } from 'react-router';
import { getPokemon } from "../services/PokemonService"
import { Link } from 'react-router-dom';

export default function Home() {

    const { name } = useParams()
    const [pokemon, setPokemon] = React.useState(null)

    React.useEffect(() => {
        getPokemon(name).then(pokemon => setPokemon(pokemon))
    }, [])

    return (
        <Container>
            {pokemon &&
                <Card sx={{ maxWidth: 145 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="150"
                            image={pokemon.sprites.front_default}
                            alt="img"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {pokemon.name}
                            </Typography>
                            <p>Games with this pokemon:</p>
                            <Typography variant="body2" color="text.secondary">
                                {pokemon.game_indices.map(game => {
                                    return (
                                        <p>{game.version.name}</p>
                                    )
                                })}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
            <Link to={`/home`} style={{ textDecoration: "none" }}>
                <Button>Go back</Button>
            </Link>
        </Container>
    );
}