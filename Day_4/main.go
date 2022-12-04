package main

import (
	"bufio"
	"fmt"
	"os"
	"regexp"
	"strconv"
)

func main() {

	file, err := os.Open("./input.txt")

	if err != nil {
		panic(err)
	}

	defer file.Close()

	scanner := bufio.NewScanner(file)

	count_1 := 0
	count_2 := 0
	re := regexp.MustCompile(",|-")

	for scanner.Scan() {
		text := scanner.Text()
		split := re.Split(text, -1)
		values := []int{}

		for _, num := range split {
			numAsInt, _ := strconv.Atoi(num)
			values = append(values, numAsInt)
		}

		if (values[0] >= values[2] && values[1] <= values[3]) || (values[2] >= values[0] && values[3] <= values[1]) {
			count_1++
		}

		if (values[0] >= values[2] && values[0] <= values[3]) || (values[1] >= values[2] && values[1] <= values[3]) || (values[2] >= values[0] && values[2] <= values[1]) || (values[3] >= values[0] && values[3] <= values[1]) {
			count_2++
		}
	}

	fmt.Println(count_1)
	fmt.Println(count_2)

}
