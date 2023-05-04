import { useRef, useEffect } from 'react'

export function useEventListener(
  eventName: string,
  handler: (event: Event) => void,
  element: EventTarget | React.MutableRefObject<EventTarget | undefined>,
  options?: { capture?: boolean; once?: boolean; passive?: boolean }
) {
  // Create a ref that stores handler
  const savedHandler = useRef<(event: Event) => void>()

  useEffect(() => {
    // Define the listening target
    const targetElement = element instanceof EventTarget ? element : element.current

    if (!(targetElement && targetElement.addEventListener)) {
      return
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => {
      if (savedHandler?.current) {
        savedHandler.current(event)
      }
    }

    targetElement.addEventListener(eventName, eventListener, options)

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, handler, options])

  return savedHandler
}
