import { useAtom, useAtomValue } from 'jotai';
import MapContainer from '../components/Map/MapContainer';
import PanoramaV2 from '../components/Map/PanoramaV2';
import { canPlayAtom, imageLoadedAtom, loadingGameAtom, panoramaLoadedAtom } from '../store/gameAtoms';
import TimeStop from '../components/Map/TimeStop';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './GamePageTransition.css';
import { useEffect, useRef } from 'react';
import { wait } from '../shared/utils/wait';
import Loader from '../components/Loader';

const GamePage = () => {
  const canPlay = useAtomValue(canPlayAtom)
  const loadImg = useAtomValue(imageLoadedAtom)
  const loadPanorama = useAtomValue(panoramaLoadedAtom)
  const [isLoading, setIsLoading] = useAtom(loadingGameAtom)

  useEffect(() => {
    async function loading() {
        await wait(1000)
        setIsLoading(false)
    }
      loading()
  }, [loadImg, loadPanorama])

  const loaderRef = useRef(null);
  const playRef = useRef(null);
  const stopRef = useRef(null);

  const screens = [
    { key: 'loader', show: isLoading, content: <Loader />, ref: loaderRef },
    { key: 'play', show: !isLoading && canPlay, content: <><MapContainer /><PanoramaV2 /></>, ref: playRef },
    { key: 'stop', show: !isLoading && !canPlay, content: <TimeStop />, ref: stopRef }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <TransitionGroup component={null}>
        {screens.filter(s => s.show).map(s => (
          <CSSTransition
            key={s.key}
            timeout={400}
            classNames="fade"
            nodeRef={s.ref}
          >
            <div
              ref={s.ref}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
              }}
            >
              {s.content}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default GamePage; 