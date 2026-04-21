package routes

import (
	"github.com/gin-gonic/gin"
	"jasa-printing-backend/internal/app/http/controllers"
)

func SetupRoutes(r *gin.Engine) {
	// Group API routes
	api := r.Group("/api")
	{
		healthController := controllers.NewHealthController()
		api.GET("/health", healthController.Check)

		// Add more routes here, like Laravel's routes/api.php
		// v1 := api.Group("/v1")
		// {
		//     productController := controllers.NewProductController()
		//     v1.GET("/products", productController.Index)
		// }
	}
}
