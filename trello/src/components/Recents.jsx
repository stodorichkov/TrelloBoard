import { CssBaseline, Grid } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Ticket from './Ticket';

const Recents = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('username')) {
          navigate("/login")
        }
    })

    let cards =[]

    const renderCards = () => {
        Object.keys(props.workspaces).map(name => {
            if(props.workspaces[name]["columns"]) {
                props.workspaces[name]["columns"].forEach(column => {
                    if (column["cards"]) {
                        column["cards"].forEach(card => {
                            let data = new Date(card["datetime"])
                            let curDate = new Date
                            let dif = Math.abs(curDate  - data)
                            if (Math.ceil(dif / (1000 * 60 * 60)) <= 24) {
                                cards.push(card)
                            }
                        })
                    }
                })
            }
        })
    }

    return(
        <>
        <CssBaseline />
            <Grid container spacing={4} justifyContent="flex-start" style={{padding: "3%"}}>
                { renderCards() }
                { cards.map(card => <Ticket card={card} key={cards.indexOf(card)}/>) }
            </Grid>
        </>
    )
}

export default Recents