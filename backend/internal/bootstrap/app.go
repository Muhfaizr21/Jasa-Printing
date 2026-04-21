package bootstrap

import (
	"log"
	"github.com/gin-gonic/gin"
	"jasa-printing-backend/internal/app/providers"
	"jasa-printing-backend/internal/config"
	"jasa-printing-backend/routes"
)

type Application struct {
	Config config.Config
	Engine *gin.Engine
}

func Bootstrap() *Application {
	// Load config
	appConfig, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("Could not load config: %v", err)
	}

	// Initialize Gin
	if appConfig.AppEnv == "production" {
		gin.SetMode(gin.ReleaseMode)
	}
	r := gin.Default()

	// Initialize Database
	providers.InitDatabase(appConfig)

	// Setup routes
	routes.SetupRoutes(r)

	return &Application{
		Config: appConfig,
		Engine: r,
	}
}

func (app *Application) Run() {
	port := app.Config.AppPort
	if port == "" {
		port = "8080"
	}
	log.Printf("Server starting on port %s", port)
	app.Engine.Run(":" + port)
}
