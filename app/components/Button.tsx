"use client";
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronRight } from "react-icons/fa6";

interface ButtonProps {
  route: string
  variant?: 'black' | 'white' | 'frost'
  text?: string
  children?: React.ReactNode
  icon?: boolean
}

const Button = ({ route, variant = 'black', text, children, icon = false }: ButtonProps) => {
  const buttonStyles = variant === 'black'
    ? 'text-white bg-black border-[1px] border-black'
    : variant === 'white'
    ? 'text-black bg-white border-[1px] border-white'
    : 'text-white/80 border-[1px] border-white/40 bg-white/20 backdrop-blur-lg'

  return (
    <Link href={route}>
      <motion.div 
        className={`rounded-full text-md flex items-center justify-center px-5 py-2 ${buttonStyles}`}
        whileTap={{ scale: 0.92 , transition: { duration: 0.2 }, transformOrigin: 'bottom'}}
      >
        <>
          {text || children}
          {icon && <FaChevronRight className="ml-2 h-3 w-3" />}
        </>
      </motion.div>
    </Link>
  )
}

export default Button