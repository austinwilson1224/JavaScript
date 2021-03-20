package main 

import (
	"fmt"
	"errors"
	"math"
)


type person struct {
	name string
	age int
}

func inc(x *int) {
	*x++
}

func main() {


	// pointers
	fmt.Println()
	fmt.Println()
	i := 7
	inc(&i)
	fmt.Println(i)
	fmt.Println(&i)

	p := person{name:"Austin", age: 27}
	fmt.Println(p)
	fmt.Println()
	//fmt.Println("hello")
	var test1 int = 0
	var test2 int = 2
	var sum1 int = test1 + test2
	fmt.Println(sum1)
	x := 3
	y := 2
	sum := x + y
	if sum > 2 {
		fmt.Println(sum)
	} else if sum < 2 {
		fmt.Println(sum)
	} else {
		fmt.Println(sum)
	}

	// arrays 
	var a [5]int
	a[2] = 7
	fmt.Println(a[2])
	b := [5]int{1,2,3,4,5}
	fmt.Print(b)
	c := []int{1,2,3}
	c = append(c, 1)
	fmt.Print(c)



	// maps 
	verticies := make(map[string]int)

	verticies["triangle"] = 2
	verticies["square"] = 3
	verticies["dodecagon"] = 12
	delete(verticies,"square")

	fmt.Print(verticies)


	for i := 0; i < 5; i++ {
		fmt.Print(i)
	}

	// for is also a while loop
	j := 0 
	for j < 5 {
		fmt.Print(j)
		j++
	}

	arr := []string{"Austiini", "John", "Wilson"}
	for index, value := range(arr) {
		fmt.Print(index)
		fmt.Println(value)
	}

	map2 := make(map[string]string)
	map2["0"] = "value0"
	map2["1"] = "value1"

	for index, value := range map2 {
		fmt.Print(index)
		fmt.Println(value)
	}

	result, err := sqrt(-16)

	if err != nil {
		fmt.Println(err)
	} else {
		fmt.Println(result)
	}
}


func sum(x int, y int) int {
	return x + y
}

func sqrt(x float64) (float64, error) {
	if x < 0 {
		return 0, errors.New("undefined for negative numbers")
	}
	return math.Sqrt(x), nil
}