import { useEffect, useLayoutEffect, useState }  from 'react'

const useScreenSize = () => {

  const [width, setWidth] = useState(typeof window === 'undefined' ? 0 : window.innerWidth)
  const [height, setHeight] = useState(typeof window === 'undefined' ? 0 : window.innerWidth)

  const handleResize = () =>{
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      }
  }

  useLayoutEffect(() => {
    
    window.addEventListener("resize", handleResize)
  
    return () => {
      window.removeEventListener("resize", handleResize)
    }
    
  }, [width, height])
  
 

  return {width, height}

}

export default useScreenSize