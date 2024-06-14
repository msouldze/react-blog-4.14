import { useEffect, useState } from 'react';
import '../assets/styles/Modal.css'

export default function Modal() {
  const [style, setStyle] = useState(null);
  const [triangleStyle, setTriangleStyle] = useState(null);
  const windowSize = window.innerWidth;

  useEffect(() =>  {
    const { offsetLeft: containerLeft, offsetWidth : containerWidth , offsetHeight: containerHeight } = document.querySelector('.article-container');
    const { offsetLeft: btnsLeft, offsetTop: btnsTop, offsetHeight: btnsHeight, offsetWidth: btnsWidth } = document.querySelector('.btns');
    const { offsetWidth: modalWidth, offsetHeight: modalHeight } = document.querySelector('.modal');
    
    const contentSize = containerLeft + btnsLeft + 16 + 8 + (btnsWidth / 2) + modalWidth
    console.log(windowSize >= 320 && windowSize <= 768)

    if(windowSize >= 320 && windowSize <= 768) {
      setStyle({
        ...style,
        top: `${(containerHeight / 2) - modalHeight}px`,
        left: `${(containerWidth / 2 ) - (modalWidth / 2)}px`
      });
    } else {
      if(contentSize < windowSize) {
        setStyle({
          ...style,
          top: `${btnsTop + (btnsHeight / 2)}px`,
          left: `${btnsLeft + 16 + 8 + (btnsWidth / 2)}px`
        });
        setTriangleStyle({
          ...triangleStyle,
          left: '-6px',
        })
      } else {
        setStyle({
          ...style,
          left: `${btnsLeft + 16 - 8 - modalWidth}px`
        });
        setTriangleStyle({
          ...triangleStyle,
          left: `${modalWidth}px`,
          transform: 'rotate(180deg)'
        })
      }
    }
}, [])


  return (
    <div className='modal' style={style}>
        <img src="/triangle.svg" alt="" style={triangleStyle} />
        <p>Are you sure to delete this article?</p>
        <div>
            <button>No</button>
            <button>Yes</button>
        </div>
    </div>
  )
}