import React from 'react';
import { Typography, Container, Grid, Box, Breadcrumbs, Link, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const servicesList = [
  { name: 'Web Development', description: 'Building scalable and responsive websites.' },
  { name: 'Mobile App Development', description: 'Creating native and cross-platform mobile apps.' },
  { name: 'Digital Marketing', description: 'Helping brands grow through digital strategies.' },
  { name: 'Cloud Solutions', description: 'Implementing cloud infrastructures for business operations.' },
];

const Services = () => {
  return (
    <Container>
      {/* Top Banner */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 116.7,
          backgroundImage: 'url(https://www.your-image-url.com/services-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 2,
          color: 'white',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Services</Typography>
        <Breadcrumbs sx={{ color: 'white' }}>
          <Link href="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Typography>Services</Typography>
        </Breadcrumbs>
      </Box>

      {/* Services Section */}
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>What We Offer</Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We provide top-notch solutions tailored to your business needs.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {servicesList.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                <Card
                  sx={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '10px',
                    boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
                    padding: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="primary" fontWeight="bold">
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
