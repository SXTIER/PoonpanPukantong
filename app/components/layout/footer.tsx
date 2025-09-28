import { Phone, Smartphone, Mail, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground py-8 md:py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <img src="/Logo.svg" alt="Logo" className="w-8 h-8" />
              </div>
              <span className="srisakdi-regular text-lg md:text-xl text-foreground font-sans">ปูนปั้น ภู่กันทอง</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-sans">
              ผู้เชี่ยวชาญด้านการออกแบบและปั้นลายวัด มีประสบการณ์มากกว่า 24 ปี
            </p>
          </div>

          <div>
            <h3 className="text-foreground mb-3 md:mb-4 text-sm md:text-base font-sans">บริการของเรา</h3>
            <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base font-sans">
              <li>• การออกแบบโครงสร้างวัด</li>
              <li>• งานประติมากรรม</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base font-sans">ติดต่อเรา</h3>
            <div className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base font-sans">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-foreground" />
                <span>062-629-5359 ,063-549-2445</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="w-4 h-4 text-foreground" />
                <span>ปูนปั้น ภู่กันทอง</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://www.vectorlogo.zone/logos/line/line-icon.svg" alt="Line" className="w-4 h-4 text-foreground" />
                <span>0626295359</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-0 font-sans">© 2025 ปูนปั้น ภู่กันทอง. สงวนลิขสิทธิ์.</p>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/people/pasit.jpg"
                  alt="นายภาษิต รัตฉวี"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
                <div className="text-xs md:text-sm">
                  <p className="text-muted-foreground font-sans">พัฒนาโดย</p>
                  <p className="text-foreground font-medium font-sans">นายภาษิต รัตฉวี</p>
                  <p className="text-muted-foreground text-xs font-sans">(Pasit Ratchawee)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}