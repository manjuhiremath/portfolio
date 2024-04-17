
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

 
export default function BasicCard(props) {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{props.name}</Typography>
        <Typography level="body-sm">{props.tech}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={props.img}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        {/* <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $2,900
          </Typography>
        </div> */}
        <a href={props.githublink}><Button
          variant="outlined"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ alignSelf: 'center', fontWeight: 600 }}
        >
          GitHub
          
        </Button></a>
        <a href={props.websitelink}>
        <Button
          variant="solid"
          size="md"
          color="primary"
          disabled={props.disabled}
          aria-label="Explore Bahamas Islands"
          sx={{alignSelf: 'center', fontWeight: 600 }}
        >
          Website
        </Button></a>
      </CardContent>
    </Card>
  );
}
