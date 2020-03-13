import { useState, useEffect } from 'react';

import { MAX_HEIGHT, MAX_WIDTH, fourDirection, codes } from "../components/helper";


const defaultSnake: any = {
    headPosition: { x: 30, y: 0, },
    body: [
        { x: 29, y: 0, },
        { x: 28, y: 0, },
        { x: 27, y: 0, },
        { x: 26, y: 0, },
    ],
    maxLength: 8,
    direction: { x: 1, y: 0 },
    speed: 100,
}


const useSnake = () => {
    const [snake, setSnake] = useState(defaultSnake);


    const timeGoing = (player: any, point: { x: number, y: number }, randomPoint: () => void) => {
        useEffect(() => {

            const interval = window.setInterval(() => {

                setSnake((prev: any) => {
                    const headPosition = { x: prev.headPosition.x + prev.direction.x, y: prev.headPosition.y + prev.direction.y };

                    if (headPosition.x >= MAX_WIDTH) headPosition.x = 0;
                    if (headPosition.x < 0) headPosition.x = MAX_WIDTH - 1;
                    if (headPosition.y >= MAX_HEIGHT) headPosition.y = 0;
                    if (headPosition.y < 0) headPosition.y = MAX_HEIGHT - 1;

                    const neweBody = [...prev.body];
                    if (headPosition.x !== point.x || headPosition.y !== point.y || prev.body.length === prev.maxLength) neweBody.pop();
                    else {
                        randomPoint();
                    }
                    neweBody.unshift(prev.headPosition);

                    return { ...prev, headPosition: headPosition, body: [...neweBody] }
                })

            }, player.speed)

            return () => { window.clearInterval(interval) }
        }, [player])
    }


    const directionChange = (code: string) => {
        if (codes.indexOf(code) !== -1) {
            if (snake.direction.x * -1 !== fourDirection[code].x || snake.direction.y * -1 !== fourDirection[code].y) {
                if (snake.direction.x !== fourDirection[code].x || snake.direction.y !== fourDirection[code].y) {
                    setSnake((prev: { x: number, y: number }) => {
                        return { ...prev, direction: { ...fourDirection[code] } };
                    })
                }
            }


        }

    }


    return [snake, timeGoing, directionChange];
}


export default useSnake;