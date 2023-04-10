package main // import "github.com/docker/docker/pkg/namesgenerator"

import (
	"bufio"
	"math/rand"
	"os"
)

func readLines(path string) ([]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var lines []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		lines = append(lines, scanner.Text())
	}
	return lines, scanner.Err()
}

func GetRandomName(left []string, right []string, separator string) string {
	name := left[rand.Intn(len(left))] + separator + right[rand.Intn(len(right))] //nolint:gosec // G404: Use of weak random number generator (math/rand instead of crypto/rand)
	return name
}

func main() {
	left, _ := readLines("animals.txt")
	vehicles, _ := readLines("vehicles.txt")
	weapons, _ := readLines("weapons.txt")
	right := append(vehicles, weapons...)
	name := GetRandomName(left, right, " ")
	print(name + "\n")
}
