function showContent(section) {
    const content = document.getElementById('content');
    let htmlContent = '';

    switch (section) {
        case 'about':
            htmlContent = `
                <h2>About Us</h2>
                <p>Welcome to the Computer Science and Engineering Department. We are dedicated to providing high-quality education and research opportunities in the field of computer science and engineering.</p>
            `;
            break;
        case 'faculty':
            htmlContent = `
                <h2>Faculty</h2>
                <ul>
                    <li>Dr.Harini Madam - HOD of CSE</li>
                    <li>Dr. Tirupaiah  - Professor</li>
                    <li> Dr. Sharma - Professor</li>
                    <li>Dr. Nagesh Babu - Professor</li>
                    <li>Dr. N Lakshmi Narayan - Lecturer</li>
                    <li> Dr. Madhuri Madam - Professor</li>
                </ul>
            `;
            break;
        case 'placements':
            htmlContent = `
                <h2>Placements</h2>
                <p>CSE placements offer a range of opportunities in top tech companies, focusing on roles in software development, AI, data science, and cybersecurity. To enhance your chances, maintaining a strong CGPA, developing technical skills, and preparing for interviews are essential steps. Overview of CSE Placement Opportunities
<br><br>
--> Placement rates for CSE students are often above 90%, with many securing offers before graduation.
<br><br>
--> Major recruiters include Google, Amazon, Microsoft, and numerous startups, offering competitive salary packages.</p>
            `;
            break;
        case 'courses':
            htmlContent = `
                <h2>Courses Offered</h2>
                <ul>
                    <li>Introduction to Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Operating Systems</li>
                    <li>Software Engineering</li>
                    <li>Machine Learning</li>
                    <li>Web Development</li>
                    <li>software Engineering</li>
                    <li>Modern Application Development</li>
                </ul>
            `;
            break;


            case 'contact':
                htmlContent = `
                    <h2>For More Details: contact:</h2>
                    <ul>
                        <p>Nayunipalli village, ChallaReddy Palem Post,</p>
                        <p>Vetapalem Mandal, Chirala</p>
                        <p>Bapatla District, Andhra Pradesh – 523187, INDIA</p>
                        <p>Phone: 08594-247500, 246100, 246102, 202401, 202402,</p>
                        <p>Fax: 08594-247300</p>
                        <p>E-Mail: sacetchirala@gmail.com</p>
                    </ul>
                `;
                break;


        default:
            htmlContent = `
                <h2>Welcome to the CSE Department</h2>
                <p>The Computer Science and Engineering (CSE) department is a vital part of modern educational institutions, focusing on the study of computer systems, software development, and the theoretical foundations of computing. It plays a crucial role in preparing students for careers in technology, research, and innovation.</p>
            `;
    }

    content.innerHTML = htmlContent;
}