"use client"

import TextPressure from "@/app/components/interactive/TextPressure"
import { useEffect, useRef, useState } from "react"
import CountUp from "@/app/components/interactive/CountUp"

export default function About() {
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
    <section id="about" ref={ref} className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "slide-up" : "opacity-0"}`}>
          <div className="relative h-[200px] md:h-[400px]">
            <TextPressure
              text="About"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              useThemeColors={true}
              minFontSize={24}
            />
          </div>


          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left">
              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed font-sans">
                บริษัท ปูนปั้น ภู่กันทอง เป็นผู้เชี่ยวชาญด้านการออกแบบและปั้นลายประดับวัด ด้วยประสบการณ์อันยาวนานกว่า 24 ปี
                เราได้สร้างสรรค์ผลงานที่งดงามและมีคุณค่าทางศิลปะ
              </p>

              <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed font-sans">
                เราเชี่ยวชาญในการออกแบบและสร้างโครงสร้างของวัด รวมถึงการปั้นลายประดับต่างๆ ที่สะท้อนถึงความงดงามของศิลปะไทยแบบดั้งเดิม
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                <div className="text-center p-3 md:p-4 bg-muted rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">
                    <CountUp
                      from={0}
                      to={24}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-sans">ปีประสบการณ์</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-muted rounded-lg">
                  <div className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">
                    <CountUp
                      from={0}
                      to={50}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-sans">โครงการที่สำเร็จ</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/temple/kan-thuai.jpg"
                alt="งานปั้นลายไทยแบบดั้งเดิม"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}