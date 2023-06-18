import {useEffect, useRef} from 'react';
import {useStores as _useStores} from '@/stores/Provider';
import {isNil} from 'lodash';

/**
 * useStores
 * @return {[type]} [description]
 */
export const useStores = _useStores; //Just make life easier

/**
 * Use Loading Indicator
 * @param  {Boolean} isLoading [description]
 * @return {[type]}            [description]
 */
export function useLoadingHud(isLoading: boolean) {
  const {hud} = useStores();
  const previous = useRef<boolean>(false);
  useEffect(() => {
    if (isLoading === previous.current) {
      previous.current = isLoading;
      return;
    }

    // If it was originally false, do not call hide
    if (isNil(previous.current) && !isLoading) {
      previous.current = isLoading;
      return;
    }

    if (isLoading) {
      hud.show();
    } else {
      hud.hide();
    }
    previous.current = isLoading;

    // Clean up.
    return () => {
      if (previous.current) {
        // When it was showed, just hide
        hud.hide();
      }
    };
  }, [hud, isLoading]);
}

const _scheduleCall = (timeoutRef: any, call: (...args: any[]) => void, timeout: number, ...args: any[]) => {
  clearTimeout(timeoutRef.current);
  if (timeout === 0) {
    call(...args);
  } else {
    timeoutRef.current = setTimeout(() => {
      call(...args);
    }, timeout);
  }
};

/**
 * Use Delay with fixed timeout configured in parameter
 * @param call
 * @param timeout
 * @returns {function(...[*]): void}
 */
export function useDelay(call: (...args: any[]) => void, timeout?: number): (...args: any[]) => void {
  const timeoutRef = useRef<any>();
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (...args: any[]) => _scheduleCall(timeoutRef, call, timeout ?? 300, ...args);
}

/**
 * Use Delay each set each timeout
 * @param call
 */
export function useDelayEachTimeout(call: (...args: any[]) => void) {
  const timeoutRef = useRef<any>();
  useEffect(() => {
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // This is just different, the calling should always have timeout parameter
  return (timeout: number, ...args: any[]) => _scheduleCall(timeoutRef, call, timeout, ...args);
}
