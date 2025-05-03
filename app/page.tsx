"use client"

import { useState } from "react"
import { Copy, Scroll } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

// Arabic placeholder text samples
const arabicText = {
  short: "هذا نص تجريبي لاختبار شكل وحجم النص العربي في هذا الموقع. يمكنك استخدام هذا النص كنموذج مؤقت لتصميمك.",
  medium:
    "هذا نص تجريبي لاختبار شكل وحجم النص العربي في هذا الموقع. يمكنك استخدام هذا النص كنموذج مؤقت لتصميمك. هذا النص لا يعني شيئاً وهو فقط لإظهار شكل النص على الصفحة. عندما يكون المصمم مهتماً بشكل التصميم أكثر من محتواه، يستخدم هذا النص البديل.",
  paragraphs: [
    "هذا نص تجريبي لاختبار شكل وحجم النص العربي في هذا الموقع. يمكنك استخدام هذا النص كنموذج مؤقت لتصميمك. هذا النص لا يعني شيئاً وهو فقط لإظهار شكل النص على الصفحة.",
    "عندما يكون المصمم مهتماً بشكل التصميم أكثر من محتواه، يستخدم هذا النص البديل. هذا النص يمكن أن يستبدل في نفس المساحة، لذلك هو مفيد لمعرفة حجم أي نص في التصميم.",
    "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.",
    "ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاً طبيعياً للأحرف بدلاً من استخدام هنا يوجد محتوى نصي، هنا يوجد محتوى نصي مما يجعلها تبدو وكأنها نص مقروء.",
    "العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل افتراضي كنموذج عن النص، وإذا قمت بإدخال في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث.",
  ],
}

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("paragraphs")
  const [paragraphCount, setParagraphCount] = useState(3)
  const [wordCount, setWordCount] = useState(50)
  const [generatedText, setGeneratedText] = useState("")
  const { toast } = useToast()

  // Generate text based on selected options
  const generateText = () => {
    if (selectedTab === "paragraphs") {
      // Get paragraphs up to the selected count, cycling if needed
      const result = []
      for (let i = 0; i < paragraphCount; i++) {
        result.push(arabicText.paragraphs[i % arabicText.paragraphs.length])
      }
      setGeneratedText(result.join("\n\n"))
    } else if (selectedTab === "words") {
      // Split the medium text into words and get the requested count
      const allWords = arabicText.medium.split(" ")
      const result = []
      for (let i = 0; i < wordCount; i++) {
        result.push(allWords[i % allWords.length])
      }
      setGeneratedText(result.join(" "))
    }
  }

  // Copy text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText)
    toast({
      title: "تم النسخ",
      description: "تم نسخ النص إلى الحافظة",
      duration: 2000,
      className: "bg-amber-700 text-amber-50 border-amber-800",
    })
  }

  // Generate text on mount and when options change
  useState(() => {
    generateText()
  })

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900">
      {/* Decorative header pattern */}
      <div
        className="h-8 bg-repeat-x w-full"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="8" viewBox="0 0 32 8"><path d="M0 0 L8 4 L16 0 L24 4 L32 0 L32 8 L0 8 Z" fill="%23b45309"/></svg>\')',
        }}
      ></div>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Scroll className="h-12 w-12 text-amber-700" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-amber-800">مولد النص العربي</h1>
            <p className="text-amber-700">أداة بسيطة لتوليد نص عربي للتصميم والنماذج</p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center my-6">
              <div className="h-px bg-amber-700/30 w-24"></div>
              <div className="mx-4 text-amber-700">❖</div>
              <div className="h-px bg-amber-700/30 w-24"></div>
            </div>
          </div>

          <Card className="border-amber-200 bg-amber-50 shadow-md">
            <CardHeader className="border-b border-amber-200">
              <CardTitle className="text-amber-800 text-2xl">إعدادات النص</CardTitle>
              <CardDescription className="text-amber-700">اختر نوع وطول النص الذي تريد توليده</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
                <TabsList className="grid w-full grid-cols-2 bg-amber-100">
                  <TabsTrigger
                    value="paragraphs"
                    className="data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
                  >
                    فقرات
                  </TabsTrigger>
                  <TabsTrigger
                    value="words"
                    className="data-[state=active]:bg-amber-700 data-[state=active]:text-amber-50"
                  >
                    كلمات
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="paragraphs" className="mt-4">
                  <div className="flex flex-row-reverse items-center gap-4">
                    <Label htmlFor="paragraphCount" className="min-w-24 text-amber-800 text-right">
                      عدد الفقرات:
                    </Label>
                    <Input
                      id="paragraphCount"
                      type="number"
                      min="1"
                      max="10"
                      value={paragraphCount}
                      onChange={(e) => setParagraphCount(Number.parseInt(e.target.value))}
                      className="w-24 border-amber-300 bg-amber-50 text-amber-900"
                    />
                    <Button onClick={generateText} className="bg-amber-700 hover:bg-amber-800 text-amber-50">
                      توليد
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="words" className="mt-4">
                  <div className="flex flex-row-reverse items-center gap-4">
                    <Label htmlFor="wordCount" className="min-w-24 text-amber-800 text-right">
                      عدد الكلمات:
                    </Label>
                    <Input
                      id="wordCount"
                      type="number"
                      min="5"
                      max="200"
                      value={wordCount}
                      onChange={(e) => setWordCount(Number.parseInt(e.target.value))}
                      className="w-24 border-amber-300 bg-amber-50 text-amber-900"
                    />
                    <Button onClick={generateText} className="bg-amber-700 hover:bg-amber-800 text-amber-50">
                      توليد
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    className="border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 hover:text-amber-900"
                  >
                    <Copy className="h-4 w-4 ml-2" />
                    نسخ النص
                  </Button>
                  <h3 className="text-lg font-medium text-amber-800">النص المولد</h3>
                </div>
                <div
                  className="p-6 border rounded-md bg-amber-100/50 border-amber-200 min-h-[200px] text-right whitespace-pre-wrap text-lg text-amber-950"
                  dir="rtl"
                >
                  {generatedText}
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-amber-50" onClick={copyToClipboard}>
                  <Copy className="h-4 w-4 ml-2" />
                  نسخ النص إلى الحافظة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Decorative footer pattern */}
          <div className="flex items-center justify-center mt-12 mb-4">
            <div className="h-px bg-amber-700/30 w-16"></div>
            <div className="mx-3 text-amber-700">☽</div>
            <div className="h-px bg-amber-700/30 w-16"></div>
          </div>

          <div className="text-center text-sm text-amber-700" dir="rtl">
            مولد النص العربي - بديل عربي لـ Lorem Ipsum
          </div>
        </div>
      </main>

      {/* Decorative footer pattern */}
      <div
        className="h-8 bg-repeat-x w-full mt-8"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="8" viewBox="0 0 32 8"><path d="M0 8 L8 4 L16 8 L24 4 L32 8 L32 0 L0 0 Z" fill="%23b45309"/></svg>\')',
        }}
      ></div>
    </div>
  )
}
