import * as React from 'react';
import styled from 'styled-components';

import Rect from './Rect';

import useStage from '../hooks/useStage';
import useSnake from '../hooks/useSnake';
import usePoint from '../hooks/usePoint';




const StyleStage = styled.div`
  position: relative;
  width: 960px;
  height: 400px;
`;

const Stage = () => {

  const [snake, timeGoing, directionChange] = useSnake()
  const [point, randomPoint] = usePoint();
  const [stage] = useStage(snake, point);

  timeGoing(snake, point, randomPoint);

  React.useEffect(() => {
    const keyDown = (e: any) => directionChange(e.code);

    window.addEventListener('keydown', keyDown)
    return () => {
      window.removeEventListener('keydown', keyDown);
    }
  }, [snake])

  return (
    <StyleStage >
      {stage.map((row: any, i: number) =>
        row.map((color: any, j: number) => (
          <Rect
            key={`grid${i}_${j}`}
            pos={{ y: `${i * 20}px`, x: `${j * 20}px` }}
            color={color}
          />
        ))
      )}
    </StyleStage>
  );
};

export default Stage;
