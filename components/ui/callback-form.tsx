"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, Phone, MessageSquare } from 'lucide-react'

interface CallbackFormProps {
  onClose?: () => void
}

// Country codes with timezones - Comprehensive list
const countryCodes = [
  { code: '+1', country: 'United States', timezone: 'America/New_York', flag: '🇺🇸' },
  { code: '+1', country: 'Canada', timezone: 'America/Toronto', flag: '🇨🇦' },
  { code: '+44', country: 'United Kingdom', timezone: 'Europe/London', flag: '🇬🇧' },
  { code: '+91', country: 'India', timezone: 'Asia/Kolkata', flag: '🇮🇳' },
  { code: '+86', country: 'China', timezone: 'Asia/Shanghai', flag: '🇨🇳' },
  { code: '+81', country: 'Japan', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
  { code: '+49', country: 'Germany', timezone: 'Europe/Berlin', flag: '🇩🇪' },
  { code: '+33', country: 'France', timezone: 'Europe/Paris', flag: '🇫🇷' },
  { code: '+39', country: 'Italy', timezone: 'Europe/Rome', flag: '🇮🇹' },
  { code: '+34', country: 'Spain', timezone: 'Europe/Madrid', flag: '🇪🇸' },
  { code: '+61', country: 'Australia', timezone: 'Australia/Sydney', flag: '🇦🇺' },
  { code: '+64', country: 'New Zealand', timezone: 'Pacific/Auckland', flag: '🇳🇿' },
  { code: '+971', country: 'UAE', timezone: 'Asia/Dubai', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', timezone: 'Asia/Singapore', flag: '🇸🇬' },
  { code: '+7', country: 'Russia', timezone: 'Europe/Moscow', flag: '🇷🇺' },
  { code: '+55', country: 'Brazil', timezone: 'America/Sao_Paulo', flag: '🇧🇷' },
  { code: '+27', country: 'South Africa', timezone: 'Africa/Johannesburg', flag: '🇿🇦' },
  { code: '+82', country: 'South Korea', timezone: 'Asia/Seoul', flag: '🇰🇷' },
  { code: '+52', country: 'Mexico', timezone: 'America/Mexico_City', flag: '🇲🇽' },
  { code: '+31', country: 'Netherlands', timezone: 'Europe/Amsterdam', flag: '🇳🇱' },
  { code: '+46', country: 'Sweden', timezone: 'Europe/Stockholm', flag: '🇸🇪' },
  { code: '+47', country: 'Norway', timezone: 'Europe/Oslo', flag: '🇳🇴' },
  { code: '+41', country: 'Switzerland', timezone: 'Europe/Zurich', flag: '🇨🇭' },
  { code: '+32', country: 'Belgium', timezone: 'Europe/Brussels', flag: '🇧🇪' },
  { code: '+43', country: 'Austria', timezone: 'Europe/Vienna', flag: '🇦🇹' },
  { code: '+48', country: 'Poland', timezone: 'Europe/Warsaw', flag: '🇵🇱' },
  { code: '+351', country: 'Portugal', timezone: 'Europe/Lisbon', flag: '🇵🇹' },
  { code: '+30', country: 'Greece', timezone: 'Europe/Athens', flag: '🇬🇷' },
  { code: '+90', country: 'Turkey', timezone: 'Europe/Istanbul', flag: '🇹🇷' },
  { code: '+20', country: 'Egypt', timezone: 'Africa/Cairo', flag: '🇪🇬' },
  { code: '+234', country: 'Nigeria', timezone: 'Africa/Lagos', flag: '🇳🇬' },
  { code: '+254', country: 'Kenya', timezone: 'Africa/Nairobi', flag: '🇰🇪' },
  { code: '+66', country: 'Thailand', timezone: 'Asia/Bangkok', flag: '🇹🇭' },
  { code: '+60', country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', flag: '🇲🇾' },
  { code: '+62', country: 'Indonesia', timezone: 'Asia/Jakarta', flag: '🇮🇩' },
  { code: '+63', country: 'Philippines', timezone: 'Asia/Manila', flag: '🇵🇭' },
  { code: '+84', country: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳' },
  { code: '+92', country: 'Pakistan', timezone: 'Asia/Karachi', flag: '🇵🇰' },
  { code: '+880', country: 'Bangladesh', timezone: 'Asia/Dhaka', flag: '🇧🇩' },
  { code: '+94', country: 'Sri Lanka', timezone: 'Asia/Colombo', flag: '🇱🇰' },
]

export default function CallbackForm({ onClose }: CallbackFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    callType: 'whatsapp',
    date: '',
    time: '',
    timezone: 'Asia/Kolkata',
    notes: ''
  })

  const handleCountryChange = (code: string) => {
    const country = countryCodes.find(c => c.code === code)
    setFormData({
      ...formData,
      countryCode: code,
      timezone: country?.timezone || 'Asia/Kolkata'
    })
  }

  const convertToIST = (date: string, time: string, timezone: string) => {
    try {
      const dateTimeString = `${date}T${time}:00`
      const userDate = new Date(dateTimeString)
      
      // Get offset for user's timezone
      const userTimeStr = userDate.toLocaleString('en-US', { timeZone: timezone })
      const userTime = new Date(userTimeStr)
      
      // Get IST time
      const istTimeStr = userDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
      const istTime = new Date(istTimeStr)
      
      return {
        userTime: userDate.toLocaleString('en-US', { 
          timeZone: timezone,
          dateStyle: 'full',
          timeStyle: 'short'
        }),
        istTime: istTime.toLocaleString('en-US', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short'
        })
      }
    } catch (error) {
      return {
        userTime: `${date} ${time}`,
        istTime: 'Conversion error'
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const times = convertToIST(formData.date, formData.time, formData.timezone)
    const selectedCountry = countryCodes.find(c => c.code === formData.countryCode)
    
    // Create email body
    const emailBody = `
CALLBACK REQUEST
================

Client Details:
--------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.countryCode} ${formData.phoneNumber}
Country: ${selectedCountry?.country || 'Unknown'}

Call Preferences:
----------------
Call Type: ${formData.callType === 'whatsapp' ? 'WhatsApp Audio Call' : 'Regular Phone Call'}

Scheduled Time:
--------------
Client's Local Time: ${times.userTime}
IST (Your Time): ${times.istTime}
Client Timezone: ${formData.timezone}

Additional Notes:
----------------
${formData.notes || 'No additional notes'}

================
This is an automated callback request from your portfolio website.
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:bharathkumaracharips@gmail.com?subject=Callback Request from ${formData.name}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
    
    // Show success message
    alert('Callback request submitted! I will contact you at the scheduled time.')
    
    // Reset form and close
    if (onClose) onClose()
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <Card className="mx-auto max-w-lg p-8 sm:p-12 bg-background border-border transition-colors duration-300 relative max-h-[90vh] overflow-y-auto">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors z-10"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      )}
      
      <div>
        <h2 className="text-2xl font-semibold text-foreground transition-colors duration-300">Request a Callback</h2>
        <p className="mt-4 text-sm text-muted-foreground transition-colors duration-300">
          Schedule a callback at your preferred time. I'll reach out to you via your chosen platform.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="callback-name" className="text-foreground transition-colors duration-300">
            Full name *
          </Label>
          <Input
            type="text"
            id="callback-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="callback-email" className="text-foreground transition-colors duration-300">
            Email *
          </Label>
          <Input
            type="email"
            id="callback-email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        {/* Country Code & Phone Number */}
        <div className="space-y-2">
          <Label className="text-foreground transition-colors duration-300">
            Phone Number *
          </Label>
          <div className="flex gap-2">
            <Select value={formData.countryCode} onValueChange={handleCountryChange}>
              <SelectTrigger className="w-[160px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {countryCodes.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.flag} {country.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="tel"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value.replace(/\D/g, '') })}
              required
              className="flex-1 transition-colors duration-300"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Selected: {countryCodes.find(c => c.code === formData.countryCode)?.country} ({formData.countryCode})
          </p>
        </div>

        {/* Call Type */}
        <div className="space-y-2">
          <Label className="text-foreground transition-colors duration-300">
            Preferred Call Type *
          </Label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, callType: 'whatsapp' })}
              className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                formData.callType === 'whatsapp'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:bg-muted'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Audio call</p>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, callType: 'phone' })}
              className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${
                formData.callType === 'phone'
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:bg-muted'
              }`}
            >
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <p className="font-medium text-sm">Phone</p>
                <p className="text-xs text-muted-foreground">Regular call</p>
              </div>
            </button>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <Label htmlFor="callback-date" className="text-foreground transition-colors duration-300">
            Preferred Date *
          </Label>
          <Input
            type="date"
            id="callback-date"
            min={today}
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            className="transition-colors duration-300"
          />
        </div>

        {/* Time */}
        <div className="space-y-2">
          <Label htmlFor="callback-time" className="text-foreground transition-colors duration-300">
            Preferred Time (Your Local Time) *
          </Label>
          <Input
            type="time"
            id="callback-time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            required
            className="transition-colors duration-300"
          />
          {formData.date && formData.time && (
            <div className="p-3 rounded-lg bg-muted/50 text-xs space-y-1">
              <p className="font-medium text-foreground">Time Conversion:</p>
              <p className="text-muted-foreground">
                Your time: {new Date(`${formData.date}T${formData.time}`).toLocaleString('en-US', {
                  timeZone: formData.timezone,
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
              </p>
              <p className="text-muted-foreground">
                My time (IST): {new Date(`${formData.date}T${formData.time}`).toLocaleString('en-US', {
                  timeZone: 'Asia/Kolkata',
                  dateStyle: 'medium',
                  timeStyle: 'short'
                })}
              </p>
            </div>
          )}
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <Label htmlFor="callback-notes" className="text-foreground transition-colors duration-300">
            Additional Notes (Optional)
          </Label>
          <Input
            type="text"
            id="callback-notes"
            placeholder="Any specific topics you'd like to discuss?"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="transition-colors duration-300"
          />
        </div>

        <Button type="submit" className="w-full transition-colors duration-300">
          Schedule Callback
        </Button>
      </form>
    </Card>
  )
}
