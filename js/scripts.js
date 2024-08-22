// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('form-container');
    const mainContent = document.getElementById('main-content');
    const form = document.getElementById('access-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const code = document.getElementById('code').value;
        const username = document.getElementById('username').value;

        // Check if the code is "1234" and username is not empty
        if (code === '1115' && username.trim() !== '') {
            // Hide the form and show the main content
            formContainer.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            // Handle invalid input
            alert('يرجى إدخال الرمز الصحيح واسم المستخدم.');
        }
    });
});
function showModal() {
    document.getElementById('code-modal').style.display = 'flex';
}

function verifyCode() {
    var inputCode = document.getElementById('code-input').value;
    var correctCode = '1115';
    var username = document.getElementById('username-input').value;

    if (inputCode === correctCode && username.trim() !== "") {
        document.getElementById('code-modal').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        alert('الكود المدخل أو اسم المستخدم غير صحيح. يرجى المحاولة مرة أخرى.');
    }
}
function verifyCode() {
    const codeInput = document.getElementById("code-input").value;
    const userName = document.getElementById("username-input").value;

    // التحقق من الكود
    if (codeInput === "1115") {
        alert(`مرحبًا ${userName}! تم التحقق بنجاح.`);
        // يمكنك تنفيذ إجراءات أخرى هنا بعد التحقق من الكود، مثل إغلاق النموذج أو التوجيه إلى صفحة أخرى.
        document.getElementById("code-modal").style.display = "none"; // إخفاء النافذة المنبثقة
    } else {
        alert("الكود غير صحيح. حاول مرة أخرى.");
    }
}

function showModal() {
    document.getElementById("code-modal").style.display = "block";
}

document.getElementById('facebook-link').addEventListener('click', function(event) {
    event.preventDefault(); // منع الرابط من إعادة تحميل الصفحة
    window.open('https://www.facebook.com/profile.php?id=61561184886015&mibextid=ZbWKwL', '_blank');
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.about');

    // Change background color on hover
    aboutSection.addEventListener('mouseover', function() {
        aboutSection.style.backgroundColor = "#e0ffe0";
    });

    aboutSection.addEventListener('mouseout', function() {
        aboutSection.style.backgroundColor = "#f9f9f9";
    });

    // Fade-in effect when the section scrolls into view
    window.addEventListener('scroll', function() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            aboutSection.style.opacity = "1";
            aboutSection.style.transform = "translateY(0)";
        } else {
            aboutSection.style.opacity = "0";
            aboutSection.style.transform = "translateY(20px)";
        }
    });
});
function checkAnswers() {
    let correct = 0;

    // السؤال الأول
    let answer1 = document.querySelector('input[name="q1"]:checked');
    if (answer1) {
        if (answer1.value == '6') {
            correct++;
            answer1.parentElement.style.color = 'green';
        } else {
            answer1.parentElement.style.color = 'red';
            document.querySelector('input[name="q1"][value="6"]').parentElement.style.color = 'green';
        }
    }

    // السؤال الثاني
    let answer2 = document.querySelector('input[name="q2"]:checked');
    if (answer2) {
        if (answer2.value == '0') {
            correct++;
            answer2.parentElement.style.color = 'green';
        } else {
            answer2.parentElement.style.color = 'red';
            document.querySelector('input[name="q2"][value="0"]').parentElement.style.color = 'green';
        }
    }

    // السؤال الثالث
    let answer3 = document.querySelector('input[name="q3"]:checked');
    if (answer3) {
        if (answer3.value == '3') {
            correct++;
            answer3.parentElement.style.color = 'green';
        } else {
            answer3.parentElement.style.color = 'red';
            document.querySelector('input[name="q3"][value="3"]').parentElement.style.color = 'green';
        }
    }

    // السؤال الرابع
    let answer4 = document.querySelector('input[name="q4"]:checked');
    if (answer4) {
        if (answer4.value == '2') {
            correct++;
            answer4.parentElement.style.color = 'green';
        } else {
            answer4.parentElement.style.color = 'red';
            document.querySelector('input[name="q4"][value="2"]').parentElement.style.color = 'green';
        }
    }

    // السؤال الخامس
    let answer5 = document.querySelector('input[name="q5"]:checked');
    if (answer5) {
        if (answer5.value == '3') {
            correct++;
            answer5.parentElement.style.color = 'green';
        } else {
            answer5.parentElement.style.color = 'red';
            document.querySelector('input[name="q5"][value="3"]').parentElement.style.color = 'green';
        }
    }

    // السؤال السادس
    let answer6 = document.querySelector('input[name="q6"]:checked');
    if (answer6) {
        if (answer6.value == '5') {
            correct++;
            answer6.parentElement.style.color = 'green';
        } else {
            answer6.parentElement.style.color = 'red';
            document.querySelector('input[name="q6"][value="5"]').parentElement.style.color = 'green';
        }
    }

    // السؤال السابع
    let answer7 = document.querySelector('input[name="q7"]:checked');
    if (answer7) {
        if (answer7.value == '3/5') {
            correct++;
            answer7.parentElement.style.color = 'green';
        } else {
            answer7.parentElement.style.color = 'red';
            document.querySelector('input[name="q7"][value="3/5"]').parentElement.style.color = 'green';
        }
    }

    // السؤال الثامن
    let answer8 = document.querySelector('input[name="q8"]:checked');
    if (answer8) {
        if (answer8.value == '6') {
            correct++;
            answer8.parentElement.style.color = 'green';
        } else {
            answer8.parentElement.style.color = 'red';
            document.querySelector('input[name="q8"][value="6"]').parentElement.style.color = 'green';
        }
    }

    // السؤال التاسع
    let answer9 = document.querySelector('input[name="q9"]:checked');
    if (answer9) {
        if (answer9.value == '5') {
            correct++;
            answer9.parentElement.style.color = 'green';
        } else {
            answer9.parentElement.style.color = 'red';
            document.querySelector('input[name="q9"][value="5"]').parentElement.style.color = 'green';
        }
    }


    // السؤال الحداشر
    let answer11 = document.querySelector('input[name="q11"]:checked');
    if (answer11) {
        if (answer11.value == '4') {
            correct++;
            answer11.parentElement.style.color = 'green';
        } else {
            answer11.parentElement.style.color = 'red';
            document.querySelector('input[name="q11"][value="4"]').parentElement.style.color = 'green';
        }
    }

    // السؤال الثاني عشر
    let answer12 = document.querySelector('input[name="q12"]:checked');
    if (answer12) {
        if (answer12.value == '3') {
            correct++;
            answer12.parentElement.style.color = 'green';
        } else {
            answer12.parentElement.style.color = 'red';
            document.querySelector('input[name="q12"][value="3"]').parentElement.style.color = 'green';
        }
    }

    // عرض النتيجة النهائية
    document.getElementById('quiz-result').textContent = `لقد حصلت على ${correct} من 11.`;
}

document.addEventListener("DOMContentLoaded", function() {
    const aboutSections = document.querySelectorAll('.about2, .about');

    // Function to show the sections when they are scrolled into view
    function showSections() {
        aboutSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (sectionPosition < screenPosition) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Trigger the function on scroll
    window.addEventListener('scroll', showSections);

    // Trigger on load for any sections that might already be in view
    showSections();
});



document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('download-button');

    downloadButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action
        alert('يتم الآن تحميل الكتاب. شكراً لاختيارك!');
        // You can also handle analytics tracking here, e.g., tracking downloads
        window.location.href = downloadButton.href; // Redirect to PDF download
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            alert(`تم الانتقال إلى القسم: ${link.textContent}`);
        });
    });
});
document.getElementById('playPauseBtn').addEventListener('click', function () {
    var video = document.getElementById('myVideo');
    if (video.paused) {
        video.play();
        this.textContent = 'Pause';
    } else {
        video.pause();
        this.textContent = 'Play';
    }
});


