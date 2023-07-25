import { useStores } from '@/hooks';
import Images from '@/styles/Images';

export default function useViewModel() {
  const {window} = useStores();
  const coverImage = Images.background.bg_dummy;
  const videoUri = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';



  const coverImageSize = Math.min(window.size.width, window.size.height) * 2 / 3;
  return {
    coverImage,
    videoUri,
    window,
    coverImageSize
  }
}
