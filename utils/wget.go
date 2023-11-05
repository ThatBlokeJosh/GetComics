package utils

import (
  "github.com/abdfnx/gosh"
  "strings"
)

func Wget(url string, name string) {
  nameArr := strings.Split(name, "-")
  var fName string = ""
  
  for i := range nameArr {
    if i != len(nameArr) - 2 {
      fName += nameArr[i]
    }
  }

  gosh.Run(`wget -c "` + url + `" -P ./files/` + fName)
}
