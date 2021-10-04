import { SearchOutlined } from '@mui/icons-material'
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react';
import useStyle from './style'

function Header() {
    const classes = useStyle()
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new Places
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchOutlined />
                            </div>
                            <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputInput}} />
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
