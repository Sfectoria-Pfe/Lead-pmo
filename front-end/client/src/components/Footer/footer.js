import React from 'react';
import { Typography, Link, Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    padding: '20px 0',
    textAlign: 'center',
  },
  footerText: {
    marginBottom: 10,
  },
  heartIcon: {
    color: 'red',
    verticalAlign: 'middle',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" className={classes.footerText}>
          © {new Date().getFullYear()} Mon Application. Tous droits réservés.
        </Typography>
        <Typography variant="body2" className={classes.footerText}>
          Réalisé avec <span className={classes.heartIcon}>❤️</span> par {' '}
          <Link href="https://example.com" target="_blank" rel="noopener" className={classes.link}>
            Votre Nom
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
