import { useState, useEffect } from 'react';
import { MAX_HEIGHT, MAX_WIDTH } from "../components/helper";


const usePoint = () => {

    const [point, setPoint] = useState({ x: Math.floor(Math.random() * MAX_WIDTH), y: Math.floor(Math.random() * MAX_HEIGHT) })
    const randomPoint = () => {
        setPoint((prev: any) => {
            return { x: Math.floor(Math.random() * MAX_WIDTH), y: Math.floor(Math.random() * MAX_HEIGHT) }
        })
    }
    return [point, randomPoint];
};

export default usePoint;