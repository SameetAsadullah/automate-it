package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"os/signal"

	"github.com/gofiber/fiber/v2"
	"github.com/qinains/fastergoding"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

const connectionString = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const currentDB = "automateitdb"
const Success = 200
const NotAcceptable = 406

func main() {
	fastergoding.Run()

	var ServerOK = false
	log.Print("> Starting the AutomateIt Servers...")

	server := fiber.New()

	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		_ = <-c
		fmt.Println("\nShutdown Command in progress...")
		_ = server.Shutdown()
	}()

	log.Print("> Server Loaded")

	log.Print("> Connecting to Databases...")

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(connectionString))

	if err != nil {
		log.Print("> Connection Failed")
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			log.Print("> Connection attempt failed, Disconnecting.")
		}
	}()

	if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		log.Print("> Cannot Ping")
	} else {
		ServerOK = true
	}

	if ServerOK {
		fmt.Println("Successfully connected and pinged.")
	}

	// Root API
	server.Get("/", func(c *fiber.Ctx) error {
		if ServerOK {
			return c.Render("./index.html", nil, "")
		}
		return c.SendString("System not OK ...")
	})

	server.Get("/test", func(c *fiber.Ctx) error {
		log.Println("Tested")
		return c.SendString("Test Successful")
	})

	// -----------------------------------------------------------------

	// User SignUp API
	server.Post("/register", func(c *fiber.Ctx) error {
		userData := &User{}
		json.Unmarshal(c.Body(), &userData)

		if SignUpUser(client.Database(currentDB), userData) {
			return c.SendStatus(Success)
		}
		return c.SendStatus(NotAcceptable)
	})

	// User unregister API
	server.Post("/unregister", func(c *fiber.Ctx) error {
		userData := &User{}
		json.Unmarshal(c.Body(), userData)
		if UnRegUser(client.Database(currentDB), userData) {
			return c.SendStatus(Success)
		}
		return c.SendStatus(NotAcceptable)
	})

	server.Post("/getuserinfo", func(c *fiber.Ctx) error {
		userData := &User{}
		json.Unmarshal(c.Body(), userData)
		return c.JSON(GetUserDetails(client.Database(currentDB), userData.Email))
	})

	server.Post("/login", func(c *fiber.Ctx) error {
		userData := &User{}
		json.Unmarshal(c.Body(), userData)

		if FindUser(client.Database(currentDB), userData) {
			// Token will be given
			return c.SendStatus(Success)
		} else {
			return c.SendStatus(NotAcceptable)
		}
	})

	server.Post("/logout", func(c *fiber.Ctx) error {
		userData := &User{}
		json.Unmarshal(c.Body(), userData)
		if FindUser(client.Database(currentDB), userData) {
			// Token will be revoked
			return c.SendStatus(Success)
		}
		return c.SendStatus(NotAcceptable)
	})

	server.Post("/updateuser", func(c *fiber.Ctx) error {
		userData := &User{}
		json.Unmarshal(c.Body(), userData)
		if UpdateUser(client.Database(currentDB), userData) {
			return c.SendStatus(Success)
		}
		return c.SendStatus(NotAcceptable)
	})

	server.Static("/", "./public")
	server.Listen(":3000")

}
