import React from 'react';
import {Composition} from 'remotion';
import {AdVideo} from './AdVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="AdVideo"
        component={AdVideo}
        durationInFrames={630}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};