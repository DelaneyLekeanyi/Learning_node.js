class Person {
    constructor(firstName, lastName, age, education, skills, experience) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.education = education;
        this.skills = skills;
        this.experience = experience;
    }

    toString() {
        // Parse education entries to extract institution and period
        const parsedEducation = this.education.map(edu => {
            const match = edu.match(/(.*?), (.*?) \((.*?)\)/);
            if (match) {
                return {
                    degree: match[1],
                    institution: match[2],
                    period: match[3]
                };
            }
            return { degree: edu, institution: '', period: '' };
        });

        // Parse experience entries to extract position, company and period
        const parsedExperience = this.experience.map(exp => {
            const match = exp.match(/(.*?) at (.*?) \((.*?)\)/);
            if (match) {
                return {
                    position: match[1],
                    company: match[2],
                    period: match[3]
                };
            }
            return { position: exp, company: '', period: '' };
        });

        return `
            <div class="person-info">
                <!-- Profile Header -->
                <div class="profile-header">
                    <h3>${this.firstName} ${this.lastName}</h3>
                    <p class="title">Web Developer & Designer</p>
                    <div class="contact-info">
                        <span class="contact-item">Age: ${this.age}</span>
                        <span class="contact-item">email@example.com</span>
                        <span class="contact-item">(123) 456-7890</span>
                    </div>
                </div>
                
                <!-- Experience Section -->
                <div class="cv-section">
                    <h4>Professional Experience</h4>
                    ${parsedExperience.map(exp => `
                        <div class="experience-item">
                            <h5>${exp.position}</h5>
                            <span class="period">${exp.company} | ${exp.period}</span>
                            <p>Responsible for developing and maintaining web applications, collaborating with cross-functional teams, and implementing best practices.</p>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Education Section -->
                <div class="cv-section">
                    <h4>Education</h4>
                    ${parsedEducation.map(edu => `
                        <div class="education-item">
                            <h5>${edu.degree}</h5>
                            <span class="period">${edu.institution} | ${edu.period}</span>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Skills Section -->
                <div class="cv-section">
                    <h4>Skills</h4>
                    <div class="skills-list">
                        ${this.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

module.exports = Person;