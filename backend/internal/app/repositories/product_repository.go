package repositories

import (
	"jasa-printing-backend/internal/app/models"
	"jasa-printing-backend/internal/app/providers"
)

type ProductRepository struct{}

func NewProductRepository() *ProductRepository {
	return &ProductRepository{}
}

func (r *ProductRepository) GetAll() ([]models.Product, error) {
	var products []models.Product
	err := providers.DB.Find(&products).Error
	return products, err
}

func (r *ProductRepository) GetByID(id uint) (models.Product, error) {
	var product models.Product
	err := providers.DB.First(&product, id).Error
	return product, err
}
