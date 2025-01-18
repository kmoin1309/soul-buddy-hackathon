import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import aries from "../../public/profiles/aries_profile.jpg" // Import the image

export default function Reviews() {
  const testimonials = [
    {
      text: "On the other hand, we denounce The righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded.",
      author: "Aries Dmello",
      role: "SDE",
      image: aries // Use the imported image directly
    },
    {
      text: "On the other hand, we denounce The righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded.",
      author: "Quazi Moin",
      role: "Developer",
      image: aries // Use the imported image directly
    },
    {
      text: "On the other hand, we denounce The righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded.",
      author: "Sujit Mishra",
      role: "Engineer",
      image: aries // Use the imported image directly
    }
  ]

  return (
    <div className="bg-[#FAFAFA] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium font-serif mb-6">Our Client Says</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-sm">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="aries" alt={testimonial.author} /> {/* Correctly use the imported image */}
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
