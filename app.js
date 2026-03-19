/* Interactivity for Metal Detector Guide App */
let currentStep = 1;

function startGuide() {
    document.getElementById('section-components').style.display = 'none';
    document.getElementById('guide-app').style.display = 'block';
    updateStepVisibility();
}

function nextStep() {
    if (currentStep < 3) {
        currentStep++;
        updateStepVisibility();
    } else {
        alert("모든 단계를 완료했습니다! 실험을 시작해 보세요.");
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepVisibility();
    }
}

function updateStepVisibility() {
    // Hide all steps
    const steps = document.querySelectorAll('.step-slide');
    steps.forEach(step => step.classList.remove('active'));

    // Show current step
    document.getElementById('step-' + currentStep).classList.add('active');

    // Update Next button text
    if (currentStep === 3) {
        document.getElementById('btn-next').innerText = '완료';
    } else {
        document.getElementById('btn-next').innerText = '다음 단계';
    }
}

function copyCode() {
    const code = document.getElementById('arduino-code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("코드가 클립보드에 복사되었습니다!");
    });
}

// Simple Page Animation on Load
window.onload = () => {
    document.getElementById('main-title').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('main-title').style.transition = 'opacity 1s ease';
        document.getElementById('main-title').style.opacity = '1';
    }, 100);
};
