// import { useState, useEffect } from "react"

// const imageWidth = 300
// const slideSpeed = 1

// import banner1 from "../../../assests/imgSli1.png"
// import banner3 from "../../../assests/imgSli3.png"
// import banner4 from "../../../assests/AMimg1.jpeg"
// import banner5 from "../../../assests/AMimg2.jpeg"
// // ...other imports

// const staticImages = [
//     { src: banner1, alt: "Gallery Image 1" },
//     { src: banner3, alt: "Gallery Image 2" },
//     { src: banner4, alt: "Gallery Image 3" },
//     { src: banner5, alt: "Gallery Image 4" },
// ]

// export default function ImageSlider() {
//     const [topOffset, setTopOffset] = useState(0)
//     const [bottomOffset, setBottomOffset] = useState(0)

//     const totalWidth = imageWidth * staticImages.length
//     const duplicatedImages = [...staticImages, ...staticImages]

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTopOffset(prev => (prev >= totalWidth ? 0 : prev + slideSpeed))
//             setBottomOffset(prev =>
//                 Math.abs(prev) >= totalWidth ? 0 : prev - slideSpeed
//             )
//         }, 20)

//         return () => clearInterval(interval)
//     }, [totalWidth])

//     return (
//         <div className="bg-[#fff] " id="imageslider">
//             {/* Heading */}
//             <div className="text-center pb-10">
//                 <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
//                     Gallery
//                 </h2>
//                 <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-3" />
//             </div>

//             {/* Slider */}
//             <div className="flex justify-center ">
//                 <div className="w-full max-w-7xl relative overflow-hidden bg-white rounded-xl shadow-lg">

//                     {/* Divider */}
//                     <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-600 z-10 -translate-y-1/2" />

//                     {/* ===== TOP ROW ===== */}
//                     <div className="overflow-hidden h-[320px] mt-4">
//                         <div
//                             className="flex absolute right-0"
//                             style={{
//                                 transform: `translateX(${topOffset}px)`,
//                                 width: `${duplicatedImages.length * imageWidth}px`,
//                             }}
//                         >
//                             {duplicatedImages.map((img, idx) => (
//                                 <div key={idx} className="px-2 flex-shrink-0">
//                                     <div className="
//                     w-[200px] h-[200px]
//                     sm:w-[250px] sm:h-[250px]
//                     md:w-[300px] md:h-[300px]
//                     bg-gray-100 rounded-lg shadow
//                     flex items-center justify-center
//                   ">
//                                         <img
//                                             src={img.src}
//                                             alt={img.alt}
//                                             className="w-full h-full object-contain"
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* ===== BOTTOM ROW ===== */}
//                     <div className="overflow-hidden sm:h-[250px] h-[320px] ">
//                         <div
//                             className="flex absolute"
//                             style={{
//                                 transform: `translateX(${bottomOffset}px)`,
//                                 width: `${duplicatedImages.length * imageWidth}px`,
//                             }}
//                         >
//                             {duplicatedImages.map((img, idx) => (
//                                 <div key={idx} className="px-2 flex-shrink-0">
//                                     <div className="

//                      sm:w-[250px] sm:h-[200px]
//                       w-[200px] h-[200px]
//                     md:w-[300px] md:h-[300px]
//                     bg-gray-100 rounded-lg shadow
//                     flex items-center justify-center
//                   ">
//                                         <img
//                                             src={img.src}
//                                             alt={img.alt}
//                                             className="w-full h-full object-contain"
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div >
//     )
// }

import { useState, useEffect } from "react"

const imageWidth = 300

// base speed (desktop)
const BASE_SPEED = 1

import banner1 from "../../../assests/imgSli1.png"
import banner3 from "../../../assests/AMimg1.jpeg"
import banner4 from "../../../assests/AMimg2.jpeg"
import banner5 from "../../../assests/AMimg3.jpeg"
import banner7 from "../../../assests/AMimg4.jpeg"
import banner8 from "../../../assests/AMimg5.jpeg"
import banner9 from "../../../assests/AMimg6.jpeg"
import banner10 from "../../../assests/AMimg7.jpeg"
import banner11 from "../../../assests/AMimg8.jpeg"
import banner12 from "../../../assests/AMimg9.jpeg"
import banner13 from "../../../assests/AMimg10.jpeg"
import banner15 from "../../../assests/AMimg12.jpeg"
import banner16 from "../../../assests/AMimg13.jpeg"
import banner17 from "../../../assests/AMimg14.jpeg"
import banner18 from "../../../assests/AMimg15.jpeg"
import banner19 from "../../../assests/AMimg16.jpeg"
import banner20 from "../../../assests/AMimg17.jpeg"
import banner21 from "../../../assests/AMimg18.jpeg"
import banner22 from "../../../assests/AMimg19.jpeg"
import banner24 from "../../../assests/AMimg21.jpeg"
import banner25 from "../../../assests/AMimg22.jpeg"
import banner26 from "../../../assests/AMimg23.jpeg"
import banner27 from "../../../assests/AMimg24.jpeg"
import banner28 from "../../../assests/AMimg25.jpeg"
import banner29 from "../../../assests/AMimg26.jpeg"
import banner30 from "../../../assests/AMimg27.jpeg"
import banner31 from "../../../assests/AMimg28.jpeg"
import banner32 from "../../../assests/AMimg29.jpeg"
import banner33 from "../../../assests/AMimg30.jpeg"
import banner34 from "../../../assests/AMimg31.jpeg"
import banner35 from "../../../assests/AMimg32.jpeg"
import banner36 from "../../../assests/AMimg33.jpeg"
import banner37 from "../../../assests/AMimg34.jpeg"
import banner38 from "../../../assests/AMimg35.jpeg"
import banner39 from "../../../assests/AMimg36.jpeg"
import banner40 from "../../../assests/AMimg37.jpeg"
import banner41 from "../../../assests/AMimg38.jpeg"
import banner42 from "../../../assests/AMimg39.jpeg"
import banner43 from "../../../assests/AMimg41.jpeg"

const staticImages = [
    banner1, banner3, banner4, banner5, banner7, banner8, banner9, banner10,
    banner11, banner12, banner13, banner15, banner16, banner17, banner18,
    banner19, banner20, banner21, banner22, banner24, banner25, banner26,
    banner27, banner28, banner29, banner30, banner31, banner32, banner33,
    banner34, banner35, banner36, banner37, banner38, banner39, banner40,
    banner41, banner42, banner43
]

export default function ImageSlider() {
    const [topOffset, setTopOffset] = useState(0)
    const [bottomOffset, setBottomOffset] = useState(0)
    const [speed, setSpeed] = useState(BASE_SPEED)

    const duplicatedImages = [...staticImages, ...staticImages]
    const totalWidth = imageWidth * staticImages.length

    // ✅ detect mobile & double speed
    useEffect(() => {
        const updateSpeed = () => {
            if (window.innerWidth < 640) {
                setSpeed(BASE_SPEED * 1.2) // mobile =  speed * 4
            } else {
                setSpeed(BASE_SPEED)
            }
        }

        updateSpeed()
        window.addEventListener("resize", updateSpeed)
        return () => window.removeEventListener("resize", updateSpeed)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            // TOP → LEFT TO RIGHT
            setTopOffset(prev => (prev >= totalWidth ? 0 : prev + speed))

            // BOTTOM → RIGHT TO LEFT
            setBottomOffset(prev =>
                Math.abs(prev) >= totalWidth ? 0 : prev - speed
            )
        }, 16) // ~60fps = smoother motion

        return () => clearInterval(interval)
    }, [totalWidth, speed])

    return (
        <div className="bg-white py-10" id="imageslider">
            <div className="text-center pb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700">Gallery</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-3" />
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-7xl relative overflow-hidden bg-white rounded-xl shadow-lg">

                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-600 z-10 -translate-y-1/2" />

                    {/* TOP ROW */}
                    <div className="relative overflow-hidden h-[320px] mt-4">
                        <div
                            className="flex absolute right-0 will-change-transform"
                            style={{
                                transform: `translateX(${topOffset}px)`,
                                width: duplicatedImages.length * imageWidth,
                                transition: "transform 0.016s linear"
                            }}
                        >
                            {duplicatedImages.map((src, idx) => (
                                <div key={idx} className="px-2 flex-shrink-0">
                                    <div
                                        className="bg-gray-100 rounded-lg shadow flex items-center justify-center"
                                        style={{ width: imageWidth, height: imageWidth }}
                                    >
                                        <img src={src} alt="Gallery" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOTTOM ROW */}
                    <div className="relative overflow-hidden h-[320px] mt-4">
                        <div
                            className="flex absolute left-0 will-change-transform"
                            style={{
                                transform: `translateX(${bottomOffset}px)`,
                                width: duplicatedImages.length * imageWidth,
                                transition: "transform 0.016s linear"
                            }}
                        >
                            {duplicatedImages.map((src, idx) => (
                                <div key={idx} className="px-2 flex-shrink-0">
                                    <div
                                        className="bg-gray-100 rounded-lg shadow flex items-center justify-center"
                                        style={{ width: imageWidth, height: imageWidth }}
                                    >
                                        <img src={src} alt="Gallery" className="w-full h-full object-contain" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

