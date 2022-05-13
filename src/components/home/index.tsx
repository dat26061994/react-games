import React, { useState } from 'react';
import Card from '@mui/material/Card';
import GoogleLogin from 'react-google-login';
import { observer } from "mobx-react-lite";
import { useAuthStore } from '../../store/auth';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import { useCSVReader, usePapaParse } from 'react-papaparse';
import axios from 'axios';

const Home: any = () => {

    const { readString } = usePapaParse();

    const navigate = useNavigate();
    const itemData = [
        {
          img: '/images/tetris.png',
          title: 'Tetris',
          author: '@bkristastucchio',
          rows: 2,
          cols: 2,
          featured: true,
          url: '/games/tetris'
        },
        {
          img: '/images/bg_pokemon.png',
          title: 'Pokemon',
          author: '@rollelflex_graphy726',
          url: '/games/pokemon'
        },
        {
            img: '/images/2048_bg.png',
            title: '2048',
            author: '@rollelflex_graphy726',
            url: '/games/2048'
        },
        {
            img: '/images/bg_snake.png',
            title: 'Snake',
            author: '@rollelflex_graphy726',
            url: '/games/snake'
        },
    ];

    const goToGame = (url: string) => {
      navigate(url);
    }

    const papaConfig = {
        complete: (results: any, file: any) => {
          console.log('Parsing complete:', results, file);
        },
        download: true,
        error: (error: any, file: any) => {
          console.log('Error while parsing:', error, file);
        },
    };

    const handleReadRemoteFile = async () => {
        const response = await axios.get('/data/QuestionSet.csv');

        readString(response.data, {
            header: true,
            worker: true,
            complete: (results: any) => {
              console.log('---------------------------');
              console.log(results);
              console.log('---------------------------');
            },
        });
    };
    
    handleReadRemoteFile();
    
    return (
        <div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                    <div className="flex align-center justify-center">
                        <ImageList>
                            <ImageListItem key="Subheader" cols={3}>
                                <ListSubheader component="div">Games</ListSubheader>
                            </ImageListItem>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                <img
                                    onClick={e => { goToGame(item.url) }}
                                    style={{width: '250px'}}
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={item.author}
                                    actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                    }
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Home);