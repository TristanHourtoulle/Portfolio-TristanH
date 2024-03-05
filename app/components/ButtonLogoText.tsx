"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const ButtonLogoText = ({ imagePath, title, redirect }: { imagePath: string, title: string, redirect: string }) => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const altImage = imagePath.replace(".svg", "-hover.svg")

    return (
        <Link href={redirect} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 logo-text-btn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Image
                src={isHovered ? altImage : imagePath}
                alt={title}
                width={25}
                height={25}
                className="logo-contact"
            />
            <p className="text-paragraph">{title}</p>
        </Link>
    )
}

export const LinkText = ({ title, redirect }: { title: string, redirect: string }) => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <Link href={redirect} className="flex items-center gap-3">
            <p className="text-paragraph">{title}</p>
        </Link>
    )
}
