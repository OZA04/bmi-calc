function calculateBMI() {
  let height = Number(document.querySelector("#height").value);
  let weight = Number(document.querySelector("#weigth").value);

  // 빈 값 예외 처리
  if (!height || !weight) {
    alert("키와 몸무게를 정확히 입력해 주세요.");
    return;
  }

  let heightM = height / 100;
  let bmi = weight / (heightM * heightM);
  let bmiFixed = bmi.toFixed(1);

  // 정상 범위 기준(BMI 22 기준) 평균체중 계산
  let normalWeight = Math.round(22 * heightM * heightM);

  // BMI 단계 분기 및 색상 설정
  let state = "";
  let stateColor = "#333";

  if (bmi >= 35) {
    state = "3단계 비만";
    stateColor = "#4444bc";
  } else if (bmi >= 30) {
    state = "2단계 비만";
    stateColor = "#9b51e0";
  } else if (bmi >= 25) {
    state = "1단계 비만";
    stateColor = "#e55656";
  } else if (bmi >= 23) {
    state = "비만전단계";
    stateColor = "#b58d28";
  } else if (bmi >= 18.5) {
    state = "정상";
    stateColor = "#52a335";
  } else {
    state = "저체중";
    stateColor = "#4a90e2";
  }

  // 텍스트 업데이트 및 색상 적용
  const bmiValEl = document.querySelector("#bmi-val");
  bmiValEl.textContent = bmiFixed;
  bmiValEl.style.color = stateColor;

  const stateValEl = document.querySelector("#state-val");
  stateValEl.textContent = state;
  stateValEl.style.color = stateColor;

  document.querySelector("#normal-weight-val").textContent = normalWeight;

  // 화살표 위치 백분율 계산 (BMI 10~40 범위)
  let minBmi = 10;
  let maxBmi = 40;
  let percentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;

  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;

  document.querySelector("#arrow").style.left = percentage + "%";

  // 결과 및 그래픽 노출
  document.querySelector("#result-text").classList.remove("hidden");
  document.querySelector("#gauge-container").classList.remove("hidden");
}