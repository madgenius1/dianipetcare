export interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  idealFor: string;
  priceRange: string;
  benefits: string[];
  safety: string;
}

export const services: Service[] = [
  {
    id: "dogwalking",
    title: "Dog Walking",
    image: "/petwalking.webp",
    description:
      "Our dog walking and activity services are tailored to keep your furry friend healthy, happy, and energized! Each walk is a mini adventure with stimulating play and care.",
    idealFor:
      "Perfect for active dogs of all breeds who need regular exercise and outdoor stimulation.",
    priceRange: "From Ksh. 800 per hour.",
    benefits: [
      "Daily or weekly walks at your preferred time.",
      "Helps reduce stress, boredom, and anxiety.",
      "Supervised by trained, pet-loving handlers.",
      "Ideal for socialization and physical fitness.",
      "Flexible booking for weekdays or weekends.",
    ],
    safety:
      "Walks are leashed and monitored closely with hydration breaks to ensure safety and comfort.",
  },
  {
    id: "petgrooming",
    title: "Pet Grooming",
    image: "/petgrooming.webp",
    description:
      "Our grooming services ensure your pet looks and feels their best — from bath and brushing to full coat care.",
    idealFor:
      "Perfect for pets needing regular hygiene care and coat maintenance.",
    priceRange: "From Ksh. 3000 per 3hr session.",
    benefits: [
      "Improves skin and coat health.",
      "Prevents tangles and shedding.",
      "Gentle, pet-safe products.",
      "Reduces odor and parasites.",
      "Professional, stress-free experience.",
    ],
    safety:
      "Handled by experienced groomers with clean tools and calming environments.",
  },
  {
    id: "petsitting",
    title: "Pet Sitting",
    image: "/petsitting.webp",
    description:
      "When you are away, we ensure your pet stays comfortable, fed, and happy at home.",
    idealFor:
      "For pet parents working long hours or traveling who want reliable home care.",
    priceRange: "From Ksh. 800 per day.",
    benefits: [
      "Feeding, playtime, and walks included.",
      "Flexible hourly or overnight options.",
      "Daily photo updates and communication.",
      "Trusted, trained sitters.",
      "Customized schedules per pet.",
    ],
    safety:
      "Sitters are trained in pet care for safe in-home visits.",
  },
  {
    id: "pettransport",
    title: "Pet Transport",
    image: "/pettransport.webp",
    description:
      "Safe, comfortable rides for pets to vets, groomers, or anywhere they need to go.",
    idealFor:
      "Perfect for pet owners who need help transporting pets safely around Diani or Ukunda.",
    priceRange: "From Ksh. 1000 for pick and drop.",
    benefits: [
      "Pet-safe carriers and seat belts.",
      "Trained handlers during transit.",
      "Door-to-door convenience.",
      "Vet-stop option available.",
    ],
    safety:
      "Vehicles sanitized and equipped with ventilation and comfort gear for each pet.",
  },
  {
    id: "petboarding",
    title: "Pet Boarding",
    image: "/petboarding.webp",
    description:
      "A safe and cozy space for your pet while you’re away — supervised 24/7 by caring staff.",
    idealFor:
      "Great for pets staying several days or weeks, ensuring comfort and playtime.",
    priceRange: "From Ksh. 1200 per night.",
    benefits: [
      "Spacious, clean, comfortable spaces.",
      "Daily exercise and playtime.",
      "Regular feeding and grooming.",
      "Optional webcam check-ins.",
      "Vet-on-call and safe supervision.",
    ],
    safety:
      "Secure facilities with strict hygiene and trained caretakers to ensure peace of mind.",
  },
  {
    id: "pettraining",
    title: "Pet Training",
    image: "/pettraining.webp",
    description:
      "Build a stronger bond with your pet through structured, positive training sessions.",
    idealFor:
      "Ideal for puppies or dogs needing obedience, socialization, or behavior correction.",
    priceRange: "From Ksh. 25000 per training plan.",
    benefits: [
      "One-on-one or group sessions available.",
      "Positive reinforcement techniques only.",
      "Improves listening, recall, and leash behavior.",
      "Certified trainers in Diani.",
      "Progress tracking and personalized plans.",
    ],
    safety:
      "Training uses humane methods and rewards — ensuring a happy, confident pet.",
  },
];
