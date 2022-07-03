package main

type User struct {
	Name         string
	Email        string
	Password     string
	ProfileImage string
	Channels     []Channel
}

type Channel struct {
	Name   string
	Number string
}
