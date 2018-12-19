//changed all y values in for loop to x values, commented out "let y = 1"

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
//let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}