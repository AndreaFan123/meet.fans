export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Kim",
      role: "BTS ARMY Member",
      content:
        "I met my closest friends through MelodyMeet! The BTS listening parties are so much fun, and the community is incredibly welcoming.",
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "James Lee",
      role: "Event Organizer",
      content:
        "As someone who organizes K-pop dance workshops, MelodyMeet has been an amazing platform to find passionate participants and grow our community.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Emma Chen",
      role: "TWICE Fan",
      content:
        "I was new to K-pop when I joined, but everyone was so friendly and inclusive. Now I help organize TWICE fan meetings in my city!",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join thousands of K-pop fans who have found their community through MelodyMeet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-card rounded-lg p-6 shadow-sm border border-border flex flex-col"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-card-foreground flex-grow italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}