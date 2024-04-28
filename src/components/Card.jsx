
import PropTypes from 'prop-types';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

function BasicCard({ name, tech, img, githublink, websitelink, disabled }) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm">{tech}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={img}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <a href={githublink}>
          <Button
            variant="outlined"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ alignSelf: 'center', fontWeight: 600 }}
          >
            GitHub
          </Button>
        </a>
        <a href={websitelink}>
          <Button
            variant="solid"
            size="md"
            color="primary"
            disabled={disabled}
            aria-label="Explore Bahamas Islands"
            sx={{ alignSelf: 'center', fontWeight: 600 }}
          >
            Website
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}

BasicCard.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  githublink: PropTypes.string.isRequired,
  websitelink: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default BasicCard;
