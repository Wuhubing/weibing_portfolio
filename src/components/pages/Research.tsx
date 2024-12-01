import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Card, CardHeader, CardMedia, CardContent, 
  CardActions, Collapse, IconButton, Typography,
  Container, Grid
} from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import ArticleIcon from '@mui/icons-material/Article';
import '../../styles/Research.css';
import { ThemeContext } from '../../contexts/theme';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const researchProjects = [
  {
    title: "Siamese-SNN Framework for ECG Classification",
    advisor: "Independent Research",
    period: "2023",
    description: "A novel ECG classification framework combining Siamese Neural Networks and Spiking Neural Networks for automatic arrhythmia detection, achieving high accuracy while reducing computational overhead.",
    highlights: [
      "Developed a hybrid neural network framework combining Siamese and Spiking architectures, achieving 97.8% ECG classification accuracy with 35% reduced computational overhead"
    ],
    image: `${process.env.PUBLIC_URL}/ecg.png`,
    links: {
      paper: `${process.env.PUBLIC_URL}/ECG_Classification_with_Siamese_Neural_Network.pdf`,
      github: "https://github.com/Wuhubing/Siamese-SNN-ECG"
    },
    techStack: [
      "Python 3.8+",
      "PyTorch 1.8+",
      "NumPy",
      "scikit-learn",
      "wfdb"
    ]
  },
  {
    title: "Apple Silicon ML Benchmarks",
    advisor: "Independent Research",
    period: "2024",
    description: "A comprehensive benchmarking and optimization framework for evaluating deep learning model performance on Apple Silicon, focusing on MobileNetV2 deployment across different compute unit configurations.",
    highlights: [
      "Developed a systematic framework for evaluating ML model performance across different Apple Silicon compute units (CPU, GPU, Neural Engine), providing optimization strategies for various deployment scenarios"
    ],
    image: `${process.env.PUBLIC_URL}/apple-silicon.png`,
    links: {
      paper: `${process.env.PUBLIC_URL}/Apple_edge.pdf`,
      github: "https://github.com/Wuhubing/apple-silicon-ml-benchmarks"
    },
    techStack: [
      "Python 3.8+",
      "TensorFlow 2.12+",
      "CoreML Tools",
      "NumPy",
      "Matplotlib"
    ]
  }
];

const Research: React.FC = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  const handleExpandClick = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section className={`research-section ${themeName}`} id="research">
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          component="h1" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 700,
            mb: 4,
            fontSize: { xs: '2rem', md: '2.5rem' },
            color: 'var(--text-primary)'
          }}
        >
          Papers
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {researchProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  maxWidth: 393,
                  margin: 'auto',
                  borderRadius: 2,
                  backgroundColor: 'var(--clr-bg-alt)',
                  border: '1px solid var(--clr-border)',
                  boxShadow: '4px 5px 4px 3px var(--clr-shadow)',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, height 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '6px 7px 6px 5px var(--clr-shadow)'
                  }
                }}
              >
                <CardHeader
                  title={
                    <Typography 
                      variant="h6" 
                      component="h2" 
                      sx={{ 
                        fontWeight: 600,
                        height: 60,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        color: 'var(--clr-fg)'
                      }}
                    >
                      {project.title}
                    </Typography>
                  }
                  subheader={
                    <Typography 
                      variant="subtitle2" 
                      sx={{
                        height: 24,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        color: 'var(--clr-fg-alt)'
                      }}
                    >
                      {project.advisor} • {project.period}
                    </Typography>
                  }
                  sx={{
                    pb: 1,
                    height: 100,
                    '& .MuiCardHeader-content': {
                      overflow: 'hidden'
                    }
                  }}
                />
                <CardMedia
                  component="img"
                  height="295"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    width: '100%',
                    height: 295,
                  }}
                />
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    pt: 2,
                    height: expandedId === index ? 'auto' : 120,
                    overflow: expandedId === index ? 'visible' : 'hidden'
                  }}
                >
                  <Typography 
                    variant="body2"
                    sx={{
                      display: expandedId === index ? 'block' : '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: expandedId === index ? 'visible' : 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: 1.6,
                      color: 'var(--clr-fg-alt)'
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions 
                  disableSpacing 
                  sx={{ 
                    borderTop: '1px solid var(--clr-border)',
                    px: 2 
                  }}
                >
                  {project.links.paper && (
                    <>
                      <IconButton 
                        aria-label="download paper"
                        href={project.links.paper}
                        download
                        sx={{
                          color: 'primary.main',
                          '&:hover': { color: 'primary.dark' }
                        }}
                      >
                        <GetAppIcon />
                      </IconButton>
                      <IconButton 
                        aria-label="view paper"
                        href={project.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'primary.main',
                          '&:hover': { color: 'primary.dark' }
                        }}
                      >
                        <ArticleIcon />
                      </IconButton>
                    </>
                  )}
                  {project.links.github && (
                    <IconButton
                      aria-label="github repository"
                      href={project.links.github}
                      target="_blank"
                      sx={{
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                  <ExpandMore
                    expand={expandedId === index}
                    onClick={() => handleExpandClick(index)}
                    aria-expanded={expandedId === index}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                  <CardContent 
                    sx={{ 
                      pt: 0,
                      borderTop: '1px solid var(--clr-border)',
                      mt: 2
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      gutterBottom 
                      sx={{ 
                        fontWeight: 600,
                        color: 'var(--clr-fg)'
                      }}
                    >
                      Highlights
                    </Typography>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>
                          <Typography 
                            variant="body2" 
                            sx={{ 
                              mb: 1,
                              lineHeight: 1.6,
                              color: 'var(--clr-fg-alt)'
                            }}
                          >
                            {highlight}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Research;