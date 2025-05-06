import React from 'react';
import Layout from '../components/layout/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About TechPlus</h1>
          
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              At TechPlus, we believe that technology is the driving force behind human progress. 
              Our mission is to provide insightful, accurate, and timely coverage of the 
              technological innovations that are shaping our future. We strive to make complex 
              technical subjects accessible to everyone, from industry experts to curious beginners.
            </p>
            
            <h2>Our Story</h2>
            <p>
              TechPlus was founded in 2020 by a group of technology journalists and enthusiasts 
              who saw the need for a different kind of tech publication—one that goes beyond 
              superficial coverage and dives deep into the implications of technological change.
            </p>
            
            <p>
              What started as a small blog has grown into a comprehensive technology news platform 
              with millions of monthly readers. Despite our growth, we've remained committed to 
              our founding principles: integrity in reporting, depth in analysis, and clarity in 
              communication.
            </p>
            
            <div className="my-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <blockquote className="italic text-xl border-l-4 border-blue-500 pl-4">
                "Technology is best when it brings people together."
                <footer className="mt-2 font-normal text-lg">
                  — Matt Mullenweg, Founder of WordPress
                </footer>
              </blockquote>
            </div>
            
            <h2>Our Team</h2>
            <p>
              Our diverse team consists of experienced journalists, former tech industry professionals, 
              and subject matter experts across various fields. This diversity of backgrounds enables 
              us to cover technology from multiple perspectives and provide our readers with nuanced, 
              well-informed content.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <TeamMember
                name="Sarah Johnson"
                role="Editor-in-Chief"
                image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <TeamMember
                name="David Chen"
                role="Senior Tech Editor"
                image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
              <TeamMember
                name="Aisha Rodriguez"
                role="AI & ML Specialist"
                image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
              />
            </div>
            
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Accuracy:</strong> We verify all information before publication and promptly correct any errors.
              </li>
              <li>
                <strong>Depth:</strong> We go beyond headlines to provide context, analysis, and insight.
              </li>
              <li>
                <strong>Independence:</strong> Our editorial decisions are made without external influence.
              </li>
              <li>
                <strong>Accessibility:</strong> We explain complex technical concepts in clear, understandable language.
              </li>
              <li>
                <strong>Forward-thinking:</strong> We focus not just on what's happening now, but on what it means for the future.
              </li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>
              We value feedback from our readers. If you have questions, comments, or tips, please 
              don't hesitate to reach out to us through our <a href="/contact">contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{role}</p>
    </div>
  );
};

export default AboutPage;