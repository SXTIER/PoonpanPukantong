"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Card, CardContent } from "../ui/card"
import { Phone, Mail, MapPin, Send, Smartphone, Facebook } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="srisakdi-regular text-2xl sm:text-3xl md:text-6xl font-bold text-foreground mb-3 md:mb-4 font-sans">
            <span className="text-primary">ติดต่อเรา</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            สนใจใช้บริการหรือต้องการสอบถามข้อมูลเพิ่มเติม ติดต่อเราได้ทุกช่องทาง
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 w-full max-w-md">
            <Card className="hover-lift bg-card">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                    <Smartphone className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base font-sans">โทรศัพท์</h3>
                    <p className="text-muted-foreground text-sm md:text-base font-sans">062-629-5359 , 063-549-2445</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                    <Facebook className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base font-sans">Facebook</h3>
                    <p className="text-muted-foreground text-sm md:text-base font-sans">ปูนปั้น ภู่กันทอง</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center">
                    <img src="https://www.vectorlogo.zone/logos/line/line-icon.svg" alt="Line" className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base font-sans">Line</h3>
                    <p className="text-muted-foreground text-sm md:text-base font-sans">0626295359</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}