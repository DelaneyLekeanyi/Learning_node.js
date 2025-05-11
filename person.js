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
        return `
            <div class="person-info">
                <h3>${this.firstName} ${this.lastName}</h3>
                <p><strong>Age:</strong> ${this.age}</p>
                
                <h4>Education</h4>
                <ul>
                    ${this.education.map(edu => `<li>${edu}</li>`).join('')}
                </ul>
                
                <h4>Skills</h4>
                <ul>
                    ${this.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
                
                <h4>Experience</h4>
                <ul>
                    ${this.experience.map(exp => `<li>${exp}</li>`).join('')}
                </ul>
            </div>
        `;
    }
}

export default Person;