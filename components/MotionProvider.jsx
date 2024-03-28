"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const MotionProvider = ({ children, index, pageSize=0}) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3
  return (
  <motion.div
  ref={ref}
  initial="hidden"
  variants={imageVariants}
  animate={inView ? "visible" : "hidden"}
  custom={index}
  transition={{delay: pageSize === 0 ? index * animationDelay: index % pageSize * animationDelay, duration: 0.4}}
  >
    { children }
  </motion.div>
  )
}

export default MotionProvider