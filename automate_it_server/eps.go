package main

import (
	"context"
	"log"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func SignUpUser(db *mongo.Database, user *User) bool {
	status := true
	_, err := db.Collection("PersonalDetails").InsertOne(
		context.TODO(), user,
	)
	if err != nil {
		log.Printf(err.Error())
		status = false
	} else {
		log.Printf("Success")
		status = true
	}
	return status
}

func UnRegUser(db *mongo.Database, user *User) bool {
	status := true
	log.Println("Unregister User")
	_, err := db.Collection("PersonalDetails").DeleteOne(
		context.TODO(), &fiber.Map{
			"email":    user.Email,
			"password": user.Password,
		},
	)
	if err != nil {
		log.Printf(err.Error())
		status = false
	} else {
		log.Printf("Success")
		status = true
	}
	return status
}

func UpdateUser(db *mongo.Database, user *User) bool {
	status := true

	filter := bson.M{
		"email": user.Email,
	}

	update := bson.M{
		"$set": bson.M{
			"channels": user.Channels,
		},
	}

	_, err := db.Collection("PersonalDetails").UpdateOne(
		context.Background(),
		filter,
		update,
	)
	if err != nil {
		log.Printf(err.Error())
		status = false
	} else {
		log.Printf("Success")
		status = true
	}
	return status
}

func FindUser(db *mongo.Database, user *User) bool {

	status := true
	resp, err := db.Collection("PersonalDetails").
		Find(context.TODO(), bson.M{})
	if err != nil {
		log.Printf(err.Error())
		status = false
	} else {
		status = true
	}
	for resp.Next(context.TODO()) {
		var userTemp User
		err := resp.Decode(&userTemp)
		if err != nil {
			log.Fatal(err)
		}
		if userTemp.Password == user.Password && user.Email == userTemp.Email {
			status = true
			return status
		}
	}
	status = false
	return status
}

func GetUserDetails(db *mongo.Database, email string) User {
	resp := db.Collection("PersonalDetails").FindOne(context.TODO(), bson.M{"email": email})
	var userInformation User
	resp.Decode(&userInformation)
	userInformation.Password = ""
	return userInformation
}

func splice(array []string, nameToRem string) []string {
	index := 0
	for i := 0; i < len(array); i++ {
		if nameToRem == array[i] {
			index = i
			break
		}
	}
	return append(array[:index], array[index+1:]...)
}
