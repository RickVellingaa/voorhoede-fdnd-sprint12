import express, { response } from 'express'
import axios from 'axios'

const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))


app.get('/', async (req, res) => {
  try {
    const query = `
    query AllBlogPosts {
      allBlogPosts {
        title
        authors {
          image {
            url
          }
          name
        }
        publishDate
      }
    }
    `;
    
    const variables = {
      query: ''
    };

    const response = await axios.post('https://graphql.datocms.com/', JSON.stringify({
      query,
      variables
    }), {
      headers: {
        Authorization: '10a0ae10c2d6418c1acd4346de9329'
      }
    });

    const data = response.data.data;
    console.log(data);

    res.render('index', { data });
  } catch (error) {

  }
});

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})