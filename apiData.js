function creatSTockData() {
    return{
        name: 'GKTECK' ,
        sym: 'GKT' ,
        price: Number((Math.random() * 5 ).toFixed(2)),
        time: new Date().toLocaleTimeString(),
        location: 'Nigeria'
    }
}

export { creatSTockData }