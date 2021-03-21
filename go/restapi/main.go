package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"strconv"

	// "math/rand"
	// "strconv"
	"github.com/gorilla/mux"
)

// Book Struct (Model)
type Book struct {
	ID 		string `json:"id"`
	Isbn	string `json:"isbn"`
	Title   string `json:"title"`
	Author  *Author `json:"author"`
}

// Author Struct
type Author struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

// Init books variable as a slice Book struct
var books []Book

// Get All Books
func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)
}

func getBook(w http.ResponseWriter, r * http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // Get params
	// Loop through books and find with Id
	for _, item := range(books) {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return 
		}
	}
	json.NewEncoder(w).Encode(&Book{})
}

func createBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var book Book
	_ = json.NewDecoder(r.Body).Decode(&book)
	
	book.ID = strconv.Itoa(rand.Intn(10000000)) // Mock ID - not safe 
	books = append(books, book)
	json.NewEncoder(w).Encode(book)
	

}

func updateBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range books {
		if item.ID == params["id"] {
			books = append(books[:index], books[index+1:]...)
			var book Book
			_ = json.NewDecoder(r.Body).Decode(&book)
			
			book.ID = params["id"]
			books = append(books, book)
			json.NewEncoder(w).Encode(book)
			return
		}
	}
	json.NewEncoder(w).Encode(books)
}

func deleteBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for index, item := range books {
		if item.ID == params["id"] {
			books = append(books[:index], books[index+1:]...)
			break
		}
	}
	json.NewEncoder(w).Encode(books)
}



func main() {
	// init router
	r := mux.NewRouter()

	// Mock Data - @todo -implement DB
	books = append(books, Book{ID:"1", Isbn:"2342342", Title: "Book One", Author: &Author{Firstname:"John", Lastname:"Doe"}})
	books = append(books, Book{ID:"2", Isbn:"2342343", Title: "Book Two", Author: &Author{Firstname:"Steve", Lastname:"Smith"}})
	books = append(books, Book{ID:"3", Isbn:"2342344", Title: "Book tree", Author: &Author{Firstname:"tree", Lastname:"trimmin"}})



	// Route Handlers / Endpoints
	r.HandleFunc("/api/books", getBooks).Methods("GET")
	r.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	r.HandleFunc("/api/books", createBook).Methods("POST")
	r.HandleFunc("/api/books/{id}", updateBook).Methods("PUT")
	r.HandleFunc("/api/books/{id}", deleteBook).Methods("DELETE")


	log.Fatal(http.ListenAndServe(":8000", r))

}