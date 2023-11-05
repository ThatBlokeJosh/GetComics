package server

import (
	"encoding/json"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
  "github.com/BenLubar/htmlcleaner"

  "comics/utils"
)

type Req struct {
  Title map[string]string
  Content map[string]interface{}
  Media string `json:"jetpack_featured_media_url"`
  Slug string `json:"slug"`
}

type Comic struct {
  Title string
  Url string
  Download string
  Media string
}

func Search(c *fiber.Ctx) error {
  q := c.Query("q")
  p := c.Query("p", "1")

  agent := fiber.Get("https://getcomics.org/wp-json/wp/v2/posts/?search=" + q + "&per_page=12&page=" + p)
  _, body, _ := agent.Bytes()

  var resp []Req
  err := json.Unmarshal(body, &resp)

  if err != nil {
    log.Println(err)
  }

  var comics []Comic

  for i := range resp {
    url := utils.Html(resp[i].Content["rendered"].(string))
    if url != "" {
      title := htmlcleaner.Clean(nil , resp[i].Title["rendered"])
      d := "/api/download/?url=" + url + "&name=" + resp[i].Slug
      comics = append(comics, Comic{Title: title, Url: url, Download: d, Media: resp[i].Media})
    }
  }

  return c.JSON(comics)
}

func Download (c *fiber.Ctx) error {
  u := c.Query("url")
  n := c.Query("name")
  utils.Wget(u, n)
  return c.SendStatus(200)
}

func Listen() {
  
  app := fiber.New()
	
  app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

  app.Static("/", "views")

  api := app.Group("/api")

  api.Get("/search", Search)
  api.Get("/download", Download)

  app.Listen(":3137")
}
