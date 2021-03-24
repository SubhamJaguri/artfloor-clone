import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import './ImageGallery.css'
import CustomCard from './CustomCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '24px',
  },
  gridList: {
    width: '100%',
    margin: '1rem',
  },
}))

export default function ImageGallery() {
  const classes = useStyles()

  const tileData = [
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Richter-potsdam-artfloor_1.jpg',
      cols: 2,
      rows: 2,
      captionsText: {
        title: 'THE MET BREUER - N.Y',
        subtitle: 'GERHARD RICHTER',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Drunk-Faces-by-Laplanche.jpg',
      cols: 1,
      rows: 1,
      captionsText: {
        title: 'Drunk Faces',
        subtitle: 'by Laplanche',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/333-homesmallbanner-richard_1.jpg',
      cols: 1,
      rows: 1,
      captionsText: {
        title: 'New Works by',
        subtitle: 'Willy bo Richardson',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Homepage-loisel-abstract-turquoise-100x100_1.jpg',
      cols: 1,
      rows: 1,
      captionsText: {
        title: 'Abstraci Elegance',
        subtitle: 'by Severine Loisel',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/olivas_1.jpg',
      cols: 1,
      rows: 1,
      captionsText: {
        title: 'Title',
        subtitle: 'Subtitle',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Hybl.jpg',
      cols: 2,
      rows: 2,
      captionsText: {
        title: 'Californian Abstracted Landscapes',
        subtitle: 'by Heidi Hybl',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Bordereau-sq.jpg',
      cols: 1,
      rows: 1,
      captionsText: {
        title: 'B&W Nudes',
        subtitle: 'by Franck Olivas',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Limitededition_1.jpg',
      cols: 2,
      rows: 2,
      captionsText: {
        title: 'Title',
        subtitle: 'Subtitle',
      },
    },
    {
      imgSrc:
        'https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Francois-morellet-diabeacon-small.jpg',
      cols: 2,
      rows: 2,
      captionsText: {
        title: 'Title',
        subtitle: 'Subtitle',
      },
    },
  ]

  return (
    <div className={classes.root}>
      <div className='galarySection'>
        <div className='images-wrapper'>
          {tileData.map((tile) => (
            <div className='img bottom_triangle' key={tile.imgSrc}>
              <img
                className='tile_image'
                src={tile.imgSrc}
                alt={tile.captionsText.title}
              />
              <CustomCard caption={tile.captionsText} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
