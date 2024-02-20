import {useEffect, useState} from 'react'

const useLocation = () => {
  const [currentURL, setCurrentURL] = useState(window.location.pathname)

  useEffect(() => {
    const handleURLChange = (event: any) => {
      const url = new URL(event.destination.url)

      setCurrentURL(url.pathname)
    }

    // Listen for 'popstate' event, which is triggered when the URL changes
    navigation.addEventListener('navigate', handleURLChange)

    return () => {
      // Clean up by removing the event listener when component unmounts
      navigation.removeEventListener('navigate', handleURLChange)
    }
  }, []) // Empty dependency array means this effect will run only once on mount

  return currentURL
}

export default useLocation
