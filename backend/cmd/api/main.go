package main

import (
	"jasa-printing-backend/internal/bootstrap"
)

func main() {
	app := bootstrap.Bootstrap()
	app.Run()
}
