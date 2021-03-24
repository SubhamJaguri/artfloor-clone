import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './TopHeader.css'
import PersonIcon from '@material-ui/icons/Person'
import PublicIcon from '@material-ui/icons/Public'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '1080px',
    margin: '0 auto',
    height: '100%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function TopHeader() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className='top_header_links'>
        <div className='cart'>
          <LocalMallOutlinedIcon />
        </div>
        <div className='user'>
          <PersonIcon />
        </div>
        <div className='globe'>
          <PublicIcon />
        </div>
        <div className='languages'>
          <a href='/' className='language_link active'>
            En
          </a>
          <a href='/' className='language_link'>
            Fr
          </a>
        </div>
      </div>
    </div>
  )
}
