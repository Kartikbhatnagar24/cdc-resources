import React from "react";
import TeamCard from "./TeamCard.jsx";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Divyansh Singh Rana",
      image: "divyansh_singh_rana.jpg",
      linkedinUrl: "https://www.linkedin.com/in/divyanshsinghrana/",
      instagramUrl: "https://www.instagram.com/divyansh_singh_rana_?igsh=MWZkd3BmbmJxaXVudg==",
      contactNumber: "+91 8829095000"
    },
    {
      name: "Shameek Saha",
      image: "shameek_saha.jpg",
      linkedinUrl: "https://www.linkedin.com/in/shameek-saha-5b0838287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagramUrl: "https://www.instagram.com/lone.wolf.sham?igsh=MW4ydnNxbjJ2aW9rag==",
      contactNumber: "+91 7679881593"
    },
    {
      name: "Divyanshu Baurai",
      image: "divyanshu.jpg",
      linkedinUrl: "https://www.linkedin.com/in/divyanshubaurai/",
      instagramUrl: "https://www.instagram.com/divyanshu_baurai?igsh=anU4cnhtOHVzY280",
      contactNumber: "+91 6394752933"
    },
    {
      name: "Tushar Kumar",
      image: "tushar.JPG",
      linkedinUrl: "https://www.linkedin.com/in/tushar-kumar-33a932146/",
      instagramUrl: "https://www.instagram.com/_snapshot_oo7?igsh=MTloa2s3N2UwbmNtaQ%3D%3D&utm_source=qr ",
      contactNumber: "+91 6265983819"
    },
    {
      name:"Hari Prasad Gardas",
      image:"hari.JPG",
      linkedinUrl:"https://www.linkedin.com/in/hari-prasad-gardas-618536232",
      instagramUrl:"https://www.instagram.com/hari_gardas?igsh=b3owbDU4dDhwaHhp",
      contactNumber:"+91 7416767210"
    },
    {
      name:"Kartik Bhatnagar",
      image:"kartik.jpeg",
      linkedinUrl:"https://www.linkedin.com/in/kartik-bhatnagar-b2b042230/",
      instagramUrl:"https://www.instagram.com/bhatnagarkartik/",
      contactNumber:"+91 8875479888"
    },
    {
      name:"Rakesh Rulaniya",
      image:"rakesh.jpg",
      linkedinUrl:"https://www.linkedin.com/in/rakesh-rulaniya-958a2222b/",
      instagramUrl:"https://www.instagram.com/rakeshr2131?igsh=MXJycGx2Y3B2cms4ag==",
      contactNumber:"+91 8690594016"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Our Team
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            image={member.image}
            linkedinUrl={member.linkedinUrl}
            instagramUrl={member.instagramUrl}
            contactNumber={member.contactNumber}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
