import React, { createContext, useState } from 'react'

const PlantContext = createContext()
const PlantProvider = ({ children }) => {

    const [plants, setPlants] = useState([]);

    const addPlant = (plant) => {
        setPlants((prevPlants) => [...prevPlants, plant])
    }
    return (
        <PlantContext.Provider value={{ plants, addPlant }}>
            {children}
        </PlantContext.Provider>
    )
}

export { PlantContext, PlantProvider }