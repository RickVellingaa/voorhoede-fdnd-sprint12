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
  console.log(authorFilter);

  graphQLRequest(
    `query AllBlogPosts($authorFilter: [ItemId], $searchbar: String!, $orderBy: [BlogPostModelOrderBy]) {
      allBlogPosts(orderBy: $orderBy, filter: { authors: { eq: $authorFilter }, title: { matches: { pattern: $searchbar } } }) {
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
    }`, {"orderBy": "updatedAt_DESC", "searchbar": searchTerm, "authorFilter": authorFilter}).then((data) => {
      response.render('index', { posts: data.data.allBlogPosts });
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