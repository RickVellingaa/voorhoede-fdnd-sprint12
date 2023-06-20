import express from "express"
import dotenv from "dotenv"
import fetch from "node-fetch"

dotenv.config()

const server = express()

// Views en public instellen
server.use(express.static("public"))
server.set("view engine", "ejs")
server.set("views", "./views")

// Maak een route voor de index
server.get("/", (request, response) => {

  const searchTerm = request.query.searchbar || ""
  const authorFilter = request.query.authorid

  // Datum filter
  const date = new Date();
  const currentDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

  const dateFrom = request.query.datefrom || "1700-01-01"
  const dateTo = request.query.dateto || currentDate
  const blogAmount = 60
  const sortBy = request.query.sort || "updatedAt_DESC"

  graphQLRequest(
    `query AllBlogPosts($first: IntType, $dateFrom: Date, $dateTo: Date,$authorFilter: [ItemId], $searchbar: String!, $orderBy: [BlogPostModelOrderBy]) {
      allBlogPosts(first: $first, orderBy: $orderBy, filter: { publishDate: { gt: $dateFrom, lt: $dateTo} ,authors: { eq: $authorFilter }, title: { matches: { pattern: $searchbar } } }) {
        title
        authors {
          image {
            url
          }
          name
          id
        }
        publishDate
        introTitle
        slug
      }
    }`, {"orderBy": sortBy, "searchbar": searchTerm, "authorFilter": authorFilter, "dateFrom": dateFrom, "dateTo": dateTo, "first": blogAmount}).then((data) => {
      
      const queryParams = request.originalUrl.slice(request.originalUrl.indexOf('?'));

      const totalBlogs = data.data.allBlogPosts.length // 20

      const huidigePage = parseInt(request.query.page) || 1; // Haalt de huidige pagina op die mee wordt gestuurd wanneer de gebruiker op een volgende pagina klikt
      const aantalBlogs = 10; // Aantal blogs die op 1 pagina te zien zijn

      // Bepaalt de huidige blogs die gezien moeten worden
      const startIndex = (huidigePage - 1) * aantalBlogs;
      const eindIndex = startIndex + aantalBlogs;
      const paginatedBlogs = data.data.allBlogPosts.slice(startIndex, eindIndex);

      const results = paginatedBlogs.length

      // Berekent totaal aan pagina's
      const totaalPagina = Math.ceil(totalBlogs / aantalBlogs);

      response.render('index', {totalBlogs, paginatedBlogs, huidigePage, totaalPagina, results, queryParams });
  })
})

// Stel het poortnummer in en start express
server.set("port", process.env.PORT || 2000)
server.listen(server.get("port"), function () {
  console.log(`Application started on http://localhost:${server.get("port")}`)
})

// Functie GraphQL ophalen
async function graphQLRequest(gql = "", variables = {}) {
  return await fetch("https://graphql.datocms.com", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": '10a0ae10c2d6418c1acd4346de9329',
      },
      body: JSON.stringify({
          query: gql,
          variables,
      }),
  })
      .then(async response => {
        const body = await response.json()
        if (body.errors) {
          throw new Error(JSON.stringify(body.errors, null, 2))
        }
        return body
      })
      .catch(error => console.log(error))
}