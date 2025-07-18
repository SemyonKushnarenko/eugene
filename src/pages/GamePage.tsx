import { useAtomValue } from 'jotai';
import MapContainer from '../components/Map/MapContainer';
import PanoramaV2 from '../components/Map/PanoramaV2';
import { canPlayAtom, imageLoadedAtom, panoramaLoadedAtom } from '../store/gameAtoms';
import TimeStop from '../components/Map/TimeStop';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './GamePageTransition.css';
import { useEffect, useRef, useState } from 'react';
import { wait } from '../shared/utils/wait';
import Loader from '../components/Loader';

const GamePage = () => {
  const canPlay = useAtomValue(canPlayAtom)
  const nodeRef = useRef(null);
  const loadImg = useAtomValue(imageLoadedAtom)
  const loadPanorama = useAtomValue(panoramaLoadedAtom)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loading() {
        await wait(2000)
        setIsLoading(false)
    }
      loading()
  }, [loadImg, loadPanorama])

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isLoading ? 'play' : 'stop'}
        timeout={400}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
    {isLoading ? <Loader /> : <SwitchTransition mode="out-in">
      <CSSTransition
        key={canPlay ? 'play' : 'stop'}
        timeout={400}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} style={{ width: '100%', height: '100%' }}>
          {canPlay ? <><MapContainer /><PanoramaV2 /></> : <TimeStop />}
        </div>
      </CSSTransition>
    </SwitchTransition>}
  </CSSTransition>
  </SwitchTransition>
  )
};

export default GamePage; 