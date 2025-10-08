import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง
    const myProfile = {
      name: "ปวริศ คูณศรี",
      studentId: "67543210037-7", 
      major: "วิศวกรรมซอฟต์แวร์",
      year: 2,
      age: 22,
      gpa: 3.84,
      email: "pawaris_ko67@live.rmutl.ac.th",
      hobbies: [
          "Cooking",
          "Playing video games",
          "Traveling",
          "Reading books",
          "Watching movies"
      ],
      skills: [
          "JavaScript",
          "React.js",
          "Node.js",
          "CSS",
          "HTML"
      ],
      socialLinks: [
          { platform: "GitHub", url: "https://github.com/PeawZaZa" },
          { platform: "LinkedIn", url: "https://facebook.com/peaw.pawaris" },
          { platform: "Instagram", url: "https://instagram.com/iitz.nothhomas" },
          // เพิ่มเติมตามต้องการ
      ]
  };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={myProfile} />
        </div>
    );
}

export default App;