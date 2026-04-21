package providers

import (
	"fmt"
	"log"
	"jasa-printing-backend/internal/app/models"
	"jasa-printing-backend/internal/config"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDatabase(cfg config.Config) {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Jakarta",
		cfg.DBHost,
		cfg.DBUsername,
		cfg.DBPassword,
		cfg.DBDatabase,
		cfg.DBPort,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}

	log.Println("Database connection established (PostgreSQL)")
	
	// Auto Migrate (Like Laravel Migrations)
	err = db.AutoMigrate(&models.Product{})
	if err != nil {
		log.Printf("Migration failed: %v", err)
	}

	DB = db
}
