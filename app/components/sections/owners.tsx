"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "../ui/card"

export default function Owners() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="owners" ref={ref} className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <h2 className="srisakdi-bold text-2xl sm:text-3xl md:text-6xl font-bold text-foreground mb-3 md:mb-4 font-sans">
            <span className="text-primary">เจ้าของกิจการ</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            ผู้นำทีมที่มีประสบการณ์และความเชี่ยวชาญในงานศิลปกรรมไทย
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}>
          <Card className="hover-lift bg-card">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 md:mb-6">
                <img
                  src="/images/people/ponlakit.jpg"
                  alt="นายพลกฤต รัตฉวี"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover border-4 border-primary"
                />
              </div>
              <h3 className="srisakdi-regular text-2xl md:text-3xl text-foreground mb-1 md:mb-2 font-sans">นายพลกฤต รัตฉวี</h3>
              <p className="text-yellow-600 mb-3 md:mb-4 text-sm md:text-base font-sans ">เจ้าของกิจการ</p>
              <p className="font-light text-muted-foreground leading-relaxed text-sm md:text-base font-sans">
                ผู้เชี่ยวชาญด้านการออกแบบและปั้นลายไทย มีประสบการณ์ในการทำงานมากกว่า 24 ปี
                เป็นผู้นำในการสร้างสรรค์ผลงานศิลปกรรมไทยที่งดงามและมีคุณค่า
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift bg-card">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-4 md:mb-6">
                <img
                  src="/images/people/nongnuch.png"
                  alt="นางสาวนงนุช ศรีขามเฒ่า"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover border-4 border-primary"
                />
              </div>
              <h3 className="srisakdi-regular text-2xl md:text-3xl text-foreground mb-1 md:mb-2 font-sans">นางสาวนงนุช ศรีขามเฒ่า</h3>
              <p className="text-yellow-600 mb-3 md:mb-4 text-sm md:text-base font-sans">เจ้าของกิจการ</p>
              <p className="font-light text-muted-foreground leading-relaxed text-sm md:text-base font-sans">
                ผู้เชี่ยวชาญด้านการจัดการโครงการและการประสานงาน มีความละเอียดรอบคอบในการดูแลทุกขั้นตอนของงาน เพื่อให้ได้ผลงานที่มีคุณภาพสูงสุด
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}