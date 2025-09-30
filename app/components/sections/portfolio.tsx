"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { X, ChevronDown, ChevronUp } from "lucide-react"
import DomeGallery from "../interactive/DomeGallery"

const portfolioItems = [
  {
    id: 1,
    title: "วัดสันติวนาราม จ.จันทบุรี",
    description: "ทำงานประติมากรรม",
    image: "images/temple/wan-santi-finish.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 2,
    title: "ศาลาจตุรมุข ณ วัดไทรน้อย",
    description: "ออกแบบ ทำโครงสร้าง และประติมากรรม",
    image: "images/temple/sala-chatumuk-wat-sai-noi.jpg",
    category: "ออกแบบ ทำโครงสร้าง และประติมากรรม",
  },
  {
    id: 3,
    title: "ศาลาพระพรหมฐานทัพเรือสัตหีบ",
    description: "ประติมากรรม ศาลาพระพรหม ณ ฐานทัพเรือสัตหีบ",
    image: "images/temple/sala-phra-phrom-than-thap-ruea-sattahip.jpg",
    category: "ออกแบบ ทำโครงสร้าง และประติมากรรม",
  },
  {
    id: 4,
    title: "หอพระพุทธมหาสิริพีรยพัฒน์",
    description: "ณ มหาวิทยาลัยมหิดล",
    image: "images/temple/ho-phra-phuttha-maha-siripiriyaphat.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 5,
    title: "วัดสุทธาวาส วิปัสสนา",
    description: "อุโบสถ และ ซุ้มประตูทางเข้า ฐานพระ และอุโบสถ",
    image: "images/temple/ubosot-wat-sutthawat-vipassana.jpg",
    category: "ออกแบบ ทำโครงสร้าง และประติมากรรม",
    additionalImage: "images/temple/ซุ้มประตูทางเข้า-ฐานพระ-อุโบสถ.jpg"
  },
  {
    id: 7,
    title: "วัดจำปา",
    description: "ปั้นลายประติมากรรม อุโบสถ วัดจำปา",
    image: "images/temple/ubosot-wat-champa.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 8,
    title: "การออกแบบเพื่อปั้นรวยระกา",
    description: "",
    image: "images/temple/kan-ok-baeb-puea-pan-ruay-raka.jpg",
    category: "การออกแบบ",
  },
  {
    id: 9,
    title: "งานปั้นคันทวย",
    description: "",
    image: "images/temple/kan-thuai.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 10,
    title: "งานปั้นคันทวย",
    description: "",
    image: "images/temple/ngan-pan-kan-thuai.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 11,
    title: "งานปั้นช่อฟ้า",
    description: "",
    image: "images/temple/ngan-pan-cho-fa.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 12,
    title: "งานปั้นรวยระกา",
    description: "",
    image: "images/temple/ngan-pan-ruay-raka.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 13,
    title: "ชิ้นส่วนองค์ประกอบคูหา",
    description: "",
    image: "images/temple/chin-suan-ong-prakop-khuha.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 14,
    title: "ซุ้มประตูและซุ้มพระ",
    description: "",
    image: "images/temple/sum-pratu-lae-sum-phra.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 15,
    title: "ปั้นพระพุทธรูป",
    description: "",
    image: "images/temple/pan-phra-phuttharup.jpg",
    category: "งานประติมากรรม",
  },
  {
    id: 16,
    title: "ม่านคูหา ระเบียงลูกกรง ฝ้าเพดาน",
    description: "",
    image: "images/temple/man-khuha-rabiang-luk-krong-fa-phaedan.jpg",
    category: "งานประติมากรรม",
  },
]

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(true) // Changed default to true to ensure visibility
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [displayedItemsCount, setDisplayedItemsCount] = useState(3) // Default to 3 items
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

  const openModal = (item: (typeof portfolioItems)[0]) => {
    setSelectedItem(item)
    setTimeout(() => setIsModalVisible(true), 10)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    setTimeout(() => setSelectedItem(null), 300)
  }

  // Function to show more items (3 at a time)
  const showMoreItems = () => {
    setDisplayedItemsCount(prevCount => {
      if (prevCount === 3) {
        // First click: show 6 items
        return 6;
      } else if (prevCount === 6) {
        // Second click: show all items
        return portfolioItems.length;
      }
      return prevCount;
    });
  };

  // Function to show fewer items (reset to 3)
  const showFewerItems = () => {
    setDisplayedItemsCount(3);
    // Scroll to the portfolio section when collapsing
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Determine button text and icon based on current state
  const getButtonTextAndIcon = () => {
    if (displayedItemsCount === 3) {
      return { text: 'แสดงผลงานเพิ่มเติม', icon: <ChevronDown className="ml-2 h-4 w-4" /> };
    } else if (displayedItemsCount === 6) {
      return { text: 'แสดงตัวอย่างผลงานทั้งหมด', icon: <ChevronDown className="ml-2 h-4 w-4" /> };
    } else {
      return { text: 'ย่อผลงานลง', icon: <ChevronUp className="ml-2 h-4 w-4" /> };
    }
  };

  const { text: buttonText, icon: buttonIcon } = getButtonTextAndIcon();

  return (
    <section id="portfolio" ref={ref} className="m-4 md:m-8 lg:m-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 md:mb-12 lg:mb-16 ${isVisible ? "slide-up" : "opacity-100"}`}>
          <h2 className="srisakdi-bold text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 font-sans">
            ตัวอย่างผลงานของเรา
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 font-sans">
            ชมผลงานการออกแบบและปั้นลายวัดที่เราได้สร้างสรรค์ด้วยความประณีตและใส่ใจในทุกรายละเอียด
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-4 md:gap-y-3 lg:gap-y-4 ${isVisible ? "slide-up" : "opacity-100"}`}>
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ease-in-out transform ${
                index < displayedItemsCount 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 h-0 overflow-hidden translate-y-8 scale-95'
              }`}
            >
              <Card
                className={`hover-lift transition-all duration-300 overflow-hidden bg-card ${isVisible ? "slide-up" : "opacity-100"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative group cursor-pointer" onClick={() => openModal(item)}>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover transition-all duration-300"
                    />
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                      <span className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium font-sans">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button
                        variant="outline"
                        className="bg-white/90 text-black hover:bg-white border-white transform scale-90 group-hover:scale-100 transition-transform duration-300 text-xs sm:text-sm font-sans"
                      >
                        ดูรูปภาพ
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold text-foreground mb-2 font-sans">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Pagination Button - Fixed margin to be closer to portfolio items */}
        <div className="flex justify-center mb-5">
          <Button
            onClick={displayedItemsCount < portfolioItems.length ? showMoreItems : showFewerItems}
            variant="outline"
            className="flex items-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            {buttonText}
            {buttonIcon}
          </Button>
        </div>
      </div>

      {selectedItem && (
        <div
          className={`fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4 transition-all duration-300 ${isModalVisible ? "opacity-100" : "opacity-0"
            }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-6xl w-full max-h-[90vh] transform transition-all duration-300 ${isModalVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className={`absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 sm:p-2 transition-all duration-200 transform ${isModalVisible ? "scale-100 rotate-0" : "scale-75 rotate-90"
                }`}
            >
              <X size={16} className="sm:w-5 sm:h-5" />
            </button>
            
            <div className="relative">
              {/* Single image view for most items */}
              {!selectedItem.additionalImage && (
                <>
                  <img
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div
                    className={`absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/50 text-white px-2 py-1 rounded transition-all duration-300 delay-200 ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                  >
                    <h3 className="text-sm sm:text-base font-bold">{selectedItem.title}</h3>
                    <p className="text-xs">{selectedItem.description}</p>
                  </div>
                </>
              )}
              
              {/* Two image view for combined item (ID 5) */}
              {selectedItem.additionalImage && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div
                      className={`absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded transition-all duration-300 delay-100 ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                      <h3 className="text-sm font-bold"></h3>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={selectedItem.additionalImage || "/placeholder.svg"}
                      alt={`${selectedItem.title} - ภาพที่ 2`}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div
                      className={`absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded transition-all duration-300 delay-100 ${isModalVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                      <h3 className="text-sm font-bold"></h3>
                    </div>
                  </div>
                  <div className="md:col-span-2 bg-black/50 text-white p-4 rounded">
                    <h3 className="text-lg font-bold">{selectedItem.title}</h3>
                    <p className="text-sm">{selectedItem.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}