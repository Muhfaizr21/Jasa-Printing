package controllers

import (
	"github.com/gin-gonic/gin"
)

type Controller struct{}

func (c *Controller) JSONResponse(ctx *gin.Context, status int, message string, data interface{}) {
	ctx.JSON(status, gin.H{
		"message": message,
		"data":    data,
	})
}
