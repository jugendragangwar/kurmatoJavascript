function randomSlot(){
    const array = Array(100).fill(1).map((n, i) => n + i)
    const randomElement1 =Math.floor(100000+Math.random() * 900000)
    const randomElement = array[Math.floor(Math.random() * array.length)]
    console.log(`This is a random slot number for a car = ${randomElement}`);
    console.log(`This is a random ID   for a car = ${randomElement1}`)
    }
    randomSlot()
    