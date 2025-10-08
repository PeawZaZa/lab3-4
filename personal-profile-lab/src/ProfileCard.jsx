import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
    // ฟังก์ชันสำหรับแสดง Avatar (ตัวอักษรแรกของชื่อ)
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        // TODO: นักศึกษาเขียนฟังก์ชัน toggle เอง
        setIsDarkMode(!isDarkMode);

    };


    // TODO: เพิ่ม className conditionally
    const cardClassName = `profile-card ${/* เงื่อนไข dark mode */ isDarkMode ? 'dark-mode' : ''}`;
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();
    };

    // ฟังก์ชันจัดการเมื่อคลิกปุ่ม Contact

    // ฟังก์ชันจัดการเมื่อคลิกที่ skill
    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    // TODO: นักศึกษาจะเพิ่ม state และ functions เพิ่มเติมในส่วน Challenge
    const [viewCount, setViewCount] = useState(0);
    const [favoriteHobbies, setFavoriteHobbies] = useState([]);
    const [showContactForm, setShowContactForm] = useState(false);
    const handleCardClick = () => {
    // TODO: เพิ่ม view count
    setViewCount(viewCount + 1);
};

const toggleFavoriteHobby = (hobby) => {
    // TODO: เพิ่ม/ลบ hobby จาก favorites
    if (favoriteHobbies.includes(hobby)) {
        setFavoriteHobbies(favoriteHobbies.filter(h => h !== hobby));
    } else {
        setFavoriteHobbies([...favoriteHobbies, hobby]);
    }
};

const handleContactClick = () => {
    // TODO: แสดง contact form แทน alert
    //alert(`สวัสดี! ติดต่อ ${profile.name} ที่อีเมล ${profile.email}`);
    if (!showContactForm) {
        setShowContactForm(true);
    }
    else {
        setShowContactForm(false);
    }


};

    return (

        <div className={cardClassName} onClick={handleCardClick}>
            <div className="view-counter">
                👁️ Views: {viewCount}
            </div>
            <div className="profile-header">
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                >
                    {/* แสดง emoji ตาม mode */}
                    {isDarkMode ? '🌞' : '🌙'}

                </button>
                <div className="profile-avatar">
                    {getInitials(profile.name)}
                </div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>
            </div>

            {/* ข้อมูลพื้นฐาน */}
            <div className="profile-info">
                <div className="info-item">
                    <div className="info-label">สาขา</div>
                    <div className="info-value">{profile.major}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">ชั้นปี</div>
                    <div className="info-value">{profile.year}</div>
                </div>
                <div className="info-item">
                    <div className="info-label">อายุ</div>
                    <div className="info-value">{profile.age} ปี</div>
                </div>
                <div className="info-item">
                    <div className="info-label">เกรด</div>
                    <div className="info-value">
                        {profile.gpa.toFixed(2)}
                        {profile.gpa >= 3.5 && ' 🌟'}
                    </div>
                </div>
            </div>
            {/* Achievement Badges - หลัง info section */}
            <div className="profile-section">
                <h3>🏆 Achievements</h3>
                <div className="achievements">
                    {/* TODO: เพิ่มเงื่อนไขแสดง badges */}
                    {profile.gpa >= 3.5 && (
                        <span className="achievement-badge">
                            🌟 เกียรตินิยม
                        </span>
                    )}
                    {profile.skills.length >= 5 && (
                        <span className="achievement-badge">
                            💪 Multi-skilled
                        </span>
                    )}
                    {/* เพิ่ม achievement เงื่อนไขอื่นๆ */}
                </div>
            </div>
            {/* งานอดิเรก */}
            
            <div className="profile-section">
                <h3>🎯 งานอดิเรก</h3>
                
                <ul className="hobbies-list">
                    {profile.hobbies.map((hobby, index) => (
                        <li 
                            key={index} 
                            className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavoriteHobby(hobby);
                            }}
                        >
                            {hobby} {favoriteHobbies.includes(hobby) && '💖'}
                        </li>
                    ))}
                </ul>
            </div>

            {/* ทักษะ */}
            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-tag"
                            onClick={() => handleSkillClick(skill)}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
            {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="profile-section">
                    <h3>🌐 Social Media</h3>
                    <div className="social-links">
                        {profile.socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                {link.platform}
                            </a>
                        ))}

                    </div>
                </div>
            )}
            {/* TODO: นักศึกษาจะเพิ่ม sections เพิ่มเติมใน Challenge */}
            
            {/* ปุ่ม Contact */}
            <button
                className="contact-button"
                onClick={handleContactClick}
            >
                📧 ติดต่อ {profile.name}
            </button>
            {/* Contact Form */}
            {showContactForm && (
                <div className="contact-form">
                    {/* TODO: สร้าง simple form */}
                    <h3>Contact {profile.name}</h3>
                    <form onClick={(e) => e.stopPropagation()}>
                        <div className="form-group">
                            <label>ชื่อของคุณ:</label>
                            <input type="text" placeholder="กรอกชื่อของคุณ" />
                        </div>
                        <div className="form-group">
                            <label>อีเมลของคุณ:</label>
                            <input type="email" placeholder="กรอกอีเมลของคุณ" />
                        </div>
                        <div className="form-group">
                            <label>ข้อความ:</label>
                            <textarea placeholder="เขียนข้อความของคุณที่นี่"></textarea>
                        </div>
                        <button type="submit" className="submit-button">ส่งข้อความ</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProfileCard;