// eslint-disable-next-line
let timer: any = null;

/**
 * @function handleClearTime
 * @description - To clear timer.
 */
const handleClearTime = (): void => {
  clearTimeout(timer);
};

interface UseDelayProps {
  // eslint-disable-next-line
  delayExecution: (func: () => any, milliseconds: number) => void;
}

/**
 * @returns {UseDelayProps} - Delay properties.
 */
export const useDelay = (): UseDelayProps => {
  /**
   * @description - Delay execution code.
   * @param func - Function to be executed.
   * @param milliseconds - Milliseconds.
   */
  // eslint-disable-next-line
  const delayExecution = (func: () => any, milliseconds: number): void => {
    handleClearTime();
    timer = setTimeout(() => {
      func();
    }, milliseconds);
  };

  return {
    delayExecution,
  };
};
