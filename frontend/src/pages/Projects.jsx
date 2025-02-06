// Projects.jsx
import React, { useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Button, Select, MenuItem, FormControl } from '@mui/material';
import { motion } from 'framer-motion';

const projectsList = [
  { title: 'Project 1', description: 'Completed project for XYZ Corp', status: 'Completed', year: 2022 },
  { title: 'Project 2', description: 'Ongoing project for ABC Ltd', status: 'Ongoing', year: 2023 },
  { title: 'Project 3', description: 'Completed project for DEF Ltd', status: 'Completed', year: 2021 },
];

const Projects = () => {
  const [statusFilter, setStatusFilter] = useState('');

  const filteredProjects = projectsList.filter(project => 
    statusFilter === '' || project.status === statusFilter
  );

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Our Projects</Typography>
      
      <FormControl fullWidth margin="normal">
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          displayEmpty
          renderValue={(selected) => selected || 'All Projects'}
        >
          <MenuItem value="">All Projects</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Ongoing">Ongoing</MenuItem>
        </Select>
      </FormControl>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Grid container spacing={4}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{project.title}</Typography>
                  <Typography variant="body2">{project.description}</Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
