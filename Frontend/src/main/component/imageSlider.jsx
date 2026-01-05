import { useState, useEffect } from "react"

const imageWidth = 300
const slideSpeed = 1

import banner1 from "../../../assests/imgSli1.png"
import banner3 from "../../../assests/imgSli3.png"
import banner4 from "../../../assests/AMimg1.jpeg"
import banner5 from "../../../assests/AMimg2.jpeg"
// ...other imports

const staticImages = [
    { src: banner1, alt: "Gallery Image 1" },
    { src: banner3, alt: "Gallery Image 2" },
    { src: banner4, alt: "Gallery Image 3" },
    { src: banner5, alt: "Gallery Image 4" },
]

export default function ImageSlider() {
    const [topOffset, setTopOffset] = useState(0)
    const [bottomOffset, setBottomOffset] = useState(0)

    const totalWidth = imageWidth * staticImages.length
    const duplicatedImages = [...staticImages, ...staticImages]

    useEffect(() => {
        const interval = setInterval(() => {
            setTopOffset(prev => (prev >= totalWidth ? 0 : prev + slideSpeed))
            setBottomOffset(prev =>
                Math.abs(prev) >= totalWidth ? 0 : prev - slideSpeed
            )
        }, 20)

        return () => clearInterval(interval)
    }, [totalWidth])

    return (
        <div className="bg-[#fff] py-10" id="imageslider">
            {/* Heading */}
            <div className="text-center pb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
                    Gallery
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-3" />
            </div>

            {/* Slider */}
            <div className="flex justify-center ">
                <div className="w-full max-w-7xl relative overflow-hidden bg-white rounded-xl shadow-lg">

                    {/* Divider */}
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-600 z-10 -translate-y-1/2" />

                    {/* ===== TOP ROW ===== */}
                    <div className="overflow-hidden h-[320px] mt-4">
                        <div
                            className="flex absolute right-0"
                            style={{
                                transform: `translateX(${topOffset}px)`,
                                width: `${duplicatedImages.length * imageWidth}px`,
                            }}
                        >
                            {duplicatedImages.map((img, idx) => (
                                <div key={idx} className="px-2 flex-shrink-0">
                                    <div className="
                    w-[200px] h-[200px]
                    sm:w-[250px] sm:h-[250px]
                    md:w-[300px] md:h-[300px]
                    bg-gray-100 rounded-lg shadow
                    flex items-center justify-center
                  ">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== BOTTOM ROW ===== */}
                    <div className="overflow-hidden h-[320px] mt-4">
                        <div
                            className="flex absolute"
                            style={{
                                transform: `translateX(${bottomOffset}px)`,
                                width: `${duplicatedImages.length * imageWidth}px`,
                            }}
                        >
                            {duplicatedImages.map((img, idx) => (
                                <div key={idx} className="px-2 flex-shrink-0">
                                    <div className="
                    w-[200px] h-[200px]
                    sm:w-[250px] sm:h-[250px]
                    md:w-[300px] md:h-[300px]
                    bg-gray-100 rounded-lg shadow
                    flex items-center justify-center
                  ">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
