function calculate_grade() {
    let score = parseFloat(document.getElementById("score_input").value);
    let result = "";
    if (score >= 80) {
    result = "A";
    } else if (score >= 60 && score < 80) {
    result = "B";
    } else if (score >= 40 && score < 60) {
    result = "C";
    } else {
    result = "F";
    }
    document.getElementById("grade_span").textContent = result;
    }
    