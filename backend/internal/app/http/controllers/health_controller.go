package controllers

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type HealthController struct {
	Controller
}

func NewHealthController() *HealthController {
	return &HealthController{}
}

func (h *HealthController) Check(ctx *gin.Context) {
	h.JSONResponse(ctx, http.StatusOK, "API is running smoothly", gin.H{
		"status": "UP",
		"version": "1.0.0",
	})
}
