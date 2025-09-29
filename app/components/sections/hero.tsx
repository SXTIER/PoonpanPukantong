"use client"
import { Button } from "../ui/button"
import { ArrowDown } from "lucide-react"
import TextType from '../interactive/TextType';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center thai-pattern relative overflow-hidden"
      style={{ 
        backgroundImage: "url('/images/temple/wan-santi.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Theme-adaptive overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/70 transition-colors duration-300"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">

        <div className="max-w-4xl fade-in mx-auto mt-20 md:mt-[121px]">
          <h1 className="srisakdi-bold text-4xl sm:text-5xl md:text-6xl lg:text-[120px] text-foreground dark:text-foreground mb-6 md:mb-10 text-balance drop-shadow-lg mt-16 md:mt-[200px] py-2 md:py-[13px] font-sans">
            ปูนปั้น ภู่กันทอง
          </h1>
            <TextType
              className="text-foreground/90 dark:text-foreground/90 font-sans text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto text-pretty drop-shadow-md"
              text={["บริษัทออกแบบ ปั้นลวดลาย และโครงสร้างของวัด", "มีประสบการณ์การทำงานมามากกว่า 24 ปี"]}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 md:px-8 md:py-3">
              <a href="#portfolio" className="font-sans">ดูผลงานของเรา</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground px-6 py-2 md:px-8 md:py-3 bg-transparent border-foreground border-2 md:border-[3px] text-foreground dark:border-foreground dark:text-foreground"
            >
              <a href="#contact" className="font-sans">ติดต่อเรา</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6 text-primary drop-shadow-lg" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 md:top-20 left-5 md:left-10 w-10 h-10 md:w-20 md:h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-16 h-16 md:w-32 md:h-32 bg-accent/10 rounded-full blur-xl"></div>
    </section>
  )
}