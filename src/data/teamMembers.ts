export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills?: string[];
  achievements?: string[];
  specialization?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sathish Chandra Peyyala",
    role: "CEO & Founder",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHEAJzmtbsIQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722711320674?e=1758153600&v=beta&t=ASv1XrEXHO02Hzj5GjYrD1Vzyj6I5-hN4xPIlzWsNu0", // You can update this with actual image URL
    bio: "Visionary leader with 10+ years of experience in digital transformation. Led 50+ successful projects and helped businesses achieve 300% growth through innovative technology solutions.",
    skills: ["Strategic Planning", "Business Development", "Team Leadership", "Digital Strategy", "Project Management"],
    achievements: ["Founded Asian Digital World", "50+ Successful Projects", "300% Client Growth Rate"],
    specialization: "Digital Strategy & Leadership",
  },
  {
    name: "Devaraya Lalitha",
    role: "HR & Project Manager",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG5ueQzvytoww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725954059196?e=1758153600&v=beta&t=1qsGsGOGaMuGlnfbQus-znb1doefJJNHPgHMxGw-Unc", // You can update this with actual image URL
    bio: "Expert HR professional and project manager with a passion for building high-performing teams. Specializes in talent acquisition, team development, and ensuring project delivery excellence.",
    skills: ["Human Resources", "Project Management", "Team Building", "Talent Acquisition", "Process Optimization"],
    achievements: ["Certified PMP", "Built 20+ High-Performance Teams", "99% Project Success Rate"],
    specialization: "HR & Project Management",
  },
  {
    name: "Nimmagadda Abhishek",
    role: "Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHLkiML0bYOug/profile-displayphoto-crop_800_800/B56ZgPBnBNGUAQ-/0/1752598739464?e=1758153600&v=beta&t=jA6dr6CrORIEnV19lAmKrD1whNKCUmCNDxZty1bF3hQ", // You can update this with actual image URL
    bio: "Full-stack developer with expertise in modern web technologies. Passionate about creating scalable, user-friendly applications that drive business growth and enhance user experience.",
    skills: ["React", "Node.js", "Python", "MongoDB", "AWS", "TypeScript"],
    achievements: ["AWS Certified", "Built 30+ Web Applications", "Open Source Contributor"],
    specialization: "Full-Stack Development",
  },
  {
    name: "Ellanki Prudhvi Raj",
    role: "General Manager",
    image: "https://ik.imagekit.io/ya7vx4agl/New%20Folder/WhatsApp%20Image%202025-07-15%20at%2022.22.39_7d40c113.jpg?updatedAt=1752599277384", // You can update this with actual image URL
    bio: "Strategic operations leader focused on business growth and operational excellence. Expert in process optimization, client relationship management, and driving organizational efficiency.",
    skills: ["Operations Management", "Business Strategy", "Client Relations", "Process Optimization", "Team Leadership"],
    achievements: ["MBA in Operations", "Improved Efficiency by 40%", "Client Satisfaction 98%"],
    specialization: "Operations & Strategy",
  },
  {
    name: "Pinnepe Siddhu",
    role: "Managing Director",
    image: "https://ik.imagekit.io/ya7vx4agl/New%20Folder/cropped_circle_image.png?updatedAt=1752604967530", // You can update this with actual image URL
    bio: "Experienced business leader with a track record of scaling technology companies. Focuses on strategic partnerships, market expansion, and driving innovation across all business verticals.",
    skills: ["Business Leadership", "Strategic Partnerships", "Market Analysis", "Innovation Management", "Stakeholder Relations"],
    achievements: ["Scaled 3 Startups", "Strategic Partner Network", "Industry Recognition"],
    specialization: "Business Leadership & Strategy",
  }
];

export default teamMembers;