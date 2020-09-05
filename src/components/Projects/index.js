import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProjectCard from './card.js'

import './style.css'

function projects() {
    return (
        <div className="projects">
            <div className="projects__header">RECENT <span>PROJECTS</span></div>
      <Grid container spacing={3}>
        
        <Grid item xs={6} sm={4}>
        <ProjectCard  style={{padding: "spacing(2)", textAlign: "center", color: "gray"}}/>
        </Grid>
        <Grid item xs={6} sm={4}>
        <ProjectCard  style={{padding: "spacing(2)", textAlign: "center", color: "gray"}}/>
          
        </Grid>
        <Grid item xs={6} sm={4}>
        <ProjectCard  style={{padding: "spacing(2)", textAlign: "center", color: "gray"}}/>

        </Grid>
        
      </Grid>
    </div>
    )
}

export default projects
