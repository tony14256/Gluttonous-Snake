import { useState, useEffect } from 'react';
import { createStage } from "../components/helper";




const useStage = (snake: any, point: any) => {
    const [stage, setStage] = useState<any>(createStage());

    useEffect(() => {
        setStage((prev: any) => {
            const newStage = prev.map((row: [], y: number) => {
                return row.map((_, x: number) => {
                    const headPosition = snake.headPosition;
                    if (headPosition.x === x && headPosition.y === y) return 1;
                    if (point.x === x && point.y === y) return 1;
                    return 0;
                })
            })

            snake.body.map((pos: { x: number, y: number }) => {
                newStage[pos.y][pos.x] = 2;
            })
            return newStage;
        })
    }, [snake, point])

    return [stage];
}


export default useStage;