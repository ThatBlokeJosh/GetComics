package utils

import (
  "golang.org/x/net/html"
  "strings"
  "log"
)


func In(a string, list []string) bool {
    for _, b := range list {
        if b == a {
            return true
        }
    }
    return false
}

func Html(s string) string {
  var sources []string = []string{"fs2.comic", "ten.comic", "eight.com", "fs1.comic", "twlv.comi", "six.comic", "seven.com", "nine.comi"}
  doc, err := html.Parse(strings.NewReader(s))
  var href string
	if err != nil {
		log.Println(err)
	}
	var f func(*html.Node)
	f = func(n *html.Node) {
    if href == "" {
		if n.Type == html.ElementNode && n.Data == "a" {
			for _, a := range n.Attr {
        if a.Key == "href" && len(a.Val) > 20 && In(a.Val[8:17], sources) {
					href = a.Val
				}
			}
		}
		for c := n.FirstChild; c != nil; c = c.NextSibling {
      f(c)
		}}
	}
  f(doc)
  return href
}
