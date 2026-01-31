// Image imports
import implantHeroImg from "@/assets/implant-hero.jpg";
import laserHeroImg from "@/assets/laser-dentistry-hero.jpg";
import digitalHeroImg from "@/assets/digital-dentistry-hero.jpg";
import clinicProcedureImg from "@/assets/clinic-procedure.jpg";
import thanjavurTempleImg from "@/assets/thanjavur-temple.jpg";
import drBaskaranPortraitImg from "@/assets/dr-baskaran-portrait.jpg";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate?: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding Dental Implant Longevity: What Factors Determine Success?",
    slug: "understanding-dental-implant-longevity",
    excerpt: "Dental implants are designed to last a lifetime, but several factors influence their longevity. Learn about the key determinants of implant success from a clinical perspective.",
    image: implantHeroImg,
    content: `
      <p>Dental implants have revolutionized modern dentistry, offering a permanent solution for missing teeth. However, many patients wonder: how long will my dental implants last?</p>
      
      <h2>The Science Behind Implant Longevity</h2>
      <p>Dental implants are made from biocompatible titanium, which fuses with the jawbone through a process called osseointegration. This biological bond is the foundation of implant success and longevity.</p>
      
      <h2>Key Factors Affecting Implant Success</h2>
      
      <h3>1. Bone Quality and Quantity</h3>
      <p>Sufficient bone density and volume are crucial for implant stability. Patients with adequate bone structure have significantly higher success rates.</p>
      
      <h3>2. Oral Hygiene</h3>
      <p>Maintaining excellent oral hygiene is essential. Regular brushing, flossing, and professional cleanings prevent peri-implantitis, a condition that can lead to implant failure.</p>
      
      <h3>3. Surgical Precision</h3>
      <p>Navigation-guided and semi-robotic implant systems ensure precise placement, reducing complications and improving long-term outcomes. At Raga Dental, we use advanced technology to achieve optimal positioning.</p>
      
      <h3>4. Lifestyle Factors</h3>
      <p>Smoking, excessive alcohol consumption, and uncontrolled diabetes can negatively impact implant success. A healthy lifestyle significantly improves outcomes.</p>
      
      <h3>5. Regular Maintenance</h3>
      <p>Regular check-ups and professional maintenance are essential. We recommend follow-up visits every 6 months to monitor implant health.</p>
      
      <h2>What the Research Shows</h2>
      <p>Studies show that dental implants have a success rate of over 95% after 10 years when properly placed and maintained. With modern techniques and materials, many implants last a lifetime.</p>
      
      <h2>Our Approach at Raga Dental</h2>
      <p>Dr. Baskaran's 25+ years of experience, combined with navigation-guided implant systems, ensures optimal placement and long-term success. We focus on precision, predictability, and biological harmony.</p>
      
      <p>If you're considering dental implants, schedule a consultation to discuss your specific case and learn how we can help you achieve lasting results.</p>
    `,
    author: "Dr. Baskaran",
    authorRole: "Chief Implantologist",
    publishedDate: "2024-12-15",
    category: "Implantology",
    tags: ["Dental Implants", "Implant Success", "Long-term Care", "Precision Dentistry"],
    readTime: 6,
    featured: true,
  },
  {
    id: "2",
    title: "The Science Behind Pain-Free Dentistry: How Modern Technology Eliminates Discomfort",
    slug: "science-behind-pain-free-dentistry",
    excerpt: "Modern dental technology and protocols have made truly pain-free dental procedures a reality. Discover how laser dentistry and advanced techniques eliminate discomfort.",
    image: laserHeroImg,
    content: `
      <p>For many patients, fear of pain is the primary barrier to seeking dental care. However, modern dentistry has transformed the patient experience, making pain-free procedures not just possible, but standard.</p>
      
      <h2>Laser Dentistry: A Game Changer</h2>
      <p>Laser dentistry, pioneered in South Tamil Nadu by Dr. Baskaran, offers numerous advantages over traditional methods:</p>
      
      <ul>
        <li><strong>Minimal Discomfort:</strong> Lasers are precise and cause less trauma to surrounding tissues</li>
        <li><strong>Reduced Bleeding:</strong> Lasers cauterize as they cut, minimizing bleeding</li>
        <li><strong>Faster Healing:</strong> Less tissue damage means quicker recovery</li>
        <li><strong>No Needles:</strong> Many procedures can be performed without anesthesia</li>
      </ul>
      
      <h2>Advanced Anesthesia Techniques</h2>
      <p>Modern anesthesia delivery systems ensure maximum comfort with minimal medication. Computer-controlled delivery and topical anesthetics make injections virtually painless.</p>
      
      <h2>Digital Planning Reduces Procedure Time</h2>
      <p>Digital dentistry allows us to plan procedures precisely, reducing chair time and minimizing patient discomfort. Pre-operative planning means fewer surprises and smoother procedures.</p>
      
      <h2>Patient Comfort Protocols</h2>
      <p>At Raga Dental, we employ comprehensive comfort protocols:</p>
      <ul>
        <li>Pre-procedure anxiety management</li>
        <li>Comfortable, modern treatment rooms</li>
        <li>Music and entertainment options</li>
        <li>Post-procedure care instructions</li>
      </ul>
      
      <h2>The Psychological Component</h2>
      <p>Understanding patient concerns and providing clear communication reduces anxiety, which in turn reduces perceived pain. Our team takes time to explain procedures and answer questions.</p>
      
      <h2>Real Patient Experiences</h2>
      <p>Many patients report that their experience at Raga Dental was more comfortable than they expected. Our focus on pain-free dentistry has helped countless patients overcome dental anxiety.</p>
      
      <p>If dental anxiety has kept you from seeking care, schedule a consultation. We'll discuss how we can make your dental experience comfortable and stress-free.</p>
    `,
    author: "Dr. Baskaran",
    authorRole: "Chief Implantologist",
    publishedDate: "2024-12-10",
    category: "Laser Dentistry",
    tags: ["Pain-Free Dentistry", "Laser Dentistry", "Patient Comfort", "Dental Anxiety"],
    readTime: 5,
    featured: true,
  },
  {
    id: "3",
    title: "Digital Planning: The Future of Dental Care and Precision Treatment",
    slug: "digital-planning-future-dental-care",
    excerpt: "Digital workflows are transforming dental treatment outcomes and patient experiences. Learn how digital dentistry improves precision, predictability, and patient satisfaction.",
    image: digitalHeroImg,
    content: `
      <p>Digital dentistry represents the future of dental care, offering unprecedented precision, predictability, and patient satisfaction. At Raga Dental, we've embraced digital workflows to deliver superior outcomes.</p>
      
      <h2>What is Digital Dentistry?</h2>
      <p>Digital dentistry involves using computer-based technology for diagnosis, treatment planning, and execution. This includes:</p>
      <ul>
        <li>3D imaging and CBCT scans</li>
        <li>Digital impressions</li>
        <li>Computer-aided design (CAD)</li>
        <li>Computer-aided manufacturing (CAM)</li>
        <li>Navigation-guided surgery</li>
      </ul>
      
      <h2>Benefits for Patients</h2>
      
      <h3>1. Precision and Predictability</h3>
      <p>Digital planning allows us to visualize outcomes before treatment begins. Patients can see exactly what to expect, reducing uncertainty and anxiety.</p>
      
      <h3>2. Reduced Treatment Time</h3>
      <p>Digital workflows streamline processes, often reducing the number of visits required. Same-day restorations are now possible for many procedures.</p>
      
      <h3>3. Improved Comfort</h3>
      <p>Digital impressions eliminate the discomfort of traditional impression materials. The process is faster and more comfortable for patients.</p>
      
      <h3>4. Better Outcomes</h3>
      <p>Precision planning leads to better-fitting restorations, more accurate implant placement, and superior aesthetic results.</p>
      
      <h2>Navigation-Guided Implant Surgery</h2>
      <p>One of the most significant advances in digital dentistry is navigation-guided implant surgery. This technology allows us to:</p>
      <ul>
        <li>Plan implant placement in 3D before surgery</li>
        <li>Navigate precisely during surgery</li>
        <li>Avoid critical structures</li>
        <li>Optimize implant positioning for aesthetics and function</li>
      </ul>
      
      <h2>Digital Workflow at Raga Dental</h2>
      <p>Our digital workflow includes:</p>
      <ol>
        <li><strong>Digital Scanning:</strong> 3D imaging captures precise anatomical data</li>
        <li><strong>Virtual Planning:</strong> Treatment is planned in a virtual environment</li>
        <li><strong>Guided Execution:</strong> Navigation systems guide precise execution</li>
        <li><strong>Quality Control:</strong> Digital verification ensures accuracy</li>
      </ol>
      
      <h2>The Future is Here</h2>
      <p>Digital dentistry is not the future—it's the present. At Raga Dental, we're committed to staying at the forefront of technology to provide our patients with the best possible care.</p>
      
      <p>Experience the difference that digital dentistry can make. Schedule a consultation to learn how digital planning can improve your treatment outcomes.</p>
    `,
    author: "Dr. Baskaran",
    authorRole: "Chief Implantologist",
    publishedDate: "2024-12-05",
    category: "Digital Dentistry",
    tags: ["Digital Dentistry", "Technology", "Precision", "Treatment Planning"],
    readTime: 7,
    featured: true,
  },
  {
    id: "4",
    title: "Long-Term Oral Health: Building a Foundation for Lifelong Wellness",
    slug: "long-term-oral-health-prevention",
    excerpt: "Building a foundation for lifelong oral health through evidence-based prevention strategies. Learn how to maintain healthy teeth and gums for life.",
    image: clinicProcedureImg,
    content: `
      <p>Oral health is integral to overall health and well-being. Building a strong foundation for long-term oral health requires a combination of professional care, home care, and healthy habits.</p>
      
      <h2>The Foundation: Prevention</h2>
      <p>Prevention is always better than treatment. Regular dental check-ups and cleanings are essential for maintaining oral health and catching problems early.</p>
      
      <h2>Daily Home Care</h2>
      <p>Effective daily oral hygiene includes:</p>
      <ul>
        <li><strong>Brushing:</strong> Twice daily with fluoride toothpaste</li>
        <li><strong>Flossing:</strong> Daily to remove plaque between teeth</li>
        <li><strong>Mouthwash:</strong> Antimicrobial rinses can help reduce bacteria</li>
        <li><strong>Proper Technique:</strong> Your dentist can demonstrate correct techniques</li>
      </ul>
      
      <h2>Diet and Oral Health</h2>
      <p>What you eat significantly impacts your oral health:</p>
      <ul>
        <li>Limit sugary and acidic foods</li>
        <li>Eat a balanced diet rich in vitamins and minerals</li>
        <li>Stay hydrated with water</li>
        <li>Avoid frequent snacking</li>
      </ul>
      
      <h2>Regular Professional Care</h2>
      <p>Professional cleanings and check-ups every 6 months help:</p>
      <ul>
        <li>Remove tartar that can't be removed at home</li>
        <li>Detect problems early</li>
        <li>Provide preventive treatments like fluoride</li>
        <li>Monitor changes over time</li>
      </ul>
      
      <h2>Addressing Problems Early</h2>
      <p>Early intervention is key to preventing more serious problems. Regular check-ups allow us to catch issues like cavities, gum disease, and oral cancer in their earliest stages.</p>
      
      <h2>Special Considerations</h2>
      <p>Certain conditions require special attention:</p>
      <ul>
        <li><strong>Diabetes:</strong> Requires extra vigilance with oral care</li>
        <li><strong>Pregnancy:</strong> Hormonal changes affect oral health</li>
        <li><strong>Medications:</strong> Some medications affect oral health</li>
        <li><strong>Age:</strong> Oral health needs change with age</li>
      </ul>
      
      <h2>Our Commitment</h2>
      <p>At Raga Dental, we're committed to helping you maintain optimal oral health for life. We provide personalized care plans and education to support your long-term wellness.</p>
      
      <p>Schedule a preventive care appointment to establish your foundation for lifelong oral health.</p>
    `,
    author: "Dr. Baskaran",
    authorRole: "Chief Implantologist",
    publishedDate: "2024-11-28",
    category: "Preventive Care",
    tags: ["Preventive Care", "Oral Health", "Wellness", "Long-term Care"],
    readTime: 6,
  },
  {
    id: "5",
    title: "Dental Tourism in Thanjavur: World-Class Care in a Cultural Haven",
    slug: "dental-tourism-thanjavur",
    excerpt: "Discover why patients from around the world choose Thanjavur for dental treatment. World-class care combined with rich cultural experiences.",
    image: thanjavurTempleImg,
    content: `
      <p>Thanjavur, with its rich cultural heritage and world-class dental facilities, has become a premier destination for dental tourism. Patients from around the globe choose Raga Dental for exceptional care combined with an unforgettable cultural experience.</p>
      
      <h2>Why Choose Thanjavur for Dental Care?</h2>
      
      <h3>1. World-Class Facilities</h3>
      <p>Raga Dental's 7,000 sq.ft facility features state-of-the-art equipment and technology comparable to the best clinics worldwide. We maintain international standards while offering significantly lower costs.</p>
      
      <h3>2. Expert Care</h3>
      <p>Dr. Baskaran's 25+ years of experience, combined with training at NYU and Unicamillus University, Italy, ensures you receive expert care. Our team is experienced in treating international patients.</p>
      
      <h3>3. Cost-Effective Treatment</h3>
      <p>High-quality dental care in India costs a fraction of what you'd pay in Western countries, without compromising on quality or outcomes.</p>
      
      <h3>4. Cultural Experience</h3>
      <p>Thanjavur offers a unique blend of ancient temples, rich history, and modern amenities. Your dental journey becomes a cultural adventure.</p>
      
      <h2>Our Dental Tourism Services</h2>
      <p>We provide comprehensive support for international patients:</p>
      <ul>
        <li>Pre-arrival consultations via video call</li>
        <li>Treatment planning and cost estimates</li>
        <li>Travel assistance and recommendations</li>
        <li>Accommodation suggestions</li>
        <li>Post-treatment follow-up care</li>
        <li>Multilingual support</li>
      </ul>
      
      <h2>Popular Treatments for International Patients</h2>
      <ul>
        <li>Dental implants (navigation-guided and semi-robotic)</li>
        <li>Full mouth rehabilitation</li>
        <li>Cosmetic dentistry</li>
        <li>Laser dentistry procedures</li>
        <li>Digital dentistry solutions</li>
      </ul>
      
      <h2>Patient Testimonials</h2>
      <p>Our international patients consistently praise not just the quality of care, but the entire experience—from initial consultation to follow-up care.</p>
      
      <h2>Planning Your Visit</h2>
      <p>We recommend planning your visit with enough time for both treatment and recovery, as well as exploring the cultural treasures of Thanjavur and surrounding areas.</p>
      
      <p>Contact us to begin planning your dental tourism journey to Thanjavur. We'll help coordinate every aspect of your visit.</p>
    `,
    author: "Dr. Baskaran",
    authorRole: "Chief Implantologist",
    publishedDate: "2024-11-20",
    category: "Dental Tourism",
    tags: ["Dental Tourism", "International Patients", "Thanjavur", "Travel"],
    readTime: 8,
  },
  {
    id: "6",
    title: "Semi-Robotic Implant Systems: The Next Generation of Precision Dentistry",
    slug: "semi-robotic-implant-systems",
    excerpt: "Explore how semi-robotic implant systems are revolutionizing dental implant surgery, offering unprecedented precision and improved outcomes.",
    image: implantHeroImg,
    content: `
      <p>Semi-robotic implant systems represent the cutting edge of dental implantology, combining the precision of robotics with the expertise of skilled clinicians. At Raga Dental, we're early adopters of this revolutionary technology.</p>
      
      <h2>What Are Semi-Robotic Implant Systems?</h2>
      <p>Semi-robotic systems assist surgeons during implant placement, providing real-time guidance and precision control. The system doesn't replace the surgeon but enhances their capabilities.</p>
      
      <h2>Key Advantages</h2>
      
      <h3>1. Unprecedented Precision</h3>
      <p>Robotic assistance allows for placement accuracy within 0.1mm, far exceeding what's possible with freehand techniques.</p>
      
      <h3>2. Reduced Surgical Time</h3>
      <p>Precise planning and guided execution reduce procedure time, minimizing patient discomfort and recovery time.</p>
      
      <h3>3. Improved Safety</h3>
      <p>Real-time monitoring helps avoid critical structures like nerves and blood vessels, reducing complication risks.</p>
      
      <h3>4. Better Aesthetic Outcomes</h3>
      <p>Precise placement allows for optimal positioning for both function and aesthetics, resulting in natural-looking results.</p>
      
      <h2>How It Works</h2>
      <p>The process involves:</p>
      <ol>
        <li><strong>3D Planning:</strong> CBCT scans create a detailed 3D model</li>
        <li><strong>Virtual Placement:</strong> Implants are positioned virtually for optimal results</li>
        <li><strong>Robotic Guidance:</strong> The system guides precise placement during surgery</li>
        <li><strong>Verification:</strong> Real-time feedback ensures accuracy</li>
      </ol>
      
      <h2>Patient Benefits</h2>
      <p>Patients benefit from:</p>
      <ul>
        <li>Shorter procedure times</li>
        <li>Reduced post-operative discomfort</li>
        <li>Faster healing</li>
        <li>Superior long-term outcomes</li>
        <li>Natural-looking results</li>
      </ul>
      
      <h2>Our Experience</h2>
      <p>Dr. Baskaran is an early adopter of semi-robotic implant systems, having extensive experience with this technology. Our results speak for themselves—consistently excellent outcomes with high patient satisfaction.</p>
      
      <h2>The Future of Implantology</h2>
      <p>Semi-robotic systems represent the future of implantology. As technology continues to advance, we're committed to staying at the forefront to provide our patients with the best possible care.</p>
      
      <p>If you're considering dental implants, ask about our semi-robotic implant systems. Experience the difference that cutting-edge technology can make.</p>
    `,
    author: "Dr. Baskaran",
    authorRole: "Chief Implantologist",
    publishedDate: "2024-11-15",
    category: "Implantology",
    tags: ["Semi-Robotic Implants", "Technology", "Precision", "Innovation"],
    readTime: 7,
    featured: true,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map(post => post.category)));
};

